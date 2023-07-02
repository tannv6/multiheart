import { useEffect, useRef, useState } from "react";
import Hearts from "./Hearts";
import { msgs } from "../utils/constants";
import { logUserInfo } from "utils/functions";
import love5 from "../img/2099122.png";

function Thutinh() {
    const elementRef = useRef<HTMLDivElement>(null);
    const [showHeart, setShowHeart] = useState(false);
    const [heartColor, setHeartColor] = useState("white");
    const refWrap = useRef<any>(null);
    const isSentLog = useRef(false);
    const [mess, setMess] = useState("");
    const handleSentMess = () => {
        logUserInfo(mess).then(() => {
            setMess("")
        });
    }
    useEffect(() => {
        const handleScroll = (elm?: any) => {
            const element: any = elementRef.current;
            element?.childNodes.forEach((e: any) => {
                const rect = e.getBoundingClientRect();
                const isVisible = rect.top < (window.innerHeight - 30) && rect.bottom >= 0;
                if (isVisible) {
                    e.classList.add('animate-visible');
                } else {
                    e.classList.remove('animate-visible');
                }
                if ((elm?.target?.scrollTop + elm?.target?.clientHeight) == elm?.target?.scrollHeight
                    && !e.classList.contains("animate-visible")) {
                    e.classList.add('animate-visible');
                }
            });
            if (((elm?.target?.scrollTop + elm?.target?.clientHeight) >= elm?.target?.scrollHeight - 10)) {
                setHeartColor("red");
                setShowHeart(true);
                element?.childNodes.forEach((e: any) => {
                    e.classList.add('show-heart');
                });
                if (!isSentLog.current) {
                    logUserInfo("xongthutinh");
                }
                isSentLog.current = true;
            } else if (elm?.target?.scrollTop === 0) {
                setHeartColor("white");
                setShowHeart(false);
                element?.childNodes.forEach((e: any) => {
                    e.classList.remove('show-heart')
                });
            }
        };
        handleScroll();
        const thu = document.getElementById("thu_wrap");
        thu?.addEventListener('scroll', handleScroll);
        logUserInfo("thutinh");
        return () => {
            thu?.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const translate = useRef(0);

    const handleClick = (elm?: any) => {
        !translate.current && setShowHeart((flag) => !flag)
    }
    const handleTouchStart = () => {
        translate.current = 0;
    }
    const handleTouchEnd = () => {
        const scrollTop = refWrap.current?.scrollTop;
        if (scrollTop === 0 && translate.current) {
            setShowHeart(true);
        }
    }
    const handleTouchMove = () => {
        translate.current = 1;
    }
    return (<div className="thu_wrap" id="thu_wrap" onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        ref={refWrap}
    >
        {showHeart && <Hearts heartColor={heartColor} key={heartColor} />}
        <div className="thu">
            <h3 className="title">Gửi tới em, người con gái anh dành cả thanh xuân để thương nhớ!</h3>
        </div>
        <div className="thu" id="thu" ref={elementRef}>
            {msgs.map((e, k) => {
                return <div className="text animate" key={k} dangerouslySetInnerHTML={{ __html: e.msg }}></div>
            })}
        </div>
        <div className="thu">
            <div className="mess" onClick={e => e.stopPropagation()}>
                <textarea placeholder="Gửi lời yêu thương" value={mess} onChange={e => setMess(e.target.value)} />
                <img src={love5} alt="" onClick={handleSentMess} />
            </div>
        </div>
    </div>
    )
}

export default Thutinh;