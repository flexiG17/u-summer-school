import {RoomEnum} from "../../enums/RoomEnum";
import {RoomInterface} from "../../interfaces/RoomInterface";
import { v4 as uuidv4 } from 'uuid';
import {UserInterface} from "../../interfaces/UserInterface";

export const CreateRoomUtil = (name: string): RoomInterface => {
    const room : RoomInterface = {
        id: uuidv4(),
        name,
        users: []
    }
    localStorage.setItem(RoomEnum.ROOMS, JSON.stringify(room))

    return room
}