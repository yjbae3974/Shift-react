

function 공지사항(){
    let checkbox = document.getElementsByClassName('checkmark');
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
            <div className="d-flex text-white mt-1">
                <label className="checkbox-container mx-3">[공지]
                    <input type="checkbox" checked="" id="announce"/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox-container mx-3">[업데이트]
                    <input type="checkbox" checked="checked" id="update"/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox-container mx-3">[이벤트]
                    <input type="checkbox" checked="checked" id="event"/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox-container mx-3">[개발현황]
                    <input type="checkbox" checked="checked" id="develop"/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox-container mx-3">[버그수정]
                    <input type="checkbox" checked="checked" id="debug"/>
                    <span className="checkmark"></span>
                  </label>
            </div>
            <div>

            </div>
            </div>
        </div>
        <div className="container d-flex justify-content-center">
          <div className="col-xl-12">
            <div className="table-responsive text-nowrap" id="content-placeholder">
            </div>
          </div>

        </div>
        <div className="container mt-5 d-flex justify-content-center" id="number-placeholder"></div>
        </div>
        </div>
    )
}

export default 공지사항;