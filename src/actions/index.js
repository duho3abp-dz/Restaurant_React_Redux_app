export const menuLoaded = (newMenu) => ({type: 'MENU_LOADED', payload: newMenu});
export const menuRequested = () => ({type: 'MENU_REQUESTED'});
export const menuError = () => ({type: 'MENU_ERROR'});
export const addedToCard = (id) => ({type: 'ADD_ITEM', payload: id});
export const deleteFromCard = (id) => ({type: 'DEL_ITEM', payload: id});