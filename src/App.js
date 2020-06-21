import React from 'react';

import '@vkontakte/vkui/dist/vkui.css';
import './styles/app.css'
import StartPageView from './views/startPageView'
import CreateProfileView from './views/createProfileView'
import ProfileView from './views/profileView'
import EventsListView from "./views/eventsListView";
import TinderView from "./views/tinderView"
import ArticleView from "./views/articlesView"
import EventView from "./views/eventView";
import EditProfile from "./views/editProfileView"
import RaitingView from "./views/raitingView"
import HistoryOfEvents from "./views/HistoryOfEvents";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit", {});

function App () {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/history">
                        <HistoryOfEvents/>
                    </Route>
                    <Route path="/raiting">
                        <RaitingView/>
                    </Route>
                    <Route path="/createEvent">
                        <EventView/>
                    </Route>
                    <Route path="/editProfile">
                        <EditProfile />
                    </Route>
                    <Route path="/profile">
                        <ProfileView />
                    </Route>
                    <Route path="/articles">
                        <ArticleView />
                    </Route>
                    <Route path="/find">
                        <TinderView />
                    </Route>
                    <Route path="/create-user">
                        <CreateProfileView />
                    </Route>
                    <Route path="/events">
                        <EventsListView />
                    </Route>
                    <Route path="/">
                        <StartPageView />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
