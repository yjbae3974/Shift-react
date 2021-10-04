

function Footer(){
    return(
        <footer className="page-footer footer-custom pt-lg-5 pt-3 pb-lg-5 pb-3">
            <div className="container">
              <div className="below-title mobile-pad">
                <div className="d-flex">
                  <div className="d-flex logo-base">
                    <div className="logo-component"></div>
                    <div className="logo-component"></div>
                    <div className="logo-component"></div>
                    <div className="logo-component"></div>
                  </div>
                  <div className="sub-subtitle ms-3 d-flex align-items-center">ENTER</div>
                </div>
                <div className="d-grid footer-between">
                  <span>Page</span>
                  <span>License</span>
                  <span>About</span>
                  <span>Features</span>
                  <span>Pricing</span>
                  <span>Careers</span>
                  <span>Help</span>
                  <span>Privacy Policy</span>
                </div>
                <div style={{marginTop:'30px'}}>
                  © 2020 Landify UI Kit. All rights reserved
                </div>
              </div>
            </div>
        </footer>
    );
}

export default Footer;