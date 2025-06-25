import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <>
   {/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
    </Navbar> */}
    <div className='navigation'>
        <ul>
        <li><a href="mhyapp">MY APP Logo</a></li>
        <li><a href="home">HOME</a></li>
        <li><a href="about">ABOUT</a></li>
        <li><input type="text" /></li>
        <li><a href="cart">CART</a></li>
        <li><a href="login">LOGIN</a></li>
        <li><a href="signup">SIGNUP</a></li>
        </ul>
    </div>
    </>
  
  )
}

export default Navigation