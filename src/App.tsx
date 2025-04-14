import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";

export const App = () => {
    return (
        <div className="App-Wrapper">
            <Header/>
            <Navbar/>


            <div className={"App-Wrapper-content"}>
                <Dialogs/>
                {/*<Profile/>*/}
            </div>

        </div>
    );
}