import React from "react";
import Connect from "../DAO/Connect";

export default function Overlay(props) {
    let component;
    if (props.linkData === "connect") {
        component = <Connect />;
    } else {
        component = <></>;
    }

    return (
        <div className={props.toggleData ? "nav_overlay active" : "nav_overlay"}>
            <span className={"bars"}></span>
            <span className={"bars"}></span>
            <span className={"bars"}></span>
            <span className={"bars"}></span>
            <div className="nav_items">
                <div
                    className={
                        props.toggleData ? "nav_container active" : "nav_container"
                    }
                >
                    {component}
                </div>
            </div>
        </div>
    );
}