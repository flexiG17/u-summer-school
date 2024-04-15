import {GetRoomsUtil} from "./getRooms";

export const GetRoomByNameUtil = (inputRoom: string) => {
    const rooms = GetRoomsUtil()

    return rooms.filter((room) => room.name === inputRoom)[0]
}