import React, {Component} from 'react';
import {connect} from 'react-redux';

import WithRestoService from '../hoc';
import {menuLoaded, menuRequested} from '../../actions';
import MenuListItem from '../menu-list-item';
import Spinner from '../spinner';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        const {RestoService, menuLoaded, menuRequested} = this.props;
        menuRequested();
        RestoService.getMenuItems()
            .then(res => menuLoaded(res));
    }

    componentDidCatch() {

    }

    render() {
        const {menuItems, loading} = this.props;

        const content = loading ? <Spinner/> : menuItems.map(menuItem => {
            return <MenuListItem key={menuItem.id} menuItem={menuItem} />
        })

        return (
            <ul className="menu__list">
                {content}
            </ul>
        )
    }
};

const mapStateToProps = (state) => ({
    menuItems: state.menu,
    loading: state.loading
});

const mapDispatchToProps = {menuLoaded, menuRequested};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));