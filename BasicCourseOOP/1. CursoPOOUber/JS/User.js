class User extends Account {
    constructor(name,document,email,password){
        super(name,document,email,password)
    }
    printDataUser(){
        console.log(`Nombre: ${this.name}`);
        console.log(`Document: ${this.document}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Password: ${this.password}`);
    }
}