import React from 'react';
import Event from "../components/eventItem";
import {CardGrid} from "@vkontakte/vkui";


export default function EventList() {
    return(
        <CardGrid className='events'>
            <Event></Event>
            <Event></Event>
            <Event></Event>
            <Event></Event>
        </CardGrid>
    )

}