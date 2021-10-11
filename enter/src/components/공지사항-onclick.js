import { useState } from "react";
import { useParams } from "react-router";
import Announcement from '../data/공지사항';

const AnnouncementClick = () =>{

    const param = useParams();
    let [data, setData] = useState(Announcement);
    let [id,setId] = useState(param.id);
    console.log(param);
    let content = data.Announcement.find((e)=>{return e.id == id});
    
    return(
        <>
            <div className="container-fluid bg-click d-flex align-items-center">
                <div className="container">
                    <span>{content.분류}</span>
                    <p className="card-font mt-4 mb-4">여기 제목</p>
                    <p>여기 날짜랑 시간</p>
                </div>
            </div>
            <div className="container onclick-content"></div>
            <div className="m-auto">
                <div className="btn-base">목록</div>
            </div>
        </>
    )
}

export default AnnouncementClick;