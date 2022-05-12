import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCategories, } from "../../selectors"
// import { withRouter } from "react-router";
// import { compose } from "redux";

const Categories = ({ categories, }) => {

          const renderCategory = category => {
                    return (
                              <NavLink to={`/categories/${category.id}`}
                                        className="list-group-item"
                                        style={({ isActive }) => ({ background: isActive ? "active" : "" })}
                                        key={category.id}
                              > {category.name}</NavLink >
                    )
          }
          return <div className="well">
                    <h4>Brand</h4>
                    <div className="list-group">
                              <NavLink to="/"
                                        exact
                                        className="list-group-item"
                                        style={({ isActive }) => ({ background: isActive ? "" : "active" })}
                              >All</NavLink>
                              {categories.map(item => renderCategory(item))}
                    </div>
          </div>
}


const mapState = (state) => {
          return {
                    categories: getCategories(state),
                    // activeCategoryId: getActiveCategoryId(ownProps)


          }
}

// export default compose(
//           withRouter,
//           connect(mapState, null)
// )(Categories)

export default connect(mapState, null)(Categories)

//обернули компонент Categories в withRouter 
//для того что бы получить  доступ к ownProps из Routa,теперь мы можем получить категорию из path и через 
//onwProps передать ее в компоненте Phones в качестве пропсов в метод    phones: getPhones(state,ownProps),