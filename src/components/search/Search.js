import React, { useState } from "react";
import { connect } from "react-redux";
import { searchPhone } from "../../actions/index"

const Search = ({ searchPhone }) => {
          //ПЕРЕПИСАТЬ ПОД АССИНХРОННУЮ ОПЕРАЦИЮ, ПОИСК ПРОДУКТА ПО ЗАПРОСУ НА СЕРВЕР
          const [state, setState] = useState()

          const handleSubmit = (e) => {
                    e.preventDefault()
                    searchPhone(state)
          }

          const handleChange = (e) => setState(e.target.value)


          return <div className="well blosd">
                    <div className="lead">Quick shop</div>
                    <div className="input-group">
                              <form onSubmit={handleSubmit}>
                                        <input onChange={handleChange}
                                                  type="text"
                                                  className="form-control"
                                        ></input>
                              </form>
                              <span className="input-group-btn">
                                        <button className="btn btn-default" >
                                                  <span className="glyphicon glyphicon-search"></span>


                                        </button>
                              </span>
                    </div>
          </div>
}


export default connect(null, { searchPhone })(Search)
