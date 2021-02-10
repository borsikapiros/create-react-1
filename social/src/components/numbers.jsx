import React, { useState } from "react";
import initData from './sample-data.js';

export function Total() {
    const [data, setData] = useState(initData);
    let totalFb = data.platforms[0].facebook.followers;
    let totalTw = data.platforms[1].twitter.followers;
    let totalIn = data.platforms[2].instagram.followers;
    let totalYt = data.platforms[3].youtube.followers;

    let totalFollowers = totalFb + totalTw + totalIn + totalYt;

    return (
        <div className="totalFollow">
            Total Followers: {totalFollowers}
        </div>
    )
}