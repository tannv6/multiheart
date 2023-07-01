import axios from "axios";
import { Api } from "./apisConfig";
export async function logUserInfo(type) {
    const ipInfo = await axios.get("https://jsonip.com/?callback=?");
    const ip = JSON.parse(JSON.parse(JSON.stringify(ipInfo.data.replace("?", "").replace(";", "").replace("(", "").replace(")", ""))))["ip"];
    await Api.post("/logs", {
        type: type,
        time: Date.now(),
        ip,
        deviceWidth: window.innerWidth,
        deviceHeight: window.innerHeight,
    })
}