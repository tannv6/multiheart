import { useEffect, useRef } from "react";

function Thutinh() {
    const elementRef = useRef<HTMLDivElement>(null);

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
        };
        handleScroll();
        const thu = document.getElementById("thu");
        thu?.addEventListener('scroll', handleScroll);
        return () => {
            thu?.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (<div className="thu" id="thu" ref={elementRef}>
        <div className="text animate">
            Minh à, anh yêu em, anh có thể nói lời ấy với em cả nghìn lần.
            Nhưng hôm nay cho phép anh không dừng lại ở đó.
        </div>
        <div className="text animate">Từ ngày đầu tiên gặp em, anh đã yêu em rồi, yêu vẻ đẹp thuần khiết ,
            yêu nét ngây thơ của một cô gái mới lớn, yêu đôi mắt trong veo như trăng rằm,
            yêu khuôn mặt xinh đẹp ngỡ như thiên thần.
        </div>
        <div className="text animate">Thời gian cứ thế trôi qua, tình yêu trong anh cũng dần lớn lên,
            6 năm kể từ khi gặp em, chưa một ngày nào anh không nhớ về em, nhưng ở thời điểm trước
            đây anh chỉ dám dừng lại ở đó, vì một thằng nhà nghèo, tương lai thì mịt mờ, làm sao
            dám yêu em chứ.
        </div>
        <div className="text animate">Nhưng anh là một thằng con trai mà, cũng muốn có một người yêu
            để đồng hành, để yêu, để quan tâm chăm sóc, để âu yếm vuốt ve nuông chiều. Những khi ấy
            người đầu tiên và duy nhất xuất hiện trong tâm trí của anh luôn là <span>EM</span>. Nhiều
            đêm anh đã khóc vì nhớ em, vì thấy sao lại có nhiều người có người yêu hạnh phúc thế.
            Còn mình thì vẫn lẻ bóng cô đơn.
        </div>
        <div className="text animate">
            Đó cũng là động lực để anh theo đuổi sự nghiệp thật nhanh để mong một ngày sớm có điều kiện
            về lại gần em.
            Trong những ngày tháng đó, anh đã rất nhiều đêm trằn trọc không ngủ được,
            vì lo cho tương lai của mình, và lo sợ rằng em sẽ gặp được người yêu em,
            lo được cho em, sợ rằng sẽ mãi mãi mất em. <br />
            Đến ngày hôm nay, khi công việc đã có phần ổn định, anh đã quyết tâm bỏ lại Hà Nội dọn về đây,
            để được gặp em thường xuyên, và có cơ hội thể hiện tình cảm của anh dành cho em.
        </div>
        <div className="text animate">Qua những lần gặp em anh càng thấy yêu và thương em hơn, dù cho đôi
            lúc em tỏ ra lạnh lùng hay vô tình thì tình yêu của anh dành cho em vẫn không hề thay đổi.
        </div>
        <div className="text animate">Em có thể không phải là một cô gái xinh đẹp nhất trong mắt người khác,
            nhưng đối với anh em luôn là người con gái xinh đẹp nhất trên đời.
            Em có thể là một đứa ương bướng, lạnh lùng, nhưng anh tin rằng tình yêu của anh sẽ
            vượt lên trên hết tất cả. Anh muốn em hiểu rằng không ai trên đời này có thể thay thế
            được vị trí của em trong trái tim anh.<br />
        </div>
        <div className="text animate">
            Cuối cùng, anh muốn em biết rằng, Anh có thể không phải là một người
            hoàn hảo, nhưng anh sẽ cố gắng trở nên hoàn thiện trong mắt em,
            có thể anh không quan tâm em được nhiều như em muốn, nhưng anh sẽ luôn bên em
            mỗi khi em cần. Anh không đủ hài hước để làm em cười mỗi ngày,
            nhưng anh sẽ cố không làm em buồn mỗi khi bên anh.
        </div>
        <div className="text animate">
            Anh sẽ cho em thấy rằng anh yêu em còn nhiều hơn những lời anh nói. Và không
            thứ gì trên đời này có thể ngăn cản được tình yêu của anh dành cho em.
        </div>
        <div className="text animate">Anh có thể không dành thời gian bên em nhiều được.
            Anh cũng không đủ lãng mạn để làm thơ tặng em, anh không đủ tài
            giỏi để có thể vẽ tranh tặng em, không giàu có để mua cả vườn hồng tặng em...
            Nhưng anh đủ hào phóng để tặng em cả trái tim anh,
            đủ dũng cảm để bảo vệ em suốt cả cuộc đời, đủ chung thủy để mãi mãi chỉ yêu mình em đến hết cuộc đời...
            Hãy nhận lấy trái tim của anh nha cô gái.
        </div>
        <div className="text animate">
            Hãy để anh chăm sóc em đến hết cuộc đời và hãy để <span>❣anh yêu em❣</span> em nhé!
        </div>
        <div className="text animate">Anh mong rằng sau này người anh cưới,
            người anh để bút trên tờ kết hôn chính là em... <br />
            Người cùng anh gánh chịu tất cả buồn vui, sướng khổ, áp lực trong cuộc sống vẫn là em... <br />
            Và cuối cùng người cùng anh đi hết cuộc đời này cũng vẫn sẽ luôn là em..!</div>
        {/* <div className="text animate">
            Minh à, đồng ý làm người yêu anh nha.
        </div> */}
    </div>)
}

export default Thutinh;