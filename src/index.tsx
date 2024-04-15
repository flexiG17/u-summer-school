import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import ChatPage from "./pages/Chat/ChatPage";
import {UserConstEnum} from "./enums/UserEnum";
import {MessageEnum} from "./enums/MessageEnum";
import {RoomEnum} from "./enums/RoomEnum";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
    },
    {
        path: '/room/:id',
        element: <ChatPage/>
    },
])

/*localStorage.setItem(UserConstEnum.USERS, '')
localStorage.setItem(UserConstEnum.CURRENT_USER, '')
localStorage.setItem(MessageEnum.MESSAGES, '')
localStorage.setItem(RoomEnum.ROOMS, '')*/

console.log(JSON.parse(localStorage.getItem(UserConstEnum.USERS) || '{}'), 'users');
console.log(JSON.parse(localStorage.getItem(UserConstEnum.CURRENT_USER) || '{}'), 'current');
console.log(JSON.parse(localStorage.getItem(MessageEnum.MESSAGES) || '{}'), 'message');
console.log(JSON.parse(localStorage.getItem(RoomEnum.ROOMS) || '{}'), 'rooms');

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
