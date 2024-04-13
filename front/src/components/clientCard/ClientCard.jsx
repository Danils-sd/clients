import { useState } from "react";
import "./ClientCard.css";
import CONSTS from "../CONSTS";
function ClientCard({uid, check, fName, sName, tName, date, INN, status}){
    const [statusCh, setStatusCh] = useState(false);
    const handlStatus = () => {
        setStatusCh(true)
    }

    const handlChangeStatus = (status) => {
        try {
            fetch(CONSTS.URL + CONSTS.CHANGESTATUS, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    uid: uid,
                    status: status
                })
            }).then(res => {
                return res.json();
            }).then(({data}) => {
                if(data !== 210){
                    alert("Yt gjkexbkjcm gjvtyznm cnfnec")
                }
                window.location.reload();
            })
        } catch (error) {
            
        }
    }

    return(
        <div className="clientCard-container">
            <h1 className="clientCard-container-check">Номер счета: {check}</h1>
            <span className="clientCard-container-INN">ИНН: {INN}</span>
            <div className="clientCard-container-content">
                {statusCh && (
                    <div className="clientCard-container-content-status">
                        <span onClick={e => handlChangeStatus("В работе")} className="clientCard-container-content-status-st">В работе</span>
                        <span onClick={e => handlChangeStatus("Отказ")} className="clientCard-container-content-status-st">Отказ</span>
                        <span onClick={e => handlChangeStatus("Сделка закрыта")} className="clientCard-container-content-status-st">Сделка закрыта</span>
                    </div>
                )}
                <div className="clientCard-container-content-left">
                    <span className="clientCard-container-content-left-t">{sName}</span>
                    <span className="clientCard-container-content-left-t">{fName}</span>
                    <span className="clientCard-container-content-left-t">{tName}</span>
                </div>
                <span onClick={handlStatus} className="clientCard-container-content-right">{status}</span>
            </div>
            <span className="clientCard-container-date">Дата Рождения: {date}</span>
        </div>
    )
}

export default ClientCard;