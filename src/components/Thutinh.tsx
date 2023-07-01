import { useEffect, useRef, useState } from "react";
import Hearts from "./Hearts";
import { msgs } from "../utils/constants";

function Thutinh() {
    const elementRef = useRef<HTMLDivElement>(null);
    const [showHeart, setShowHeart] = useState(false);
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
                setShowHeart(true);
                element?.childNodes.forEach((e: any) => {
                    e.classList.add('show-heart')
                });
            } else if (elm?.target?.scrollTop === 0) {
                setShowHeart(false);
                element?.childNodes.forEach((e: any) => {
                    e.classList.remove('show-heart')
                });
            }
        };
        handleScroll();
        const thu = document.getElementById("thu_wrap");
        thu?.addEventListener('scroll', handleScroll);
        return () => {
            thu?.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (<div className="thu_wrap" id="thu_wrap">
        {showHeart && <Hearts />}
        <div className="thu">
            <h3 className="title">Gửi tới em, người con gái anh dành cả thanh xuân để thương nhớ!</h3>
        </div>
        <div className="thu" id="thu" ref={elementRef}>
            {msgs.map((e, k) => {
                return <div className="text animate" key={k} dangerouslySetInnerHTML={{ __html: e.msg }}></div>
            })}
        </div>
    </div>
    )
}

export default Thutinh;