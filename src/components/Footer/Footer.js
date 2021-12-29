import React from 'react';

const Footer = () => {

    return (
        <footer style={{backgroundColor:'#0A192F', color: '#9fa6b9'}} className="pt-3">
            <small className="d-block text-center py-5">Created <em>@SABBIR AHMMED</em>, {new Date().getFullYear()}</small>
        </footer>
    );
};

export default Footer;