import {
          FETCH_PHONES_START,
          FETCH_PHONES_SUCCESS,
          FETCH_PHONES_ERROR,
          LOAD_MORE_PHONES_START,
          LOAD_MORE_PHONES_SUCCESS,
          LOAD_MORE_PHONES_ERROR,
          FETCH_PHONE_BY_ID_ERROR,
          FETCH_PHONE_BY_ID_SUCCESS,
          FETCH_PHONE_BY_ID_START,
          ADD_PHONE_TO_BASKET,
          SEARCH_PHONE,
          FETCH_CATEGORIES_SUCCESS,
          FETCH_CATEGORIES_START,
          FETCH_CATEGORIES_ERROR,
          REMOVE_PHONE_FROM_BASKET,
          CLEAN_BASKET
} from "../ActionTypes"

import {
          fetchPhones as fetchPhonesApi,
          loadMorePhones as loadMorePhonesApi,
          fetchPhonesById as fetchPhonesByIdApi,
          fetchCategories as fetchCategoriesApi
} from "./api/index"
import { getRenderedPhonseLength } from "../selectors"



export const fetchPhones = () => async dispatch => {
          //redux thunk middleware описывает actions в виде функций
          dispatch({
                    type: FETCH_PHONES_START
          })
          try {
                    const phones = await fetchPhonesApi()

                    dispatch({
                              type: FETCH_PHONES_SUCCESS,
                              payload: phones
                    })
          }
          catch (error) {
                    dispatch({
                              type: FETCH_PHONES_ERROR,
                              payload: error,
                              error: true
                    })
          }

}

export const fetchCategories = () => async dispatch => {
          dispatch({
                    type: FETCH_CATEGORIES_START
          })
          try {
                    const categories = await fetchCategoriesApi()
                    dispatch({
                              type: FETCH_CATEGORIES_SUCCESS,
                              payload: categories
                    })
          }
          catch (error) {
                    dispatch({
                              type: FETCH_CATEGORIES_ERROR,
                              payload: error,
                              error: true
                    })
          }
}

export const loadMorePhones = () => async (dispatch, getState) => {

          const offset = getRenderedPhonseLength(getState())
          //количество данных которые нужно загружать каждый раз, передается в API
          dispatch({
                    type: LOAD_MORE_PHONES_START
          })
          try {
                    const phones = await loadMorePhonesApi({ offset })
                    dispatch({
                              type: LOAD_MORE_PHONES_SUCCESS,
                              payload: phones
                    })
          }
          catch (error) {
                    dispatch({
                              type: LOAD_MORE_PHONES_ERROR,
                              payload: error,
                              error: true
                    })
          }

}

export const fetchPhonesById = id => async dispatch => {
          dispatch({
                    type: FETCH_PHONE_BY_ID_START
          })

          try {
                    const phone = await fetchPhonesByIdApi(id)

                    dispatch({
                              type: FETCH_PHONE_BY_ID_SUCCESS,
                              payload: phone
                    })
          }
          catch (error) {
                    dispatch({
                              type: FETCH_PHONE_BY_ID_ERROR,
                              payload: error,
                              error: true
                    })
          }

}

export const addPhoneToBasket = id => dispatch => {

          dispatch({
                    type: ADD_PHONE_TO_BASKET,
                    payload: id
          })
}

export const searchPhone = text => dispatch => {
          dispatch({
                    type: SEARCH_PHONE,
                    payload: text
          })
}

export const removePhoneFromBasket = id => dispatch => {
          dispatch({
                    type: REMOVE_PHONE_FROM_BASKET,
                    payload: id
          })
}

export const cleanBasket = () => dispatch => {
          dispatch({
                    type: CLEAN_BASKET
          })
}

export const basketCheckout = phones => {
          alert(JSON.stringify(phones))
}




