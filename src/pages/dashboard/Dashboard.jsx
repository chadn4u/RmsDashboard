import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import "./dashboard.scss";

const Dashboard = () => {
    return <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type = "User"/>
                    <Widget type = "Order"/>
                    <Widget type = "Earning"/>
                    <Widget type = "Balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart aspect={2/1} title={"Total Spending (6 Month)"}/>
                </div>
                <div className="listContainer">
                    <div className="listTile">Latest Transaction</div>
                    <List/>
                </div>
            </div>
        </div>
}

export default Dashboard