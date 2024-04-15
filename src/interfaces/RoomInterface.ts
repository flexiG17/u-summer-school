import {UserInterface} from "./UserInterface";

export interface RoomInterface {
    id: string,
    name: string,
    users?: UserInterface[]
}