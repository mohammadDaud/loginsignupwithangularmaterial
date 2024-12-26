export class User {
    public id?: number;
    public name?: string;
    public username?: string;
    public email?: string;
    public password?: string;
    public role?: string;
    public usernameOrEmail?: string;
    public createdBy?: Date;

    constructor(id?: number, name?: string, username?: string, email?: string,
         password?: string, role?: string, usernameOrEmail?: string, createdBy?: Date) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.usernameOrEmail = usernameOrEmail;
        this.createdBy = createdBy;
    }
}
