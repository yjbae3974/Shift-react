import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {useHistory} from 'react-router-dom';
import Announcement from '../data/공지사항';

const AnnouncementClick = () =>{
    
    let history = useHistory();
    const param = useParams();
    let [data, setData] = useState(Announcement);
    let [id,setId] = useState(param.id);
    console.log(param);
    let content = data.Announcement.find((e)=>{return e.id == id});
    useEffect(()=>{
        document.title=('ENTER-' + content.제목);
      });
    return(
        <>
            <div className="container-fluid bg-click d-flex align-items-center">
                <div className="container">
                    <span>{content.분류}</span>
                    <p className="card-font onclick-제목 mt-4 mb-4">{content.제목}</p>
                    <p>{content.날짜}</p>
                </div>
            </div>
            <div className="container onclick-content">{content.내용}</div>
            <div className="d-flex justify-content-center" style={{marginTop: '50px', marginBottom:'clamp(50px,15vw,100px)'}}>
                <button className="m-auto btn-목록" onClick={()=>history.goBack()}>목록</button>
            </div>

        </>
    )
}

export default AnnouncementClick;