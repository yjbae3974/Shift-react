import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
function HomeCompany(){
	let bullets = document.getElementsByClassName("bullet");
	let progress = document.getElementsByClassName("progress-line");
let [stepNum,setStepNum] = useState(0);
	useEffect(()=>{
		console.log(stepNum);
		for(let i =1;i<=stepNum;i++){
			if(bullets[i].classList.contains("completed")===false){
				bullets[i].classList.add("completed");
			}
			if(progress[i-1].classList.contains("disabled")===true){
				progress[i-1].classList.remove("disabled");
			}
		}
		for(let i = stepNum+1;i<4;i++){
			if(bullets[i].classList.contains("completed")===true){
				bullets[i].classList.remove("completed");
			}
			if(progress[i-1].classList.contains("disabled")===false){
				progress[i-1].classList.add("disabled");
			}
		}
	},[stepNum]);
var contentText = [
	`<div class="row">
	<div class="col-lg-6">
		<div class="sub-subtitle">
			Screening
		</div>
		<div class="sub-content mt-5">
			스타트업을 대상으로 아이디어를 접수합니다.<br>
			각 아이디어를 분석하여 가능성 없는 아이디어를 배제하고<br>
			서비스를 제공할 아이디어를 뽑는 과정을 거칩니다.
		</div>
	</div>
	<div class="col-lg-6 d-flex justify-content-center">
		<img class="mt-5 mt-lg-0" style="max-width: 95%" src="../img/Service Process/image 69.png" alt="">
	</div>
</div>`,
`<div class="row">
<div class="col-lg-6">
	<div class="sub-subtitle">
		Selecting Service
	</div>
	<div class="sub-content mt-5">
		스타트업 진행 정도, 스타트업의 종류,<br>
		제공하는 서비스의 난이도 차이에 따라<br>
		서비스를 4단계로 나누어 진행합니다.<br>
		스타트업은 원하는 서비스를 선택할 수 있습니다.
	</div>
</div>
<div class="col-lg-6 d-flex justify-content-center">
	<img class="mt-5 mt-lg-0" style="max-width: 95%" src="../img/Service Process/image 72.png" alt="">
</div>
</div>`,
`<div class="row">
<div class="col-lg-6">
	<div class="sub-subtitle">
		Consulting & Deal making
	</div>
	<div class="sub-content mt-5">
		Idad Pool을 접수하고, 시장 검증을 통해 초기 데이터를 생성합니다.<br>
		데이터를 기반으로 적절한 VC/AC를 분석하여<br>
		Idea Business와 VC/AC 사이를 조율합니다.<br>
		또한 아이디어를 정부/지자체, VC/AC, 일반 기업 등으로 전달하여<br>
		원활하게 대규모 투자가 이루어질 수 있도록 도움을 줍니다.
	</div>
</div>
<div class="col-lg-6 d-flex justify-content-center">
	<img class="mt-5 mt-lg-0" style="max-width: 95%" src="../img/Service Process/image 73.png" alt="">
</div>
</div>`,
`<div class="row">
<div class="col-lg-4">
	<div class="sub-subtitle">
		Securitization
	</div>
	<div class="sub-content mt-4">
		아이디어나 상품에 대해 증권화를 진행합니다.
	</div>
	<div class="d-flex justify-content-center">
	<img class="mt-5 mt-lg-0" style="max-width: 100%;" src="../img/Service Process/마켓 1.png">
	</div>
</div>
<div class="col-lg-8 d-flex justify-content-center">
	<div class="row">
	<div class="col-lg-7 d-flex justify-content-center">
	<img src="../img/Service Process/로그인한 후 메인페이지 1.png" style="max-width: 100%;">
	</div>
	<div class="col-lg-5 d-flex justify-content-center">
	<img src="../img/Service Process/마켓-클릭 (1) 1.png" style="max-width: 100%;">
	</div>
	</div>
	
</div>
</div>`
	
];


    return(
        <>
                    <div className="container-fluid position-dot" style={{overflow:'hidden'}}>
				<div className="dot-1"></div>
				  <div className="dot-2 mobile-none"></div>
				  <div className="dot-3 mobile-none"></div>
			</div>
			<div className="container">
				<div className="introduce-company-top">
				  <div className="inner">
					  <div className="row d-flex align-items-center">
						  <div className="col-lg-6">
							  <p className="about-shift">About Shift</p>
							  <div className="title">Start-up<br/>엑셀러레이팅<br/>서비스</div>
							  <p className="mt-2 below-title-content">극초기 스타트업을 위한 엑셀러레이팅 서비스로,
								<br/>데이터의 단기 및 장기 관리, VC/AC 연결, 컨설팅 등 다양한 서비스를
							<br/>각 스타트업마다 맞춤형으로 제공합니다.</p>
							  <Link to={"/announce"} className="btn-getStarted mt-5">Get Started</Link>
						  </div>
						  <div className="col-lg-6">
							  <img className="service-img mobile-none" src="../img\office-business-meeting-5472251_1920.jpg" alt=""/>
						  </div>
					  </div>
					  
				  </div>
				</div>
			</div>
			<div className="container from300-100">
			  <div className="">
				<p className="sub-title">About Service</p>
				<div className="row">
				  <div className="col-lg-7">
					<img className="mt-5 ps-lg-5 img-contain" src="../img\About Service\laptop-3196481_1920 (1).jpg" alt=""/>
				  </div>
				  <div className="col-lg-5 mt-5 d-flex justify-content-end">
					<div className="me-3">
					  <p className="sub-subtitle">What's the Service?</p>
					  <p className="sub-content text-left">
						스타트업과 VC/AC에게 필요한<br/>
						시장검증 데이터를 생산 및 가공하는 것을<br/>
						도와주고, 그것을 분석하여<br/>
						앞으로의 방향성을 컨설팅해줍니다.<br/>
						또한 스타트업과 VC/AC를 연결함으로써<br/>
						투자 네트워크 형성을 도와주고<br/>
						기업 간의 시너지 효과를 만듭니다.
					  </p>
					</div>
					<div className="stick"></div>
				  </div>
				</div>
				<div className="row" style={{marginTop: '153px'}}>
				  <div className="col-lg-6 d-grid order-lg-1 order-2">
					<div className="row">
					  <div className="col">
						<div className=" stick-ver mobile-none"></div>
					  </div>
					  <div className="col-lg-auto">
						<div className="ms-5">
						  <p className="sub-subtitle">Service for Who?</p>
						  <p className="sub-content">
						   시간, 자본, 인력 등이 모두 부족한<br/>
						   극초기 스타트업들에게 외부 연걸, 내부정리 등을<br/>
						   도와줌으로써 빠르게 성장할 수 있도록<br/>
						   도와줍니다.<br/>
						   또한 투자자들에게 이러한 서비스를 알리고<br/>
						   연결해줌으로써 투자자와 스타트업이 공생할<br/>
						   수 있도록 해줍니다.
						  </p>
						</div>
					  </div>
					</div>
					
				  </div>
				  <div className="col-lg-6">
					<img className="pl-lg-5 img-contain" src="../img\About Service\revenue-1704073_1280.png" alt=""/>
				  </div>
				</div>
				<div className="row" style={{marginTop: '153px'}}>
				  <div className="col-lg-6 d-flex justify-content-center">
					<img className="img-ver" src="../img\About Service\refugees-1020163_1920.jpg" alt=""/>
				  </div>
				  <div className="col-lg-6 mobile-mt5" >
					<div className="d-flex">
					  <div className="stick"></div>
					<div className="ms-5">
					  <p className="sub-subtitle">Why this Service?</p>
					  <p className="sub-content">
						극초기 스타트업의 경우 자본이 부족해 실패 가능성이 높고,<br/>
						그에 따라 투자하고자 하는 VC/AC가 적을 수 밖에 없습니다.<br/>
						Shift는 이러한 문제를 해결하고자 시장검증 플랜과 제작을 도와주고,<br/>
						필요한 데이터를 생산해 VC/AC와 연결을 해 줌으로써,<br/>
						스타트업이 빠르게 성장하여 더 많은 고객을 모집할 수 있도록<br/>
						도와주는 서비스입니다.
					  </p>
					</div>
					
					</div>
					
				  </div>
				</div>
			  </div>
			  <p className="sub-title" style={{marginTop: '187px'}}>Service detail</p>
			  <div className="text-center">
				  <div className="sub-subtitle">Service Process</div>
				  <div className="sub-content mt-3">
					  서비스의 과정이나 제품의 생산 과정을 보여줍니다.
				  </div>
				  <div className="sub-content">이 페이지를 통해 방문자는 어떤 서비스 혹은
					  상품인지 파악한 뒤, 사전예약을 진행할 수 있습니다.
				  </div>
			  </div>
			  <div className="service-progress">
				  <div id="stepProgressBar" className="">
					  
					  <div className="step">
						  <div className="d-flex align-items-center">
							  <div className="bullet completed" onClick={()=>{setStepNum(0)}}>1</div>
							  <div className="progress-line"></div>
						  </div>				
						  <p className="step-text">Step 1</p>
						  
					  </div>
					  <div className="step">
						  <div className="d-flex align-items-center">
							  <div className="bullet" onClick={()=>{setStepNum(1)}}>2</div>
							  <div className="progress-line disabled"></div>
						  </div>
						  <p className="step-text">Step 2</p>
					  </div>
					  <div className="step">
						  <div className="d-flex align-items-center">
							  <div className="bullet" onClick={()=>{setStepNum(2)}}>3</div>
							  <div className="progress-line disabled"></div>
						  </div>
						  <p className="step-text">Step 3</p>
					  </div>
					  <div className="step">
						  <div className="d-flex align-items-center">
							  <div className="bullet" onClick={()=>{setStepNum(3)}}>4</div>
							  
						  </div>
						  <p className="step-text">Step 4</p>
					  </div>
					  
					  
				  </div>
				  <div id="main">
					  <div id="content" dangerouslySetInnerHTML={
						   { __html: {
								0:contentText[0],
								1:contentText[1],
								2:contentText[2],
								3:contentText[3]
							}[stepNum]}
					  }>
						 		
					  </div>
					  
				  </div>
			  </div>
			  <p className="sub-subtitle text-center" style={{marginTop: '120px'}}>Service UX/UI</p>
			  <p className="sub-content text-center">
				  Shift 서비스가 어떻게 구성되어 있는지 사이트 페이지를 보여줍니다.
			  </p>
			  <div className="row mt-5">
				  <div className="col-md-6 text-center d-flex justify-content-center">
					  <div className="content-box mobile-nopad">
						<p className="font-weight-bold mt-5 mt-lg-0">메인 페이지</p>
						<p>Shift 사이트에 맨 처음 접속할 시 나오는 페이지입니다.</p>
						<img className="box-img" src="../img\Service UX,UI\로그인한 후 메인페이지 1.png" alt=""/>
					  </div>
					  
					  
				  </div>
				  <div className="col-md-6 text-center d-flex justify-content-center mt-5 mt-md-0">
					<div className="content-box mobile-nopad">
						<p className="font-weight-bold mt-5 mt-lg-0">마이페이지</p>
						<p>투자자들이 자신의 머니나 투자 현황을<br/> 확인할 수 있는 페이지입니다.</p>
						<img className="box-img" src="../img\Service UX,UI\마이페이지 홈 2.png" alt=""/>
					  </div>
					  
				  </div>
				  </div>
				  <div className="row mt-5">
				  <div className="col-md-6 text-center d-flex justify-content-center">
					<div className="content-box mobile-nopad">
						<p className="font-weight-bold mt-5 mt-lg-0">마켓 페이지</p>
						<p>증권화된 서비스들의 판매 페이지입니다.</p>
						<img className="box-img" src="../img\Service UX,UI\마켓 1.png" alt=""/>
					  </div>
					  
				  </div>
				  <div className="col-md-6 text-center d-flex justify-content-center mt-5 mt-md-0">
					<div className="content-box mobile-nopad">
						
						<p className="font-weight-bold mt-5 mt-lg-0">상품 페이지</p>
						<p>서비스 또는 상품을 클릭하면 볼 수 있는 페이지입니다.</p>
						<img className="box-img-2" src="../img\Service UX,UI\마켓-클릭 (1) 2.png" alt=""/>
					  
					  
				  </div>
			  </div>
			  
			  
			  </div>
			
			</div>
			  <section className="card wow fadeIn mt-5 company-card" style={{borderRadius: 0}}>
				  <div className="container card-shift">
					  <div className="card-body text-white text-center">
						  <p className="card-font mb-5">
							  Shift<br/>
							  스타트업 초기 엑셀러레이팅 서비스
						  </p>
						  <a className="btn btn-contact">Contact now {'>'}</a>
					  </div>
					  <div className="below-title text-center d-flex flex-md-row flex-column-reverse justify-content-between text-white mt-3 mt-lg-5">
						<div className="mt-3 mb-3"><i className="far fa-check-circle"></i> 데이터 관리 제공</div>
						<div className="mt-3 mb-3"><i className="far fa-check-circle"></i> VC/AC 연결</div>
						<div className="mt-3 mb-3"><i className="far fa-check-circle"></i> 초기 스타트업의 성장속도 상승</div>
					</div>
				  </div>
			  </section>
			
			
        </>
    );
}

export default HomeCompany;