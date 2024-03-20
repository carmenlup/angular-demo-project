export class UserDetail {
    public userId: string;
    public profileImg: string;
    public name: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public created: string;
    public effective: string;
    public inactive: string;
    public lastLogin: string;
    public isActive: boolean;

    constructor(userId: string, profileImg: string, name: string, firstName: string, lastName: string, email: string, created: string, effective: string, inactive: string, lastLogin: string, isActive: boolean) {
        this.userId = userId;
        this.profileImg = profileImg;
        this.name = name;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.created = created;
        this.effective = effective;
        this.inactive = inactive;
        this.lastLogin = lastLogin;
        this.isActive = isActive;
    }
}