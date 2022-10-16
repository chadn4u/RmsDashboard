import React from "react";
import SideBar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./list.scss";
import Datatable from "../../components/dataTable/Datatable";

const List = () => {
    return <div className="list">
            <SideBar/>
            <div className="listContainer">
                <Navbar/>
                <Datatable/>
            </div>
        </div>
}

export default List