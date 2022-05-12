//получаем телефоны только с страницы phones
//тут будем храинть id телефонов которые мы зафетчили
import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS, SEARCH_PHONE } from "../ActionTypes"
import * as R from "ramda"

const initialState = {
          ids: [],
          search: ""
}

export default (state = initialState, { type, payload }) => {

          switch (type) {
                    case FETCH_PHONES_SUCCESS:

                              return R.merge(state, {
                                        ids: R.pluck("id", payload)
                              })
                    // const ids = payload.map(id => id.id)
                    // return {
                    //           ...state,
                    //           ids: ids
                    // }


                    //метод библиотеки ramda который дoстает из нашего массива данных, который 
                    //мы зафетчили только ключи id
                    case LOAD_MORE_PHONES_SUCCESS:
                              const ids = R.pluck("id", payload)
                              return R.merge(state, {
                                        ids: R.concat(state.ids, ids)
                              })
                    // return {
                    //           ...state,
                    //           ids: [...state.ids, ...ids]
                    // }
                    case SEARCH_PHONE:
                              return R.merge(state, {
                                        search: payload
                              })
                    // return {
                    //           ...state,
                    //           search: payload
                    // }

                    default:
                              return state;
          }
}