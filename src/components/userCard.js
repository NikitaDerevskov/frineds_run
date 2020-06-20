import React from 'react'
import {Card, Panel,Div} from "@vkontakte/vkui";

export default function UserCard() {
    return (
        <Div>
            <Card size="l">
                <div style={{ height: 400 }} />
            </Card>
            <p className="findFriendText">
                <strong >Имя и Фамилия - Город</strong>
            </p>
            <p className="findFriendText">
                <br/>Краткая информация о друге
            </p>
        </Div>
    )

}