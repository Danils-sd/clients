import { useEffect, useState } from "react";
import "./Main.css";
import CONSTS from "../CONSTS";
import { useNavigate } from "react-router-dom";
import ClientCard from "../clientCard/ClientCard";

function Main(){
    const [login, setLogin] = useState("-");
    const [FIO, setFIO] = useState("-");
    const [auth, setAuth] = useState("Войти");
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handlButton = () => {
        if(localStorage.getItem("token") === null){
            navigate("/auth");
        } else {
            localStorage.removeItem("token");
            navigate("/auth");
        }
        console.log(localStorage.getItem("token"));
    }
    useEffect(() => {
        try {
            if(localStorage.getItem("token") !== null){
                setAuth("Выйти");
            }
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

        try {
            fetch(CONSTS.URL + CONSTS.GETUSERS, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    uid: localStorage.getItem("token")
                })
            }).then(res => {
                return res.json();
            }).then(({data}) => {
                setIsLoading(true);
                setData(data);
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
                <button onClick={handlButton} className="main-userBlock-btn">{auth}</button>
            </div>
            <div className="main-content">
                {isLoading && (
                    data.map((e) => {
                        return(
                            <ClientCard uid={e.uid} check={e.check} fName={e.fName} sName={e.sName} tName={e.tName} date={e.date} INN={e.INN} status={e.status}/>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default Main;