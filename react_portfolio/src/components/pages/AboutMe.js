import React from "react";
import Profile from "../assets/profile.jpeg"

export default function AboutMe(){
    return (
        <div>
            <h1> About Me</h1>
            <img className= "imgClass" src={Profile} alt="Profile of Nic"/>
            <p>Hello! Im Nic Catania, a full stack developer with a passion for creating through coding</p>
        </div>
    );
}