import React from "react";
import PropTypes from "prop-types"
import {NavLink} from "react-router-dom";

// ilerde state almiycaksa veya sabit sayfa ise veya sabit commponent gibi davranacaksa function component kullanabiliriz?
// function compnent oldugu icin render olmiycak sadece js formatinda return yapmasi gerekiyor.

/*
function Navbar(){
    return(
        <div>
            <h3>Navbar App</h3>
        </div>
    )
}
export default Navbar;
*/


// Bir component'ten baska bir Component'te veri aktarimi icin Props kullaniriz.
function Navbar({title}) {
    return (
        <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
            <a href="/" className="navbar-brand">{title}</a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active" style={{margin: "1rem"}}>
                    <NavLink to= "/" className="navbar-link">Home</NavLink>
                </li>
                <li className="nav-item active" style={{margin: "1rem"}}>
                    <NavLink to= "/add" className="navbar-link">Add User</NavLink>
                </li>
                <li className="nav-item active" style={{margin: "1rem"}}>
                    <NavLink to= "/github" className="navbar-link">Project Files</NavLink>
                </li>
            </ul>
        </nav>




    )
}


// isRequired: mutlaka gonderilmesi gerekiyo.
Navbar.propTypes = {
    // title'li baska bir yerde kullanmak icin bu sekilde yazdik
    title: PropTypes.string.isRequired
}

// Eger veri gonderilmez ise otomatik olarak title degeri App halinde olacak
Navbar.defaultProps = {
    title: "App"
}
export default Navbar;