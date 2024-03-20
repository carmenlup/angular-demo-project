import { Contact } from '../app/contact/models/contact.model'; // Import the ContactsDetails type from the appropriate file

export let contactsData: Contact[] = [{
        "id": 1,
        "name": "Lorri Driver",
        "userDetail": {
            "userId": "guid",
            "profileImg": "D:\\Company_Identity\\mock-images",
            "name": "Lorri Driver",
            "firstName": "Lorri",
            "lastName": "Driver",
            "email": "examle@gmail.com",
            "created": "23/11/2001",
            "effective": "23/11/2001",
            "inactive": "undefined",
            "lastLogin": "23/11/2001 15:12:55",
            "isActive": true
        }
    },
    {
        "id": 2,
        "name": "Carmen Lup",
        "userDetail": {
            "userId": "guid2",
            "profileImg": "link",
            "name": "Carmen Lup",
            "firstName": "Carmen",
            "lastName": "Lup",
            "email": "examle2@gmail.com",
            "created": "23/11/2001",
            "effective": "23/11/2001",
            "inactive": "undefined",
            "lastLogin": "23/11/2001 15:12:55",
            "isActive": true,

        }
    }];