import {useState} from 'react';
import {Route, Link, useHistory} from 'react-router-dom';
import Announcement from '../data/공지사항';
function 공지사항(props){
    let history = useHistory();
    let [공지사항,set공지사항] = useState(Announcement);
    let checkbox = document.getElementsByClassName('checkmark');
    const [checked,setChecked] = useState(false);
    const handleclick = () => setChecked(!checked);
    return(
        <div>
            <div>
            <div className="container-fluid bg-announce d-flex align-items-center announce-height">
        <div className="container col-xxl-4 col-xl-5 col-lg-6 col-md-8 d-flex justify-content-center align-items-center announce-search">
                <p className="title mb-5 mt-5">
                    공지사항
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
            <div className="d-flex justify-content-between text-white mt-1 checkbox-wrapper pb-sm-0 pb-3">
                <label className="checkbox-container mx-3">[공지]
                    <input type="checkbox" onClick={handleclick} id="announce"/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox-container mx-3">[업데이트]
                    <input type="checkbox" onClick={handleclick} id="update"/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox-container mx-3">[이벤트]
                    <input type="checkbox" onClick={handleclick} id="event"/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox-container mx-3">[개발현황]
                    <input type="checkbox" onClick={handleclick} id="develop"/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox-container mx-3">[버그수정]
                    <input type="checkbox" onClick={handleclick} id="debug"/>
                    <span className="checkmark"></span>
                  </label>
            </div>
            <div>

            </div>
            </div>
        </div>
        <div className="container d-flex justify-content-center" style={{marginTop: '100px',marginBottom: '100px'}}>
          <div className="col-xl-12 mobile-none" style={{width: '100%', maxWidth:'1280px'}}>
            <div className="table-responsive text-nowrap" id="content-placeholder">
              <table className="table table-hover">
                <thead className="bg-gray">
                  <tr>
                    <th>분류</th>
                    <th>제목</th>
                    <th>날짜</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    공지사항.Announcement.map((공지,index)=>{
                      return (
                        <tr>
                          <th>{공지.분류}</th>
                          <td onClick={()=>history.push("announce/"+index)} className="hr-link">{공지.제목}</td>
                          <td>{공지.날짜}</td>
                        </tr>
                      )
                    })

                    
                  }
                </tbody>
              </table>
            </div>
          </div>
          <div className="mobile-display">
          {
                    공지사항.Announcement.map((공지,index)=>{
                      return (
                        <>
                        <div className="list-wrap">
                        <div className="list-title">{공지.분류}</div>
                        <div onClick={()=>history.push("announce/"+index)} className="list-content hr-link">{공지.제목}
                        </div>
                        </div>
                        </>
                      )
                    })

                    
                  }
            
          </div>
        </div>
        <div className="container mt-5 d-flex justify-content-center" id="number-placeholder"></div>
        </div>
        </div>
    )
}

export default 공지사항;