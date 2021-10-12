import {useState} from 'react';
import {GoogleMap,LoadScript} from '@react-google-maps/api';
import '../style/style-문의사항.scss';

function 문의사항(){
    let checkbox = document.getElementsByClassName('checkmark');
    const [checked,setChecked] = useState(false);
    const handleclick = () => setChecked(!checked);
    let center = {
        lat: 37.580569, lng: 127.028574 
    }
    return(
        <div>
            <div>
            <div>
            <div className="container-fluid bg-announce d-flex align-items-center announce-height">
        <div className="container col-xxl-4 col-xl-5 col-lg-6 col-md-8 d-flex justify-content-center align-items-center announce-search">
                <p className="title mb-5 mt-5">
                    문의사항
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
            <div className="row">
                <div className="col-lg-6">
                    <p className="sub-subtitle">Contact us</p>
                    <div className="d-flex mt-1">
                    <label className="checkbox-container mx-3">질문사항
                    <input type="checkbox" onClick={handleclick} id="질문사항"/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox-container mx-3">건의사항
                    <input type="checkbox" onClick={handleclick} id="건의사항"/>
                    <span className="checkmark"></span>
                  </label>
                    </div>
                    <form className="문의사항-form" action="">
                        <p className="font-weight-bold">Title</p>
                        <input type="text" id="title" className="form-control form-rounded" placeholder="Write the Title" />
                        <p className="font-weight-bold mt-3">MESSAGE</p>
                        <textarea name="inquiry" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                        <p className="mt-3 font-weight-bold">NAME</p>
                        <div className="row">
                            <div className="col-8">
                                <input type="email" placeholder="Your Email" className="form-control form-rounded" />
                            </div>
                            <div className="col-4">
                                <button className="btn-rounded text-white text-center send-button">
                                    <div className="p-relative" style={{top: '-2px'}}>Send</div>
                                    </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6">
                    <p className="sub-subtitle">Address</p>
                    <p className="address-des">상담 전화 및 메일 주소는 다음과 같습니다.<br/>문의사항이 있으시다면 연락주세요.</p>
                    <div style={{fontSize: '18px',color: '#060b11',fontWeight:'500'}}>
                      <i className="fas fa-phone-alt me-3"></i>
                      010-2718-2844
                    </div>
                    <div className="mt-3" style={{fontSize: '18px',color: '#060b11',fontWeight:'500'}}>
                      <i className="fas fa-envelope me-3"></i>
                      karlxyz99@korea.ac.kr
                    </div>
                    <div className="mt-3" style={{fontSize: '18px',color: '#060b11',fontWeight:'500'}}>
                      <div className="d-flex">
                        <i className="fas fa-home me-3 mt-1"></i>
                        <div>
                          1F, 63-6, Donggyo-ro, Mapo-gu, Seoul
                        </div>
                      </div>
              
                    </div>
                    <p className="onSocial">We are on Socials</p>
                    <div className="icons">
                    <i className="fab fa-facebook-square me-3"></i>
                        Facebook
                    </div>
                    <div className="icons mt-3">
                        <i className="fab fa-twitter me-3"></i>
                        Twitter
                    </div>
                    <div className="icons mt-3">
                        <i className="fab fa-instagram me-3"></i>
                        instagram
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <LoadScript googleMapsApiKey="AIzaSyC33JiJfsCheBCOLJbPiMKqf19OxnkKyyE">
                <GoogleMap
                    mapContainerStyle={{height: '500px',width: '100%'}}
                    center={center}
                    zoom={17}
                ></GoogleMap>
            </LoadScript>
        </div>
        </div>
        </div>
        </div>
    );
}

export default 문의사항;