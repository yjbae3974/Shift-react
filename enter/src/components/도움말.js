import 질문 from '../data/자주하는질문';
import {Accordion} from 'react-bootstrap';
import {useState} from 'react';
import {Route, Link, useHistory} from 'react-router-dom';
import Announcement from '../data/공지사항';
function 도움말(props){
    let history = useHistory();
    let [공지사항,set공지사항] = useState(Announcement);
    let checkbox = document.getElementsByClassName('checkmark');
    const [checked,setChecked] = useState(false);
    const handleclick = () => setChecked(!checked);
    console.log(질문[0]);
    return(
        <div>
            <div>
            <div className="container-fluid bg-announce d-flex align-items-center announce-height">
        <div className="container col-xxl-4 col-xl-5 col-lg-6 col-md-8 d-flex justify-content-center align-items-center announce-search">
                <p className="title mb-5 mt-5">
                    도움말
                </p>
                <div className="card mb-2">
              <div className="card-body p-2">
                <div className="input-group input-group-lg">
                  <input type="text" id="searchWord" className="form-control form-control-lg rounde bg-transparent"
                    placeholder="검색어를 입력하세요" aria-label="Type Keywords" aria-describedby="basic-addon2" />
                  <span className="input-group-text border-0" id="basic-addon2">
                    <i className="fas fa-search fa-lg"></i></span>
                </div>
              </div>
            </div>
            
            <div>

            </div>
            </div>
        </div>
        <div className="container" style={{marginTop: 'clamp(40px,10vw,100px)', marginBottom: '100px', minHeight: '500px'}}>
        <Accordion defaultActiveKey="0">
          {
            질문.map((질문,index)=>{
              return(
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{질문.제목}</Accordion.Header>
                  <Accordion.Body>
                    {질문.내용}
                  </Accordion.Body>
                </Accordion.Item>
              )
            })
          }
        </Accordion>
          
        </div>
        </div>
        </div>
    )
}

export default 도움말;