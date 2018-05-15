import { Store } from "./store";

export class User{

    name: string;
    surname: string;
    email: string;
    password: string;
    username: string;
    stores: Store[];
    id: number;


    constructor(id, name, surname, username, email, password, stores){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.stores = stores;

    }

}