import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Messages} from "./components/navbar/messages/Messages";
import {News} from "./components/navbar/news/News";
import {Music} from "./components/navbar/music/Music";
import {Settings} from "./components/navbar/settings/Settings";

export const App = () => {
    return (
        <BrowserRouter>
            <div className="App-Wrapper">
                <Header/>
                <Navbar/>


                <div className={"App-Wrapper-content"}>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/messages" component={Messages}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>

            </div>
        </BrowserRouter>

    );
}