//храним все данные которые касаются страницы с телефоном
import { FETCH_PHONE_BY_ID_SUCCESS } from "../ActionTypes"
import * as R from "ramda"


const initialState = {
          id: null
}

export default (state = initialState, { type, payload }) => {

          switch (type) {
                    case FETCH_PHONE_BY_ID_SUCCESS: {
                              return R.merge(state, {
                                        id: payload.id
                              })
                              //           return {
                              //                     ...state,
                              //                     id: payload.id
                              //           }
                    }



                    default:
                              return state
          }

}