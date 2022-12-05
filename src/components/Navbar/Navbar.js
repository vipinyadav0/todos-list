import React from "react";
import "./Navbar.css"
import PropTypes from 'prop-types'

function Navbar(props) {
    return (
        <div className="Navbar">
            <div className="Logo">{props.logo}</div>
            <div className="Items">
                <ul className="Right">
                    <li>About</li>
                    <li>All To Dos</li>

                </ul>
            </div>

        </div>
    );
}

//Writing prototypes of our props
Navbar.propTypes = {
    logo: PropTypes.string
}

//default props of title if not passed through parent component.
Navbar.defaultProps = {
    title: "Your title here"
}
export default Navbar;



