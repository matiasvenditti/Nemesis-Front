export class User{

    name: string;
    surname: string;
    email: string;
    password: string;
    username: string;
    id: number;


    constructor(id, name, surname, username, email, password){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.email = email;
        this.password = password;


    }

}