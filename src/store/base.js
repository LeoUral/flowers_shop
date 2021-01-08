//получаем данные по букетам из JSON в дальнейшем с сервера

class Base {

    async _getBase() {

        let response = await fetch('./baseServer.json');
        let base = await response.json();

        return base;
    }
}

export default new Base();
