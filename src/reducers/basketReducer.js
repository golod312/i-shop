import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET } from "../ActionTypes";

const initialState = {
          ids: []
}




export default (state = initialState, { type, payload }) => {

          switch (type) {
                    case ADD_PHONE_TO_BASKET:

                              return {
                                        ...state,
                                        ids: [...state.ids, ...payload]

                              }

                    case REMOVE_PHONE_FROM_BASKET:
                              return {
                                        ...state,
                                        ids: state.ids.filter(el => el !== payload)
                              }

                    case CLEAN_BASKET:
                              return initialState


                    default: return state

          }
}