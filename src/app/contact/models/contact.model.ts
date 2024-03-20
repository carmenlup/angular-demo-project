import { UserDetail } from "./user-detail.model";

export class Contact {
    public id: number;
    public name: string;
    public userDetail: UserDetail;

    constructor(id: number, name: string, userDetail: UserDetail) {
        this.id = id;
        this.name = name;
        this.userDetail = userDetail;
    }
}