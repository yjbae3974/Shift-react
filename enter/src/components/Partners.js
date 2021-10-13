import {useEffect} from 'react'

function Partners(){
    useEffect(()=>{
        document.title="ENTER-협력사"
      })
    return(
            <>
            <div className="container-fluid bg-enter" style={{minHeight: '100vh'}}>
        <div className="container title-position">
            <p className="company-history">PARTNERS</p>
            <div className="row adjust-mp">
                <p className="card-font text-lg-start text-center">파트너사</p>
                <div className="text-lg-start text-center" style={{color: '#bfbfbf'}}>
                    더 나은 서비스를 만들어나가기 위해 ENTER와 함께하는 파트너
                </div>
                <div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 mt-3 mt-lg-0">
                        <div className="box">
                            <div className="content text-center">
                                <img src="../img\협력사\image 79.png" alt=""/>
                                <div className="company-name" style={{marginTop: '24px'}}>원진회계법인</div>
                                <div className="company-des" style={{marginBottom: '34px'}}>공인중개사, 세무사 및 경영컨설팅 전문가로 구성된
                                경영컨설팅 그룹</div>
                                <a href="">more {'>'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3 mt-lg-0">
                        <div className="box">
                            <div className="content text-center" style={{marginTop:'30.02px'}}>
                                <div className="company-name">AA법무법인</div>
                            <div className="company-des" style={{marginBottom: '34px',height: '38px'}}>description</div>
                            <a href="">more {'>'}</a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3 mt-lg-0">
                        <div className="box">
                            <div className="content text-center">
                                <div className="recruiting">Recruiting</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="row adjust-mp">
                <p className="card-font text-lg-start text-center">포트폴리오사</p>
                <div className="text-lg-start text-center" style={{color: '#bfbfbf'}}>
                    Shift 서비스를 이용하며, ENTER와 함께 성장하는 회사
                </div>
                <div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 mt-3 mt-lg-0">
                        <div className="box">
                            <div className="content text-center">
                                <img src="../img\협력사\ClipboardImage_2021-07-16_214731.png" style={{width: '142px'}} alt=""/>
                                <div className="company-name" style={{marginTop: '24px'}}>슈르연구소</div>
                                <div className="company-des" style={{width: '250px',marginBottom:'34px'}}>1020 여성들을 주 타겟으로
                                    기초 공학에 대한 흥미와 정보를 제공하는 콘텐츠 유튜브</div>
                                <a href="">more {'>'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3 mt-lg-0">
                        <div className="box">
                            <div className="content text-center">
                                <img src="../img\협력사\ClipboardImage_2021-07-16_214756.png" style={{width: '31px'}} alt=""/>
                                <div className="company-name" style={{marginTop: '24px'}}>태그미</div>
                            <div className="company-des" style={{width: '300px',marginBottom:'34px'}}>
                                원태그 방식의 결제를 기반으로 유저의 효용성을 증대시키고 프로모션 혜택률을 높이는 페이먼트 서비스
                            </div>
                            <a href="">more {'>'}</a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3 mt-lg-0">
                        <div className="box">
                            <div className="content text-center">
                                <div className="recruiting">Recruiting</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
            </>
    );
}

export default Partners;