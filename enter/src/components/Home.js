import {Nav,Tab,Tabs,Container} from 'react-bootstrap'

function Home(){
    return(
        <>

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 sticky-nav" transition={false}>
        <Tab eventKey="home" title="서비스 소개">
          ㄴㅇㄹㅇㄹㄴ
        </Tab>
        <Tab eventKey="profile" title="회사소개">
          ㄴㅇㄹㅇㄴㄹ
        </Tab>
        </Tabs>

        
</>
    );
}

export default Home;