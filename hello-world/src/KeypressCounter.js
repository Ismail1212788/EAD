import { useState } from "react";
import withCenter from "./CenterHOC";
import withCounter from "./CounterHOC";
import React from "react";

function KeypressCounter(props){
    return <>
       <input type="text" onKeyDown={props.increment} />
       <span>Key Pressed {props.count}x times!</span>
    </>
}

export default withCounter(KeypressCounter);