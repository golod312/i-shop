import * as R from "ramda"


// export const getPhonesById = (state, id) => state.phonesReducer[id]
//функция получает поле объекта state по id
export const getPhonesById = (state, id) => R.prop(id, state.phonesReducer)


export const getPhones = (state, ownProps) => {
          const phones = state.phonesPageReducer.ids.map(phonesId => getPhonesById(state, phonesId))
          const search = state.phonesPageReducer.search
          const categoriesId = ownProps.match.params.id
          let phonesFilter = []

          // const phonesFilter = phones.filter(el => (el.name.toLowerCase().includes(search)))
          // const phonesFilter = categoriesId ? phones.filter(el => el.categoryId === categoriesId).filter(el => new RegExp(search, "i").test(el.name)) : phones.filter(el => new RegExp(search, "i").test(el.name))
          if (categoriesId) {
                    phonesFilter = phones.filter(el => el.categoryId === categoriesId).filter(el => new RegExp(search, "i").test(el.name))
          }
          else {
                    phonesFilter = phones.filter(el => new RegExp(search, "i").test(el.name))
          }
          return phonesFilter
}


//мы хотим пройтись map по нашим id и на стрнаице вывести список телефонов из 
//  редьюсера  phonesReducer исходя из id

//эти функции не мутируют данные 


export const getRenderedPhonseLength = (state) => R.length(state.phonesPageReducer.ids)
// export const getRenderedPhonseLength = (state) => state.phonesPageReducer.ids.length

export const getTotalPrice = state => {

          // return state.basketReducer.ids.map(id => (getPhonesById(state, id)))
          //           .reduce((total, amount) => (total + amount.price), 0)

          const totalPrice = R.compose(
                    R.sum,
                    R.pluck("price"),
                    R.map(id => getPhonesById(state, id))
          )(state.basketReducer.ids)

          return totalPrice




}
export const getTotalBasketCount = state => state.basketReducer.ids.length

export const getCategories = state => Object.values(state.categoriesReducer)

// export const getActiveCategoryId = ownProps => ownProps.match.params.id

export const getBasketPhonesWithCount = state => {
          //к нам пришел массив id телефонов которые хочет купить клиент
          //Задача выдать массив объектов без повтора по id, в каждый объект элемента массива добавить поле count
          //в которое записать количество раз повторяющихся id в первоначальном массиве 

          const phone = state.basketReducer.ids.map(el => getPhonesById(state, el))
          //получаем массив телефонов отфильтрованых по  id
          const uniqIds = [...new Set(phone)]
          // удаляем дубликаты 
          const phoneCount = id => state.basketReducer.ids.filter(el => el === id).length
          // функция которая возвращает сколько раз id был в массиве, то есть количество купленных
          // товаров одного типа 
          const phoneWithCount = uniqIds.map(el => ({ ...el, ...{ count: phoneCount(el.id) } }))
          // добавляем в наш массив без дубликатов, в каждый объект новое поле count с количеством
          // товаров одного типа 
          return phoneWithCount
}




