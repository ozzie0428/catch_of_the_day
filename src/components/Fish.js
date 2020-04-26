import React, { Component } from 'react'
import { formatPrice } from '../helpers'

export default class Fish extends Component {
    render() {
        const {image, name, desc, price, status } = this.props.details
        return (
            <li className="menu-fish">
                <img src={image} alt={image} />
                <h3 className="fish-name">
                {name}
                <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button>Add to Cart</button>
            </li>
        )
    }
}
