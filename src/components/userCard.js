import React from 'react'
import {Avatar, Card, Div} from "@vkontakte/vkui";
import logo from '../components/friendico.jpg'
export default function UserCard() {
    return (
        <Div>
            <Avatar size={378} src={logo}/>
            <p className="findFriendText">
                <strong >Штин Михаил - Екатеринбург</strong>
            </p>
            <p className="findFriendText">
                <br/>Люблю медленный бег
            </p>
        </Div>
    )

}