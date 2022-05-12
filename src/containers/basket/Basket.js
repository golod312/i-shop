import React, { Component } from "react";
import { connect } from "react-redux";
import { getTotalPrice, getBasketPhonesWithCount } from "../../selectors"
import { removePhoneFromBasket, cleanBasket, basketCheckout } from "../../actions/index"
import { Link } from "react-router-dom";

class Basket extends Component {

          renderContent() {
                    const { phones, totalPrice, removePhoneFromBasket } = this.props
                    return <div>
                              {phones.length === 0 && <div><img
                                        src="https://as1.ftcdn.net/v2/jpg/02/62/20/02/1000_F_262200245_V1nLvTSo95dYCjlRzbr2nq4g01SMydDK.jpg"
                                        alt="shopping cart is ampty"
                                        className="img-thumbnail"
                              ></img></div>}
                              <div className="table-responsive">
                                        <table className="table-bordered table-striped table-condensed cf">
                                                  <tbody>
                                                            {phones.map(phone => (<tr
                                                                      key={phone.id}
                                                                      className="item-checout">
                                                                      <td className="first-column-checkout">
                                                                                <img className="img-thumbnail"
                                                                                          src={phone.image}
                                                                                          alt={phone.name} />
                                                                      </td>
                                                                      <td>{phone.name}</td>
                                                                      <td>${phone.price}</td>
                                                                      <td>{phone.count}</td>
                                                                      <td>
                                                                                <span className="delete-cart" onClick={() => removePhoneFromBasket(phone.id)}></span>
                                                                      </td>
                                                            </tr>))}
                                                  </tbody>
                                        </table>
                              </div>
                              {phones.length !== 0 && <div className="row">
                                        <div className="pull-right total-user-checkout">
                                                  <b>Total: </b>
                                                  ${totalPrice}
                                        </div>
                              </div>}
                    </div>
          }


          renderSidebar() {
                    const { phones, cleanBasket, basketCheckout } = this.props
                    return <div>
                              <Link to="/"
                                        className="btn btn-info"
                              >
                                        <span className="glyphicon glyphicon-info-sign"></span>

                                        <span>  Continue shopping!</span>
                              </Link>
                              {phones.length !== 0 &&
                                        <div>
                                                  <button
                                                            onClick={cleanBasket}
                                                            className="btn btn-danger">
                                                            <span className="glyphicon glyphicon-trash"></span>
                                                            <span>  Clean cart</span>
                                                  </button>
                                                  <button
                                                            className="btn btn-success"
                                                            onClick={() => basketCheckout(phones)}>
                                                            <span className="glyphicon glyphicon-envelope"></span>
                                                            <span>  Checkout</span>
                                                  </button>




                                        </div>}
                    </div>
          }
          render() {
                    const { phones, totalPrice } = this.props
                    console.log(phones, totalPrice);
                    return (
                              <div className="view-container">
                                        <div className="container">
                                                  <div className="row">
                                                            <div className="col-md-9">
                                                                      {this.renderContent()}
                                                            </div>
                                                            <div className="col-md-3 btn-user-checkout">
                                                                      {this.renderSidebar()}
                                                            </div>
                                                  </div>
                                        </div>
                              </div >
                    )
          }
}


const mapState = state => {
          return {
                    phones: getBasketPhonesWithCount(state),
                    totalPrice: getTotalPrice(state)
          }
}

export default connect(mapState, { removePhoneFromBasket, cleanBasket, basketCheckout })(Basket)