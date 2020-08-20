const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    pieces: [],
    total: 0
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
            
            const conformity = state.pieces.filter(el => el === id);

            if (conformity.length === 0) {
                const newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    pc: 1
                }
                return {
                    ...state,
                    items: [...state.items, newItem],
                    pieces: [...state.pieces, id],
                    total: state.total + item.price
                } ;
            } else {
                const idPc = state.pieces.filter(el => el === id).length + 1
                const newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    pc: idPc
                }
                const newItems = state.items.filter(el => +el.id !== id);
                return {
                    ...state,
                    items: [...newItems, newItem],
                    pieces: [...state.pieces, id],
                    total: state.total + item.price
                } ;
            }
            
            
        case 'DEL_ITEM':
            const idx = action.payload;
            const items = state.items.filter(el => +el.id !== idx);
            const corrPc = state.pieces.filter(el => el !== idx);
            
            const itemPr = state.menu.filter(el => +el.id === idx);
            const idPcPr = state.pieces.filter(el => el === idx).length;
            const summPrice = +itemPr[0].price * idPcPr;
            
            return {
                ...state,
                items: [...items],
                pieces: [...corrPc],
                total: state.total - summPrice
            } ;

        default:
            return state;
    }
}

export default reducer;