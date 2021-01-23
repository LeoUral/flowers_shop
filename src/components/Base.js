
class Base {

    dataBase = [];

    async getDataBase() {
        this.response = await fetch('../baseServer.json');

        console.log(this.response.ok + ' <= STATUS OK');

        if (this.response.ok) {
            this.dataBase = await this.response.json();

            console.log(this.dataBase); // база букетов
            console.log(this.response.status + ' <= STATUS SERVER');

            return this.dataBase;

        } else {
            console.log('ERROR => ' + this.response.status);
        }
    }
}
export default new Base();