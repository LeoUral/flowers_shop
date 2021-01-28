import BascketStorage from '../store/bascket';

class Base {

    dataBase = [];

    async getDataBase() {
        this.response = await fetch('../baseServer.json');

        console.log(this.response.ok + ' <= STATUS OK');//test -> status.ok

        if (this.response.ok) {
            this.dataBase = await this.response.json();

            console.log(this.dataBase); // база букетов //test -> base
            console.log(this.response.status + ' <= STATUS SERVER');//test -> status

            BascketStorage.writeBase(this.dataBase);
            // return this.dataBase;

        } else {
            console.log('ERROR => ' + this.response.status);//test -> status.err
        }
    }
}
export default new Base();