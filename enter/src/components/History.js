import "../style/history.scss";
import {useEffect} from 'react'
function History() {
  useEffect(()=>{
    document.title="ENTER-연혁"
  })
  return (
    <>
      <div className="container-fluid bg-enter">
        <div className="container title-position">
          <p className="company-history">Company's HISTORY</p>
          <div className="row adjust-mp">
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start">
              <div>
                <p className="card-font text-lg-start text-center">
                  극초기 스타트업
                  <br /> 엑셀러레이팅 서비스 Shift
                </p>
                <p className="upper-content text-lg-start text-center">
                  ENTER는 2021.4 설립 이후로 지속적으로
                  <br />
                  스타트업의 성장을 돕고 있습니다.
                </p>
                <div className="canvas mt-5">
                  <div className="circle-1">
                    <div>Start-up</div>
                  </div>
                  <div className="circle-2">
                    <div>Investors</div>
                  </div>
                  <div className="circle-3">
                    <div>Company</div>
                  </div>
                  <div className="logo text-center d-flex-column">
                    <div className="d-flex logo-base">
                      <div className="logo-component"></div>
                      <div className="logo-component"></div>
                      <div className="logo-component"></div>
                      <div className="logo-component"></div>
                    </div>
                    <div className="enter-font">ENTER</div>
                  </div>
                </div>
                <p className="under-content text-lg-start text-center">
                  ENTER는 스타트업과 VC/AC를 직접 이어주며
                  <br />
                  좋은 아이디어가 사업으로의 성장, 발전할 수 있도록 돕습니다.
                  <br />
                  스타트업과 투자자들간의 새로운 투자 네트워크를 형성하며
                  <br />
                  Shift를 이용하는 기업들과의 시너지 효과를 도모합니다.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-center mt-5 mt-lg-5">
              <div className="canvas description mt-3">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
              </div>
              <div className="mt-sm-0 mt-2">
                <div className="description-font">2021.04</div>
                <div className="description-font below">description</div>
                <div className="description-font">2021.06</div>
                <div className="description-font below">description</div>
                <div className="description-font">2021.07</div>
                <div className="description-font below">description</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
