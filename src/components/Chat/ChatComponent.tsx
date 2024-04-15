import React, {useEffect, useState} from 'react'
import styles from './ChatComponent.module.scss'
import {useParams} from "react-router-dom";
import {MessagesInterface} from "../../interfaces/MessagesInterface";
import {GetCurrentUser} from "../../utils/user/getCurrentUser";
import {UserInterface} from "../../interfaces/UserInterface";
import {GetMessagesByRoomIdUtil} from "../../utils/message/getMessagesByRoomIdUtil";
import {SendMessageUtilInRoom} from "../../utils/message/sendMessageUtilInRoom";

const ChatComponent = () => {
    const roomId = useParams().id || '0'
    const currentUser: UserInterface = GetCurrentUser();
    const [message, setMessage] = useState<string>('')

    const handleSendMessage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        SendMessageUtilInRoom(roomId, currentUser, message!)
        setMessage('')
        //window.location.reload()
    }

    /*useEffect(() => {
        window.location.reload()
    }, []);*/

    return (
        <div className={styles.grid}>
            <div className={styles.text_body}>
                {GetMessagesByRoomIdUtil(roomId!).map((message) => {
                    let style = ''
                    if (message.user_id === GetCurrentUser().id)
                        style = styles.right_side
                    else
                        style = styles.left_side
                    return <div className={style}>
                        <p className={styles.message}>
                            {message.text}
                        </p>
                    </div>
                })}
            </div>
            <div className={styles.grid_bottom}>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text" className={styles.message_input}/>
                <button
                    onClick={handleSendMessage}
                    className={styles.send_button}>
                    <p>
                        Отправить
                    </p>
                </button>
            </div>
        </div>
    )
}

export default ChatComponent