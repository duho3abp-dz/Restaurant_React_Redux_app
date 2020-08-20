import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import WithRestoService from '../../hoc';
import {menuLoaded, menuRequested, menuError, addedToCard} from '../../../actions';
import Spinner from '../../spinner';
import Error from '../../error';

import pizza from './pizza.svg';
import salad from './salad.svg';
import meat from './meat.svg';

import './item-page.scss';

class ItemPage extends Component {
    componentDidMount() {
        if( this.props.menuItems.length === 0){
            const {RestoService, menuLoaded, menuRequested, menuError} = this.props;

            menuRequested();
            RestoService.getMenuItems()
                .then(res => menuLoaded(res))
                .catch(err => menuError());
            }
    }

    render() {
        const item = this.props.menuItems.find(el => +el.id === +this.props.match.params.id)
        const {id, title, price, url, category} = item;
        const {loading, error, addedToCard} = this.props;


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

        const itemBlock = (
            <div className="card__wrap">
                <li className="card__item">
                    <div className="card__title">{title}</div>
                    <img className="card__img" src={url} alt={title}></img>
                    <div className="card__category">Category: <span>{category}</span><img className="card__icon" src={src} alt={category}></img></div>
                    <div className="card__price">Price: <span>{price}$</span></div>
                    <Link to="/" className="card__btn">Back</Link>
                    <a onClick={() => addedToCard(id)} className="card__btn">Add to cart</a>
                </li>
            </div>
        )

        const content = error ? <Error/> : loading ? <Spinner/> : itemBlock
        
        return content;
    }
}

const mapStateToProps = ({menu, loading, error}) => ({menuItems: menu, loading, error});

const mapDispatchToProps = {menuLoaded, menuRequested, menuError, addedToCard};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));