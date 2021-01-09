
class Base {

    dataBase = [];

    async getDataBase() {

        this.response = await fetch('../baseServer.json');
        this.dataBase = await this.response.json();
        console.log(this.dataBase);
        return this.dataBase;
    }
}
export default new Base();