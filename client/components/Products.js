import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getAllReviewsById} from "../store/review";

export class Products extends Component {

  render() {
    const products = this.props.products
    return (
      <div className="container">
        <div className="row">
          <div className="row">

            {/*Refine by Category*/}
            <div className="col-lg-12">
              <label>Filter</label>
              <select className="browser-default">
                <option value="" disabled defaultValue>Choose your option</option>
                <option value="0">All</option>
              </select>
            </div>

            {/*product listing*/}
            <div className="row">
              {
                products && products.map((product) => {
                  return (
                    <div className="col-md-4" key={product.id} style={{margin: 0 + 'em', paddingRight: 3 + 'em'}}>
                      <div>
                        <div style={{textAlign: 'center'}}>
                          <h3>
                            {product.title}
                            <button className="btn btn-info" value={product.id} style={{float: 'right'}}>+</button>
                          </h3>
                        </div>
                      </div>

                      <Link to={`/products/${product.id}`}>
                        <img src={product.image} className="products_image img-circle img-responsive img-center"
                             style={{width: 10 + 'em', height: 10 + 'em', align: 'center'}}/>
                      </Link>

                      <label>Cost: ${product.price}</label>
                      <h4>In stock: {product.inventory}</h4>
                      <p>
                        Rating:
                        {
                          Array(product.rating).fill('filler').map((element, index) => {
                            return (
                              <i className="glyphicon glyphicon-star" key={index}> </i>
                            )
                          })
                        }
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const mapState = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviewsById(id) {
      return dispatch(getAllReviewsById(id))
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Products)
