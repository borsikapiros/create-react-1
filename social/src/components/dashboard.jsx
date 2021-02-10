import React, { useState } from "react";
import initData from './sample-data.js';

export function Dashboard() {
    const [data, setData] = useState(initData);

    const list = [];

    for (let i = 0; i < data.platforms.length; i++) {

        const platform = data.platforms[i];

        
            // itt a value-t kiszedem és azt fogom végigiterálni
        // de key-t kell hozzáadni még!
        const item = Object.values(platform)[0];
        const smedia = Object.keys(platform)[0];

        const posColor = "rgb(119, 214, 36)";
        const negColor = 'red';
        const diffColor = (item.difference < 0) ? negColor : posColor;

        const social = (smedia === "facebook") ? "fa fa-facebook" : ((smedia === "twitter") ? "fa fa-twitter" : ((smedia === "instagram") ? "fa fa-instagram" : "fa fa-youtube"));
        const socialColor = (smedia === "facebook") ? "#3b5998" : ((smedia === "twitter") ? "#1DA1F2" : ((smedia === "instagram") ? "#833ab4" : "red"));
        


        list.push(
            <div className="dashboard-card">
                <div className="card--blue" style={{ backgroundColor: socialColor }}></div>
                <div className="db-name">
                    <a href="www.facebook.com" className={social}>&nbsp;</a>
                    {item.name}
                </div>
                <div className="db-followers-cont">
                    <div className="db-followers-number">
                    {item.followers}
                    </div>
                    <div className="db-followers-text">FOLLOWERS</div>
                    </div>
                <div className="db-today"  style={{ color: diffColor } }>
                    {item.difference} Today
                </div>
            </div>
        );
        
    }


    return (
        <div className="dashboard">
            {list}
        </div>
    );
}

