import React, {useState} from 'react'
import styles from './MainComponent.module.scss'
import {SaveUserUtil} from "../../utils/user/saveUser";
import {useNavigate} from "react-router-dom";
import {ifRoomExist} from "../../utils/room/ifRoomExist";
import {GetRoomByNameUtil} from "../../utils/room/getRoomByNameUtil";
import {RoomInterface} from "../../interfaces/RoomInterface";
import {CreateRoomUtil} from "../../utils/room/createRoomUtil";
import {PushUserToRoom} from "../../utils/room/pushUserToRoom";
import {InitializeRoomMessagesUtil} from "../../utils/message/initializeRoomMessagesUtil";

const MainComponent = () => {
    const [name, setName] = useState<string>('')
    const [room, setRoom] = useState<string>('')

    const navigation = useNavigate()

    const handleEnterTheRoom = (e: React.FormEvent<HTMLFormElement>) => {
        let roomData: RoomInterface = {
            id: '',
            name: ''
        }
        e.preventDefault();
        if (ifRoomExist(room)){
            roomData = GetRoomByNameUtil(room)
        }
        else {
            roomData = CreateRoomUtil(room)
        }
        const user = SaveUserUtil({name})
        InitializeRoomMessagesUtil(roomData.id, user.id || '1')
        PushUserToRoom(roomData.id, user!)
        navigation(`/room/${roomData.id}`)
    }

    return (
        <form className={styles.grid} onSubmit={handleEnterTheRoom}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <div className={styles.select_input_block}>
                <input
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    type="text"/>
                <select onChange={(e) => setRoom(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
            <button className={styles.send_button}>
                <p>
                    Войти
                </p>
            </button>
        </form>
    )
}

export default MainComponent