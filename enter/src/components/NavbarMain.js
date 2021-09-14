import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
function NavbarMain(props){
    let setNum = props.setActivePath;
    let num = props.activePath;
    let active = document.getElementsByClassName("nav-link");
    useEffect(()=>{
        for(let i=0;i<4;i++){
            if(i===num-1){
                active[i].classList.add("active");
            }
            else{
                active[i].classList.remove("active");
            }
        }
        
    },[num])
    console.log(active[0]);
    return(
        <Navbar bg="nav" variant="dark" expand="lg" className="fixed-top">
  <Container>
    <Navbar.Brand className="nav-title"><Link to ="/home" onClick={()=>setNum(1)}>ENTER</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/home" className="nav-link" onClick={()=>setNum(1)}>소개</Link>
        <Link to="/announce" className="nav-link" onClick={()=>setNum(2)}>소통</Link>
        <Link to="/history" className="nav-link" onClick={()=>setNum(3)}>연혁</Link>
        <Link to="/partners" className="nav-link" onClick={()=>setNum(4)}>협력사</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavbarMain;