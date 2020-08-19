import React, {Component} from 'react';
import {connect} from 'react-redux';

import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError} from '../../actions';
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
        const {menuItems, loading, error} = this.props;
        const content = error ? <Error/> : loading ? <Spinner/> : menuItems.map(menuItem => {
            return <MenuListItem 
                key={menuItem.id} 
                menuItem={menuItem} 
            />
        })

        return <View content={content} />
    }
}

const mapStateToProps = (state) => ({
    menuItems: state.menu,
    loading: state.loading,
    error: state.error
});

const mapDispatchToProps = {menuLoaded, menuRequested, menuError};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));