import { FETCH_CATEGORIES_SUCCESS } from "../ActionTypes";
import * as R from "ramda"
const initialState = {}


export default (state = initialState, { type, payload }) => {
          switch (type) {
                    case FETCH_CATEGORIES_SUCCESS:
                              // const categories = payload.reduce((acc, item) => {
                              //           acc[item.id] = item
                              //           return acc
                              // }, {})
                              // return {
                              //           ...state, ...categories
                              // }
                              const newValue = R.indexBy(R.prop('id'), payload)
                              //ramda выполняет деструкризизацию данных 
                              return R.merge(state, newValue)

                    default: return state

          }
}