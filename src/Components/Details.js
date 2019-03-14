import React, {Component} from 'react';
import { ProductConsumer } from './context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                { value => {
                    const { id, title, img, price, company, info, inCart } = value.detailProduct;
                    return(
                        <div className = 'container py-5'>
                            { /* Title*/ }
                            <div className = 'row'>
                                <div className = 'col-10 text-center text-slanted text-blue mx-auto my-5'>
                                    <h1>{ title }</h1>
                                </div>
                            </div>
                            { /* End of Title */ }
                            { /* Product Info */ }
                            <div className = 'row'>
                                <div className = 'col-10 mx-auto col-md-6 my-3'>
                                    <img src = { img } alt = 'product' />
                                </div>
                                { /* Product Text */}
                                <div className = 'col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                    <h2>Model: { title }</h2>
                                    <h4 className = 'text-muted text-title text-uppercase mt-3 mb-2'>
                                        <span>Made By: </span> 
                                            { company }
                                    </h4>
                                    <h4 className = 'text-blue'>
                                        <strong>
                                            Price: <span>$</span>{ price }                                           
                                        </strong>
                                    </h4>
                                    <p className = 'text-capitalize font-weight-bold mt-3 mb-0'>
                                        some info about product:
                                    </p>
                                    <p className = 'text-muted lead' >{ info }</p>   
                                    { /* Buttons */}                                
                                    <Link to = '/'>
                                        <ButtonContainer>
                                            back to products
                                        </ButtonContainer> 
                                    </Link>
                                    <ButtonContainer
                                    cart
                                    disabled = { inCart ? true : false}
                                    onClick = {() => { 
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        { inCart ? 'In Cart' : 'Add To Cart' }
                                    </ButtonContainer>

                                </div>
                                                                   
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}