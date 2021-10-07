import {Nav,Tab,Tabs,Container} from 'react-bootstrap'
import {useState,useEffect} from 'react';
import HomeCompany from './Home-company';
import HomeService from './Home-service';
function Home(){
    let [active, setActive] = useState(1);
    let btn = document.getElementsByClassName('btn-content-change');
    let content = document.getElementsByClassName('home-content');
    console.log(btn[0]);
    useEffect(()=>{
      document.title="ENTER-서비스 소개"
    })
    useEffect(()=>{
      for(let i=0;i<2;i++){
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
            <button className="btn-content-change active" onClick={()=>setActive(1)}>서비스 소개</button>
            <button className="btn-content-change" onClick={()=>setActive(2)}>회사 소개</button>
          </div>
        </div>
        <div className="home-content">
          <HomeCompany></HomeCompany>
        </div>
        <div className="home-content">
          <HomeService></HomeService>
        </div>

        
</>
    );
}

export default Home;