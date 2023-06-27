import React, { useEffect } from "react";
import { logUserInfo } from "./functions";
import { useNavigate } from "react-router";
function Totinh() {
    const navigate = useNavigate();

    const handleTT = () => {
        navigate('/thutinh')
    }
    useEffect(() => {
        logUserInfo("totinh")
    }, [])
    return <div className="fixed">
        <div className="totinh-container" style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
            <center>
                <img src="https://timoday.edu.vn/wp-content/uploads/2020/06/love1.gif" width="300" height="25" />
            </center>
            <h1 align="center">
                <span
                    style={{
                        background: "url(&quot;https://timoday.edu.vn/d9f50c755f7e4d8626a518843017a8bc_44837304.partner.gif&quot;) repeat scroll 0% 0% transparent",
                        color: "#fff",
                        textShadow: "0pt 0pt 0.3em LightYellow, 0pt 2pt 0.3em LightYellow"
                    }}><b>
                        MINH À, ANH YÊU EM NHIỀU LẮM</b></span>
            </h1>
            <center>
                <img src="https://timoday.edu.vn/wp-content/uploads/2020/06/love2.gif" width="300" height="25" />
            </center>
            <center>
                <p style={{
                    display: "flex",
                    justifyContent: "center"
                }}><img onClick={handleTT} src="https://timoday.edu.vn/wp-content/uploads/2020/06/love3.gif" /></p>
                <img src="https://timoday.edu.vn/wp-content/uploads/2020/06/love4.gif" alt="" width="220" border="0" />
            </center>
            <center>
                <img src="https://timoday.edu.vn/wp-content/uploads/2020/06/love4.gif" width="700" height="8" /><br />
                <font style={{ fontSize: "11pt" }}>
                    <font color="#FF0000" face="Comic Sans MS"></font>
                    <font color="white" face="Comic Sans MS"></font>
                    <marquee behavior="scroll" direction="left" scrollamount="2" scrolldelay="20" width="50%">
                        <font face="Tahoma" size="4" color="#ffffff">Làm người yêu anh nhé!</font>
                    </marquee><br />
                    <img src="https://timoday.edu.vn/wp-content/uploads/2020/06/love5.gif" width="700" height="8" />
                </font>
            </center>
        </div>
    </div>
}
export default Totinh;