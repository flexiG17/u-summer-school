import {UserInterface} from "../../interfaces/UserInterface";
import {UserConstEnum} from "../../enums/UserEnum";
import { v4 as uuidv4 } from 'uuid';

export const SaveUserUtil = (inputUser: UserInterface) => {
    let users: UserInterface[] = JSON.parse(localStorage.getItem(UserConstEnum.USERS) || '[{}]')

    const indexCurrentUser = users
        ? users.findIndex(user => user.name === inputUser.name)
        : -1;
    if (indexCurrentUser > -1) {
        return users[indexCurrentUser]
    }
    else {
        let currentUser: UserInterface = {
            id: uuidv4(),
            ...inputUser
        }
        users.push(currentUser)

        localStorage.setItem(UserConstEnum.USERS, JSON.stringify(users))
        localStorage.setItem(UserConstEnum.CURRENT_USER, JSON.stringify(currentUser))

        return currentUser
    }
}