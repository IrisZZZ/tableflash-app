import React, { Component } from 'react';
import { Layout } from 'antd';
function Footer(){
    return(<Layout.Footer className="footer">
        <div>
            <p>You've reached the end</p>
            <p>© 2021 TableFlash Corp. All rights reserved</p>
            <a>Contact Us</a>
        </div>
    </Layout.Footer>);
}
export default Footer;