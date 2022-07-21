import React from "react";

export default function Footer(){
    const iconClass={
        maxWidth: '10%',
    };

    return (
    <div>
        <img style= {iconClass} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" href="https://github.com/Niccatania"  />
        <a href="https://github.com/Niccatania" >Github </a>

        <img style={iconClass} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" href="https://www.linkedin.com/in/niccatania/" />
          
        <a href="https://www.linkedin.com/in/niccatania/" >Linkedin </a>


        <img style={iconClass} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"  href="https://twitter.com/NicCatania"/>
          
        <a href="https://twitter.com/NicCatania"> Twitter</a>
    </div>
    )
};