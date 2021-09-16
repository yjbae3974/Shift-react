

function HomeCompany(){
    return(
        <>
                    <div className="container-fluid position-dot">
				<div className="dot-1"></div>
				  <div className="dot-2 mobile-none"></div>
				  <div className="dot-3 mobile-none"></div>
			</div>
			<div className="container">
				<div>
				  
				  <img src="" alt=""/>
				  <div>
					  <div className="row d-flex align-items-center">
						  <div className="col-lg-6">
							  <p className="about-shift">About Shift</p>
							  <div className="title">Start-up<br/>엑셀러레이팅<br/>서비스</div>
							  <p className="mt-2 below-title-content">극초기 스타트업을 위한 엑셀러레이팅 서비스로,
								<br/>데이터의 단기 및 장기 관리, VC/AC 연결, 컨설팅 등 다양한 서비스를
							<br/>각 스타트업마다 맞춤형으로 제공합니다.</p>
							  <a href="../main.html" className="button mt-5">Get Started</a>
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
					<img className="mt-5 mobile-nopad" src="../img\About Service\laptop-3196481_1920 (1).jpg" alt=""/>
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
					<div></div>
				  </div>
				</div>
				<div className="row">
				  <div className="col-lg-6 d-flex">
					<div className="row">
					  <div className="col-lg-auto">
						<div></div>
	  
					  </div>
					  <div className="col">
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
					<img className="mobile-nopad" src="../img\About Service\revenue-1704073_1280.png" alt=""/>
				  </div>
				</div>
				<div className="row" >
				  <div className="col-lg-6">
					<img className="img-ver" src="../img\About Service\refugees-1020163_1920.jpg" alt=""/>
				  </div>
				  <div className="col-lg-6 mobile-mt5" >
					<div className="d-flex">
					  <div className=""></div>
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
			  <p className="sub-title">Service detail</p>
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
							  <div className="bullet completed" onclick="goSteps(0)">1</div>
							  <div className="progress-line"></div>
						  </div>				
						  <p className="step-text">Step 1</p>
						  
					  </div>
					  <div className="step">
						  <div className="d-flex align-items-center">
							  <div className="bullet" onclick="goSteps(1)">2</div>
							  <div className="progress-line disabled"></div>
						  </div>
						  <p className="step-text">Step 2</p>
					  </div>
					  <div className="step">
						  <div className="d-flex align-items-center">
							  <div className="bullet" onclick="goSteps(2)">3</div>
							  <div className="progress-line disabled"></div>
						  </div>
						  <p className="step-text">Step 3</p>
					  </div>
					  <div className="step">
						  <div className="d-flex align-items-center">
							  <div className="bullet" onclick="goSteps(3)">4</div>
							  
						  </div>
						  <p className="step-text">Step 4</p>
					  </div>
					  
					  
				  </div>
				  <div id="main">
					  <div id="content"  className="">
						
					  </div>
					  
				  </div>
			  </div>
			  <p className="sub-subtitle text-center">Service UX/UI</p>
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
				  <div className="col-md-6 text-center d-flex justify-content-center">
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
				  <div className="col-md-6 text-center d-flex justify-content-center">
					<div className="content-box mobile-nopad">
						
						<p className="font-weight-bold mt-5 mt-lg-0">상품 페이지</p>
						<p>서비스 또는 상품을 클릭하면 볼 수 있는 페이지입니다.</p>
						<img className="box-img-2" src="../img\Service UX,UI\마켓-클릭 (1) 2.png" alt=""/>
					  
					  
				  </div>
			  </div>
			  
			  
			  </div>
			
			</div>
			  <section className="card wow fadeIn mt-5">
				  <div className="container card-shift">
					  <div className="card-body text-white text-center">
						  <p className="card-font mb-5">
							  Shift<br/>
							  스타트업 초기 엑셀러레이팅 서비스
						  </p>
						  <a className="btn" >Contact now `{'>'}`</a>
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