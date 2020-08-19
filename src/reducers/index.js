const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            } ;
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            } ;
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            } ;
        case 'ADD_ITEM':
            const id = action.payload;
            const item = state.menu.find(el => +el.id === id);
            // let itemId = Math.floor(Math.random() * 1000000 + 1);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id
            }
            return {
                ...state,
                items: [...state.items, newItem]
            } ;
        case 'DEL_ITEM':
            const idx = action.payload;
            const items = state.items.filter(el => +el.id !== idx);
            return {
                ...state,
                items: [...items]
            } ;
        default:
            return state;
    }
}

export default reducer;