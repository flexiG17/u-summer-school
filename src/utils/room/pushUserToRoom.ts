import {UserInterface} from "../../interfaces/UserInterface";
import {GetRoomsUtil} from "./getRooms";
import {RoomEnum} from "../../enums/RoomEnum";

export const PushUserToRoom = (roomId: string, user: UserInterface) => {
    const rooms = GetRoomsUtil();
    rooms.map((room) => {
        if (room.id === roomId) {
            room.users?.push(user)
        }
    })

    localStorage.setItem(RoomEnum.ROOMS, JSON.stringify(rooms))
}