import React from 'react';
import {connect} from 'react-redux';

import {deleteFromCard} from '../../actions';

import './cart-table.scss';

const CartTable = ({items, deleteFromCard}) => {
    
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {id, title, price, url} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deleteFromCard(id)} className="cart__close">&times;</div>
                            </div> 
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => ({items: items});

const mapDispatchToProps = {deleteFromCard};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);