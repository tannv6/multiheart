import React, { useEffect } from "react";
import { logUserInfo } from "../utils/functions";
import { useNavigate } from "react-router";
import love1 from "../img/love1.gif";
import love2 from "../img/love2.gif";
import love3 from "../img/love3.gif";
import love4 from "../img/love4.gif";
import love5 from "../img/love5.gif";
function Totinh() {
    const navigate = useNavigate();

    const handleTT = () => {
        navigate('/letter')
    }
    useEffect(() => {
        logUserInfo("totinh")
    }, [])
    return <div className="fixed">
        <div className="totinh-container" style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
            <center>
                <img src={love1} width="300" height="25" />
            </center>
            <h1 align="center" style={{ color: "white" }}>
                MINH À, ANH YÊU EM NHIỀU LẮM
            </h1>
            <center>
                <img src={love2} width="300" height="25" />
            </center>
            <center>
                <p style={{
                    display: "flex",
                    justifyContent: "center"
                }}><img onClick={handleTT} src={love3} /></p>
                <img src={love4} alt="" width="220" border="0" />
            </center>
            <center>
                <img src={love4} width="700" height="8" /><br />
                <font style={{ fontSize: "11pt" }}>
                    <font color="#FF0000" face="Comic Sans MS"></font>
                    <font color="white" face="Comic Sans MS"></font>
                    <marquee behavior="scroll" direction="left" scrollamount="2" scrolldelay="20" width="50%">
                        <font face="Tahoma" size="4" color="#ffffff">Làm người yêu anh nhé!</font>
                    </marquee><br />
                    <img src={love5} width="700" height="8" />
                </font>
            </center>
        </div>
    </div>
}
export default Totinh;