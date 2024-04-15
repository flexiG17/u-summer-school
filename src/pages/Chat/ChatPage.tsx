import React from 'react'
import styles from './Chat.module.scss'
import ChatComponent from "../../components/Chat/ChatComponent";

const ChatPage = () => {
    return (
        <section className={styles.grid}>
            <ChatComponent/>
        </section>
    )
}

export default ChatPage