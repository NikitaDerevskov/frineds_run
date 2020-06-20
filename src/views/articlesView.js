// import React from 'react';
// import ArticlesList from '../components/articlesList.js';
// import ArticleItem from '../components/articleItem.js';
import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Bottompanel from "../components/bottomPanel";
import '../styles/app.css'
import ArticlesList from "../components/articlesList";


function ArticleView () {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>
                    Статьи
                </PanelHeader>
                <ArticlesList/>
                <Bottompanel/>
            </Panel>
        </View>
    );
}

export default ArticleView;

