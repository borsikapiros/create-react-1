import React, { useState } from "react";
import initData from './sample-data.js';

export function Today() {
    const [data, setData] = useState(initData);

    const list = [];
    

    for (let i = 0; i < data.events.length; i++) {
        const posColor = "rgb(119, 214, 36)";
        const negColor = 'red';
        const diffColor = (data.events[i].modifier < 0) ? negColor : posColor;
        const smedia = data.events[i].platform;
        const social = (smedia === "facebook") ? "fa fa-facebook" : ((smedia === "twitter") ? "fa fa-twitter" : ((smedia === "instagram") ? "fa fa-instagram" : "fa fa-youtube"));
        list.push(
            <div className="today-card">
                <div className="today-type">
                    {data.events[i].type}
                </div>
                <div className="today-platform">
                <a href="www.facebook.com" className={social}>&nbsp;</a>
                </div>
                <div className="today-number">{data.events[i].amount}</div>
                <div className="today-modifier" style={{ color: diffColor } }>
                    {data.events[i].modifier}%
                </div>
            </div>
        );
    };
        
        return (
            <div className="today-cont">
                {list}
            </div>
        )
}
