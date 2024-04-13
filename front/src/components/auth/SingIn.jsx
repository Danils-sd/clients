import "./SingIn.css";
import CONSTS from "../CONSTS"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SingIn(){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const loginHandler = (e) => {
        setLogin(e.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.value);
    }

    const authHandle = () =>{
        try {
            fetch(CONSTS.URL + CONSTS.AUTH, {
                method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        login: login,
                        password: password
                    })
            }).then(res => {
                return res.json();
            }).then(({data}) => {
                if(data.res === 400){
                    alert("Неизвестная ошибка");
                }else if(data.res === 401){
                    alert("Пользователя с такием логином нет");
                }else if(data.res === 402){
                    alert("Неверный пароль");
                } else {
                    localStorage.setItem("token", data.res);
                    navigate("/");
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="singIn-container">
            <div className="singIn-card">
                <h1 className="singIn-card-label">Авторизация</h1>
                <input value={login} onChange={e => loginHandler(e.target)} className="singIn-card-inp" placeholder="Введите логин"/>
                <input value={password} onChange={e => passwordHandler(e.target)} className="singIn-card-inp" placeholder="Введите пароль"/>
                <button onClick={authHandle} className="singIn-card-btn">Продолжить</button>
            </div>
        </div>
    )
}

export default SingIn;