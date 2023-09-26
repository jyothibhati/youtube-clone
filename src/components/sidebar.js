import { useState } from "react";

const AppSidebar =()=> {

    const [activeItem, setActiveItem] = useState("home");

    const setItemActive = (param)=>{
        setActiveItem(param);

    };
    return(
        <div className="app-sidebar">
            <div className="app-sidebar-body">
                <div className={activeItem === "home"? "active" : "app-sidebar-item"}
                 onClick={ ()=> setItemActive("home")}>Home</div>
                <div className={activeItem === "sub"? "active" : "app-sidebar-item"}
                 onClick={ ()=> setItemActive("sub")}>Subscription</div>
                <div className={activeItem === "short"? "active" : "app-sidebar-item"} onClick={ ()=> setItemActive("short")}>Shorts</div>
                <div className={activeItem === "trend"? "active" : "app-sidebar-item"} onClick={ ()=> setItemActive("trend")}>Trending</div>
                <div className={activeItem === "sport"? "active" : "app-sidebar-item"} onClick={ ()=> setItemActive("sport")}>Sports</div>
                <div className="app-sidebar-item" onClick={ ()=> setItemActive()}>Music</div>
                <div className="app-sidebar-item" onClick={ ()=> setItemActive()}>Films</div>
                <div className="app-sidebar-item" onClick={ ()=> setItemActive()}>Gaming</div>
                <div className="app-sidebar-item" onClick={ ()=> setItemActive()}>Kids</div>
                <div className="app-sidebar-item" onClick={ ()=> setItemActive()}>Youtube premium</div>
                <div className="app-sidebar-item" onClick={ ()=> setItemActive()}>Learning</div>
                <div className="app-sidebar-item" onClick={ ()=> setItemActive()}>Kids</div>
                <div className="app-sidebar-item" onClick={ ()=> setItemActive()}>Youtube premium</div>
                <div className="app-sidebar-item" onClick={ ()=> setItemActive()}>Learning</div>
                

            </div>
        </div>
    );
}
 
export default AppSidebar;