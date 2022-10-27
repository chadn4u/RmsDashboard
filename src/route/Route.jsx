import { BrowserRouter,Routes,Navigate,Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login"; 
import List from "../pages/list/List";
import Single from "../pages/single/Single";
import New from "../pages/new/New";
import { productInputs, userInputs } from "../formSource";
import Dashboard from "../pages/dashboard/Dashboard";
import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";

const RmsRoute = () =>{
    const { user } = useContext(AuthContext);
    return <BrowserRouter>
        <Routes>
            <Route path = '/'>
                <Route index element={user?<Home/>:<Navigate to="login"/>}/>
                <Route path="dashboard" element = {user?<Dashboard/>:<Navigate to="/" replace/>}>
                    <Route path="users">
                        <Route index element={<List/>}/>
                        <Route path=":userId" element={<Single/>}/>
                        <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
                    </Route>
                    <Route path="products">
                        <Route index element={<List />} />
                        <Route path=":productId" element={<Single />} />
                        <Route
                            path="new"
                            element={<New inputs={productInputs} title="Add New Product" />}
                        />
                    </Route>
                </Route>
                <Route path="login" element = {<Login/>}/>
                
            </Route>
        </Routes>
    </BrowserRouter>
}

export default RmsRoute;