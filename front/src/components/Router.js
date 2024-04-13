import "react-router-dom";
import SingIn from "./auth/SingIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/Main";

function Router(){
    return <BrowserRouter>
    <Routes>
        <Route element={<SingIn/>} path="/auth"/>
        <Route element={<Main/>} path="/"/>
    </Routes>
    </BrowserRouter>
}

export default Router;