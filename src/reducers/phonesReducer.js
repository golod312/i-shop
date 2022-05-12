import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS, FETCH_PHONE_BY_ID_SUCCESS } from "../ActionTypes"
import * as R from "ramda"


//тут мы получаем все телефоны которые приходят с сервера 
const initialState = {}
export default (state = initialState, { type, payload }) => {
          switch (type) {
                    case FETCH_PHONES_SUCCESS: {

                              const newValue = R.indexBy(R.prop('id'), payload)
                              //ramda выполняет деструкризизацию данных 
                              return R.merge(state, newValue)
                              // const categories = payload.reduce((acc, item) => {
                              //           acc[item.id] = item
                              //           return acc
                              // }, {})
                              // return {
                              //           ...state, ...categories
                              // }
                    }
                    case LOAD_MORE_PHONES_SUCCESS: {

                              const moreValue = R.indexBy(R.prop('id'), payload)
                              return R.merge(state, moreValue)
                              // return {
                              //           ...state, ...moreValue

                              // }



                    }
                    case FETCH_PHONE_BY_ID_SUCCESS: {
                              // return {
                              //           ...state,
                              //           phone: payload
                              // }
                              return R.assoc(payload.id, payload, state)
                    }



                    default:
                              return state
          }

}