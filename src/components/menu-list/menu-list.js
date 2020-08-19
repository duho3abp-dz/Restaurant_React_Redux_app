import React, {Component} from 'react';
import {connect} from 'react-redux';

import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, addedToCard} from '../../actions';
import MenuListItem from '../menu-list-item';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

// * Render *
const View = ({content}) => {
        return (
            <ul className="menu__list">
                {content}
            </ul>
        )
};

// * Logic *
class MenuList extends Component {
    componentDidMount() {
        const {RestoService, menuLoaded, menuRequested, menuError} = this.props;

        menuRequested();
        RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(err => menuError());
    }

    render() {
        const {menuItems, loading, error, addedToCard} = this.props;

        const content = error ? <Error/> : loading ? <Spinner/> : menuItems.map(menuItem => {
            return <MenuListItem 
                key={menuItem.id} 
                menuItem={menuItem} 
                addToCard={() => addedToCard(menuItem.id)}
            />
        })

        return <View content={content} />
    }
}

const mapStateToProps = ({menu, loading, error}) => ({menuItems: menu, loading, error});

const mapDispatchToProps = {menuLoaded, menuRequested, menuError, addedToCard};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));