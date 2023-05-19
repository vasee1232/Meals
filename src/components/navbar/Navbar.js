import React from 'react';
import '../navbar/navbar.css';

function Navbar() {
  return (
    <div  style={{backgroundColor:'black',marginBottom:'15px'}}>
      <h1 style={{color:'white'}}>React Meals</h1>
      <a id='anc'>Home</a>
      <a id='anc'>Order</a>
      <a id='anc'>Contact Us</a>
    </div>
  )
}

export default Navbar;
