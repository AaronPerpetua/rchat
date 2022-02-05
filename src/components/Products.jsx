import React, { useState, useReducer } from 'react'

function Products() {

    const products = [
        {
            emoji: '🍦',
            name: 'ice cream',
            price: 5
        },
        {
            emoji: '🍩',
            name: 'donuts',
            price: 2.5,
        },
        {
            emoji: '🍉',
            name: 'watermelon',
            price: 4
        }
    ];

    const CurrencyOptions = {
        minimunFractionDigits: 2,
        maximumFractionDigits: 2,
    }

    
    function cartReducer (state, product ){
        return [...state, product]
    }


    function totalReducer (state, action ){
        if (action.type === 'add'){
            return state + action.price
        }
            return state - action.price
    }
    const [cart, setCart] = useReducer(cartReducer, []);
    const [total, setTotal] = useReducer(totalReducer, 0);

    function getTotal() {
        return total.toLocaleString(undefined, CurrencyOptions)
    }



    function add(product) {
        setCart(product.name)
        setTotal(product.price);
    }


    return (
        <div>
            <p>Products</p>
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>Total: {getTotal(total)}</div>
            {products.map((product) => (
                <div key={product.name}>
                    <div className="product"><span role="img" aria-label={product.name}>{product.emoji}</span></div>
                    <button onClick={() => add(product)}>Add</button> <button onClick={() => {
                        setCart([]);
                        setTotal(0);
                    }}>Remove</button>

                </div>
            ))}

        </div>
    )
}

export default Products
