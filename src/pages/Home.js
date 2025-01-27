import React from "react";
import StreamingServices from "../components/StreamingServices";
import JustRelease from "../components/JustRelease";
import PopularWeek from "../components/PopularWeek";
import MainCard from "../components/MainCard";

function Home(){
    return(
        <div>
            <MainCard/>
            <StreamingServices/>
            <JustRelease/>
            <PopularWeek/>
        </div>
    )
}

export default Home;