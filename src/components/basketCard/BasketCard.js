import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { getTotalPrice, getTotalBasketCount } from "../../selectors"

const BasketCard = ({ totalPrice, totalBasketCount }) => {

          return (
                    <div className="cart">
                              <div className="dropdown">
                                        <Link to="/basket"
                                                  id="dLable"
                                                  className="btn btn-inverse btn-block btn-lg">
                                                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                  <span> {totalBasketCount} item(s) - $ {totalPrice}</span>
                                        </Link>
                              </div>
                    </div>
          )
}

const mapState = state => {
          return {
                    totalPrice: getTotalPrice(state),
                    totalBasketCount: getTotalBasketCount(state)
          }
}

export default connect(mapState, null)(BasketCard)