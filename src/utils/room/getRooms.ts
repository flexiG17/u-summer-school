import {RoomInterface} from "../../interfaces/RoomInterface";
import {RoomEnum} from "../../enums/RoomEnum";

export const GetRoomsUtil = (): RoomInterface[] => {
    const stringRooms = localStorage.getItem(RoomEnum.ROOMS) || '[{}]';
    return Array(JSON.parse(stringRooms))
}