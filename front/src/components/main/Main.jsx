import { useEffect, useState } from "react";
import "./Main.css";
import CONSTS from "../CONSTS";

function Main(){
    const [login, setLogin] = useState("-");
    const [FIO, setFIO] = useState("-");

    useEffect(() => {
        try {
            fetch(CONSTS.URL + CONSTS.GETDATA + localStorage.getItem("token"), {
                method: "get"
            }).then(res => {
                return res.json();
            }).then(({data}) => {
                setLogin(data.login);
                setFIO(data.fullName);
            })
        } catch (error) {
            console.log(error);
        }
    }, [])
    return(
        <div className="main-container">
            <div className="main-userBlock">
                <div>
                    <h1 className="main-userBlock-login">{login}</h1>
                    <span className="main-userBlock-FIO">{FIO}</span>
                </div>
                <button className="main-userBlock-btn">Выйти</button>
            </div>
            <div className="main-content">

            </div>
        </div>
    )
}

export default Main;