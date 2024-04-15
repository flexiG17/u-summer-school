import {UserInterface} from "../../interfaces/UserInterface";
import {UserConstEnum} from "../../enums/UserEnum";
import {RoomInterface} from "../../interfaces/RoomInterface";
import {RoomEnum} from "../../enums/RoomEnum";
import {GetRoomsUtil} from "./getRooms";

export const ifRoomExist = (inputRoom: string): boolean => {
    let rooms: RoomInterface[] = GetRoomsUtil()

    return rooms.some((room) => room.name === inputRoom)
}