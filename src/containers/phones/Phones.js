import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPhones, loadMorePhones, addPhoneToBasket, fetchCategories } from "../../actions/index"
import { getPhones } from "../../selectors"
import Layout from "../leyout/Layout"


class Phones extends Component {

          componentDidMount() {
                    this.props.fetchPhones()
                    this.props.fetchCategories()
          }

          renderPhone(phone) {
                    const shortDiscription = phone.description.substring(0, 60)
                    const { addPhoneToBasket } = this.props
                    return (<div className="col-sm-4 col-lg-4 col-md-4 book-list" key={phone.id}>
                              <div className="thumbnail">
                                        <img
                                                  src={phone.image}
                                                  alt={phone.name}
                                                  className="img-thumbnail" />
                                        <div className="caption">
                                                  <h4 className="pull-right">
                                                            ${phone.price}
                                                  </h4>
                                                  <h4>
                                                            <Link to={`phones/${phone.id}`}>
                                                                      {phone.name}
                                                            </Link>
                                                  </h4>
                                                  <p>{shortDiscription}</p>
                                                  <p className="itemButton">
                                                            <button className="btn btn-primary"
                                                                      onClick={() => addPhoneToBasket(phone.id)}
                                                            >
                                                                      Buy now!
                                                            </button>
                                                            <Link to={`phones/${phone.id}`} className="btn btn-default">
                                                                      More info
                                                            </Link>
                                                  </p>
                                        </div>
                              </div>
                    </div>)
          }

          render() {
                    const { phones, loadMorePhones } = this.props


                    return (
                              <Layout>
                                        <div>
                                                  <div className="books row">
                                                            {phones.map((phone) => this.renderPhone(phone))}
                                                  </div>
                                                  <div className="row ">
                                                            <div className="col-md-12">
                                                                      <button className="pull-right btn btn-primary"
                                                                                onClick={loadMorePhones}>
                                                                                Load More
                                                                      </button>
                                                            </div>
                                                  </div>
                                        </div>
                              </Layout>
                    )
          }


}

const mapState = (state, ownProps) => {
          return {
                    phones: getPhones(state, ownProps),

                    //функция которая занимается фильтрацией и тарансформацией данных
          }
}



export default connect(mapState, { fetchPhones, loadMorePhones, addPhoneToBasket, fetchCategories })(Phones)


