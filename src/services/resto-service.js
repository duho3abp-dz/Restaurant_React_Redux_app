export default class restoService {
    state = {
        url: 'http://localhost:3000/menu'
    }
    
    getMenuItems = async () => {
        const data = await fetch(this.state.url);
        if (!data.ok) {throw new Error(`Server Error`);}

        return await data.json();
    }
}