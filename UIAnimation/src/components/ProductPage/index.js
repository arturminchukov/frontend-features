import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ImageAndVariations from '../ImageAndVariations'
import { CartContext } from '../../cart-context';
import { AnimateOnChange } from 'react-animation';

const ProductPage = ({ className, title, description, image }) => {
  const { addToCart } = useContext(CartContext)
  const [currentPrice, setCurrentPrice] = useState('19.99')
  const [addingToCart, setAddingToCart] = useState(false)
  const handleAddToCart = () => {
    addToCart()
    setAddingToCart(true)
    setTimeout(() => {
      setAddingToCart(false)
    }, 800)
  }
  return (
    <div className={className}>
      <ImageAndVariations
        title={title}
        image={image}
        currentPrice={currentPrice}
        setCurrentPrice={setCurrentPrice}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p className="price"><AnimateOnChange durationOut={200}>${currentPrice}</AnimateOnChange></p>

        <button className="addToCart" onClick={handleAddToCart}>
          <AnimateOnChange animationIn="popIn" animationOut="popOut" durationOut={300}>
          {addingToCart ? 'Added to cart ': 'Add to Cart'}
          </AnimateOnChange>
        </button>
      </div>
    </div>
  )
}

ProductPage.propTypes = {
  className: PropTypes.string
}

const StyledProductPage = styled(ProductPage)`
  ${props => props.theme.animations.show};
  animation-delay: 200ms;
  opacity: 0;
  background: ${props => props.theme.colors.contentBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin: 20px auto;
  max-width: ${props => props.theme.maxContainerWidth};
  position: relative;
  display: flex;

  .content {
    ${props => props.theme.animations.slice};
    animation-delay: 200ms;
    margin: 0 40px;
  }

  .price {
    font-size: 32px;
    font-weight: ${props => props.theme.fontWeights.bold};
    margin: 0;
  }

  .addToCart {
    background: #0074d9;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    padding: 14px 20px;
    margin: 10px 0;
  }
`

StyledProductPage.displayName = 'ProductPage'

export default StyledProductPage
