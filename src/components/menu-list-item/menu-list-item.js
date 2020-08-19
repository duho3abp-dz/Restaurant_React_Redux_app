import React from 'react';
import {Link} from 'react-router-dom';
import './menu-list-item.scss';

import pizza from './pizza.svg';
import salad from './salad.svg';
import meat from './meat.svg';

const MenuListItem = ({menuItem}) => {
    const {id, title, price, url, category} = menuItem;

    let src;
    if (category === 'pizza') {
        src = pizza;
    }
    if (category === 'salads') {
        src = salad;
    }
    if (category === 'meat') {
        src = meat;
    }

    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category}</span><img className="menu__icon" src={src} alt={category}></img></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <Link to={`/menu/${id}`} className="menu__btn">Add to cart</Link>
        </li>
    )
}

export default MenuListItem;