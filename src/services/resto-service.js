export default class restoService {
    state = {
        _apiBase: 'http://localhost:3000'
    }

    getResource = async (url) => {
        const data = await fetch(`${this.state._apiBase}${url}`);
        if (!data.ok) {throw new Error(`Server Error`);}

        return await data.json();
    }

    postResource = async (url, order) => {
        const data = await fetch(`${this.state._apiBase}${url}`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(order)
        });
        if (!data.ok) {throw new Error(`Server Error`);}

        return await data.json();
    }

    getMenuItems = () => {
        return this.getResource('/menu');
    }

    postOrder = (order) => {
        return this.postResource('/order', order);
    }
}