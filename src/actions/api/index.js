
import phones from "./mockPhones"
import categories from "./mockCategories"

// import axios from "axios"
import * as R from "ramda"

export const fetchPhones = async () => {
          return new Promise((resolve, reject) => {
                    resolve(phones)

          })
          // const responce = await axios.get("")
          // return responce

}

export const loadMorePhones = async ({ offset }) => {
          console.log(offset);
          return new Promise((resolve, reject) => {
                    resolve(phones)
          })

          // const responce = await axios.get("")
          // return responce
}


export const fetchPhonesById = async (id) => {
          const phone = R.find(R.propEq("id", id), phones)
          // const phone = phones[id - 1]

          return new Promise((resolve, reject) => {
                    resolve(phone)
          })

          // const responce = await axios.get("")
          // return responce
}

export const fetchCategories = async () => {
          return new Promise((resolve, rejevt) => {
                    resolve(categories)
          })

          // const responce = await axios.get("")
          // return responce
}