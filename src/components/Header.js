import React, {Component} from 'react';
import logo from "../assets/images/starlink_logo.png";

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="title">
                    STARLINK.<span className="title-where">&lt;where&gt;</span>
                </p>
            </header>
        );
    }
}

export default Header;