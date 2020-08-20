import React from 'react';
import {connect} from 'react-redux';

import WithRestoService from '../hoc';
import {deleteFromCard, successMessage, clearItems} from '../../actions';
import Success from '../success';

import './cart-table.scss';

const CartTable = ({items, succsess, deleteFromCard, RestoService, successMessage, clearItems}) => {
    
    const sentOrder = () => {
        if (items.length > 0) {
            RestoService.postOrder(items)
                .then(res => {
                    successMessage();
                    setTimeout(clearItems, 3000);
                });
        }
    }

    const order = (
        <>
            <div className="cart__title">Your order:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {id, title, price, url, pc} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-pc">{pc}pc</div>
                                <div className="cart__item-price">{price * pc}$</div>
                                <div onClick={() => deleteFromCard(id)} className="cart__close">&times;</div>
                            </div> 
                        )
                    })
                }
            </div>
            <div className="cart__btn">
                <button onClick={() => sentOrder()} className="menu__btn">Send</button>
            </div>
        </>
    );

    const content = succsess ? <Success /> : order ;

    return content;
};

const mapStateToProps = ({items, succsess}) => ({items, succsess});

const mapDispatchToProps = {deleteFromCard, successMessage, clearItems};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));