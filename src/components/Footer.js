import React, {Component} from 'react';
import { GithubOutlined } from '@ant-design/icons';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <a href="https://github.com/kuesugi/Starlink.where"><GithubOutlined /> View on GitHub </a>
                <span className="footer-divider">|</span>
                Starlink.where © 2020
            </footer>
        );
    }
}

export default Footer;