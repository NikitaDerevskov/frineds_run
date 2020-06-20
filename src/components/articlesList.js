import React from 'react';
import {CardGrid} from "@vkontakte/vkui";
import Article from "./articleItem";

export default function ArticleList()
{
    return (
        <CardGrid>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
        </CardGrid>
    )
}