import React from 'react'


function Footer() {
    let footerStyle = {
        position:"relative",
        top:"20vh",
        marginTop: "50px",
        width:"100%",
        
    }
    return (
        
        <div className = "bg-dark text-light py-2" style ={footerStyle}>
            <p className = "text-center">
             Copyright &copy; MADE WITH ❤ DIVYANSH VERMA
            </p>
        </div>
    )
}

export default Footer;
