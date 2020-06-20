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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit", {});

function App () {
    return (
        <Router>
            <div>
                <Switch>
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

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App;
