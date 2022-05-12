import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

import { fetchPhonesById, addPhoneToBasket } from "../../actions/index"
import { getPhonesById } from "../../selectors";
import BasketCard from "../../components/basketCard/BasketCard";
import * as R from "ramda"

class Phone extends Component {
          componentDidMount() {
                    const id = this.props.match.params.id;
                    //берем из history
                    this.props.fetchPhonesById(id)
          }

          renderFilds() {
                    const { phone } = this.props
                    // const columnField = [...Object.entries(phone)].slice(6)
                    //преобразовываем  объект в двумерный массив и отрезаем только те 
                    //значения которые нужно вывести
                    const columnField = R.compose(R.toPairs,
                              R.pick([
                                        "cpu",
                                        "camera",
                                        "size",
                                        "weight",
                                        "display",
                                        "battery",
                                        "memory"
                              ]))(phone)


                    return columnField.map(([key, value]) => (
                              <div className="column" key={key}>
                                        <div className="ab-details-title">
                                                  {key}
                                        </div>
                                        <div className="ab-details-info">
                                                  {value}
                                        </div>
                              </div>
                    ))


          }
          renderContent() {
                    const { phone } = this.props

                    return (
                              <div className="thumbnail">
                                        <div className="row">
                                                  <div className="col-md-6">
                                                            <img className="img-thumbnail"
                                                                      src={phone.image}
                                                                      alt={phone.name} />
                                                  </div>
                                                  <div className="col-md-6">
                                                            {this.renderFilds()}
                                                  </div>

                                        </div>
                                        <div className="caption-full">
                                                  <h4 className="pull-right">{phone.price}$</h4>
                                                  <h4>{phone.name}</h4>
                                                  <p>{phone.description}</p>
                                        </div>

                              </div>
                    )
          }

          renderSideBar() {
                    const { phone, addPhoneToBasket } = this.props
                    return (
                              <div>
                                        <p className="lead"> Quick shop</p>
                                        <BasketCard />
                                        <div className="form-group">
                                                  <h1>{phone.name}</h1>
                                                  <h2>${phone.price}</h2>
                                        </div>
                                        <Link to="/" className="btn btn-info btn-block">Back to store</Link>
                                        <button type="botton" className="btn btn-success btn-block"
                                                  onClick={() => addPhoneToBasket(phone.id)}>Buy now!</button>
                              </div>
                    )
          }

          render() {
                    const { phone } = this.props
                    return (
                              <div className="view-container">
                                        <div className="container">
                                                  <div className="row">
                                                            <div className="col-md-9">
                                                                      {phone && this.renderContent()}
                                                                      {/* пока нет данных, разментка не будет рендерится */}
                                                            </div>
                                                            <div className="col-md-3">
                                                                      {phone && this.renderSideBar()}
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    )
          }
}

const mapState = state => {
          return {
                    phone: getPhonesById(state, state.phonePageReducer.id)
          }
}

export default connect(mapState, { fetchPhonesById, getPhonesById, addPhoneToBasket })(Phone)