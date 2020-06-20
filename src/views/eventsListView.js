// import React from 'react';
// import ArticlesList from '../components/articlesList.js';
// import ArticleItem from '../components/articleItem.js';
import React from 'react';
import {
    View,
    Panel,
    PanelHeader,
    Card,
    CardGrid,
    Button, PanelHeaderButton,PanelHeaderBack

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Bottompanel from "../bottompanel";
import '../styles/app.css'
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline'



function ArticleView () {
    return (
        <View activePanel="context">
            <Panel id="context">
                <PanelHeader
                >
                    События
                </PanelHeader>
                <Button size='xl' className ='buttonAddEvent'>Добавить событие</Button>
                <CardGrid className='events'>
                    <Card size="l">
                        <div style={{ height: 100 }} />
                    </Card>
                    <Card size="l">
                        <div style={{ height: 100 }} />
                    </Card>
                    <Card size="l">
                        <div style={{ height: 100 }} />
                    </Card>
                    <Card size="l">
                        <div style={{ height: 100 }} />
                    </Card>
                    <Card size="l">
                        <div style={{ height: 100 }} />
                    </Card>
                </CardGrid>

                <Bottompanel></Bottompanel>
            </Panel>
        </View>
    );
}

export default ArticleView;

