export const menuLoaded = (newMenu) => ({type: 'MENU_LOADED', payload: newMenu});
export const menuRequested = () => ({type: 'MENU_REQUESTED'});
export const menuError = () => ({type: 'MENU_ERROR'});