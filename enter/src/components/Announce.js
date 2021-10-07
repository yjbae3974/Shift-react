import {Nav,Tab,Tabs,Container} from 'react-bootstrap'
import {useState,useEffect} from 'react';
import 공지사항 from './공지사항';
import 도움말 from './도움말';
import 문의사항 from './문의사항';
import '../style/test.css';
function Announce(){
    let [active, setActive] = useState(1);
    let btn = document.getElementsByClassName('btn-content-change');
    let content = document.getElementsByClassName('home-content');
    console.log(btn[0]);
    useEffect(()=>{
      document.title="ENTER-서비스 소개"
    })
    useEffect(()=>{
      for(let i=0;i<3;i++){
        if(i===active-1){
          btn[i].classList.add("active");
          content[i].classList.add("active")
      }
      else{
          btn[i].classList.remove("active");
          content[i].classList.remove("active");
      }
      }
    },[active])
    return(
        <>

        <div className="container-fluid sticky-nav">
          <div className="container d-flex justify-content-lg-end justify-content-center">
            <button className="btn-content-change active" onClick={()=>setActive(1)}>공지사항</button>
            <button className="btn-content-change" onClick={()=>setActive(2)}>도움말</button>
            <button className="btn-content-change active" onClick={()=>setActive(3)}>문의사항</button>
          </div>
        </div>
        <div className="home-content">
          <공지사항></공지사항>
        </div>
        <div className="home-content">
          <도움말></도움말>
        </div>
        <div className="home-content">
          <문의사항></문의사항>
        </div>

        
</>
    );
}

export default Announce;