import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { addToCar, fetchProductsIfNeeded } from '../actions'
import Product from '../components/ProductField/Product'
import ProductCategory from '../components/ProductField/ProductCategory';
import '../styles/loader.css'
class ProductsContainer extends Component {

  componentDidMount() {
    this.props.fetchProductsIfNeeded()
  }

  render() {
    const { isFetching } = this.props.status
    const productsItems = isFetching ? (
      <div className="loader">
        <div className="wineglass left">
          <div className="top"></div>
        </div>
        <div className="wineglass right">
          <div className="top"></div>
        </div>
      </div>
    ) : (
        Object.keys(this.props.productsByCategory)
          .sort()
          .map(item => (
          <ProductCategory
            key={item}
            categoryName={item}
          >
            {
              this.props.productsByCategory[item]
              .sort((a,b) => b.price - a.price)
              .map(i =>
                <Product
                  key={i.id}
                  name={i.name}
                  price={i.price}
                  onAddToCarClicked={() => this.props.addToCar(i.id)}
                />
              )
            }
          </ProductCategory>
        ))
      )
    return (
      <div>
        {productsItems}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    status: state.products.status,
    products: getVisibleProducts(state.products),
    productsByCategory: state.products.byCategory
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProductsIfNeeded: () => dispatch(fetchProductsIfNeeded()),
    addToCar: (id) => dispatch(addToCar(id))
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired,
  addToCar: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
