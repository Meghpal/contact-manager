class User {
    constructor(name, email, password, type="user") {
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
        this.active = true;
        if(type === "user"){
            this.contactList = [new Contact("name", "phone", "email", ""), new Contact("name", "phone", "email", "")];
        }
    }
}