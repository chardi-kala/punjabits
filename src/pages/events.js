import React from 'react';
import Header from "../components/nav";
import IntMeetImg from "../styles/assets/35bg.png";
import VMeetImg from "../styles/assets/khandabg.png";
import "../styles/events.css";

function Events() {
    return (
        <div>
            <Header style={{zIndex:-1}} />
            <div className="w3-container new_para">
                <div className="w3-half w3-container container">
                <h1 className="eve1h w3-panel heading"><em>First International Punjabi Kids Meet</em></h1>
                <a href="/events/intmeet22">
                    <img src={IntMeetImg} alt="35 Akhri Bg" className="special" />
                </a>
                </div>
                <div className="w3-half w3-container container">
                <h1 className="eve1h w3-panel heading"><em>Vaisakhi Meet '22</em></h1>
                <a href="/events/vmeet22">
                    <img src={VMeetImg} alt="Vaisakhi Bg" className="special" />
                </a>
                </div>
            </div>
        </div>
    );
}

export default Events;