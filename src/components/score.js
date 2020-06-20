import React from 'react';
import {Card, Div} from "@vkontakte/vkui";


export default function Score() {
    return(
        <Div className = "image">
            <Card size="l">
                <div style={{ height: 400 }} />
            </Card>
            <p>
                <strong >Статистика:</strong>
            </p>
            <p className="resultText">
                <ul>
                    <li>Время бега</li>
                    <li>Калории примерно</li>
                    <li>Скорость бега</li>
                </ul>
            </p>
        </Div>
    )

}