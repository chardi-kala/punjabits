import React from "react";
import Header from "../components/nav";
import getVidsIFrames from "../data/getYTvids";

function Wonders() {
    const vids = getVidsIFrames();
    return (
        <div>
            <Header style={{zIndex:-1}} />
            <h1>Wonders</h1>
            {vids.map((vid)=>{
                return vid;
            })}
        </div>
    );
}

export default Wonders;