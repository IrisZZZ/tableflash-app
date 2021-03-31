import React, { Component } from 'react';
import {Affix, Layout,Row, Col,Menu} from 'antd'
function Header(){
    return(<Affix offsetTop = {0}><Layout.Header id="header" >
            <div className = "wrap">
                <Row>
                    <Col xs={6} sm={4} md={2}>
                        <h1 className = "logo"><Link to ="/">Logo</Link></h1>
                    </Col>
                    <Col xs ={18} sm={20} md={22}>
                        <Menu theme="dark" mode="horizontal" selectedKeys = {[activeIndex + ""]}>
                            {nav.map((navData,index) => {
                                return <Menu.Item key={index}>
                                    <Link to={navData.to}>{navData.txt}</Link>
                                </Menu.Item>
                            })}
                           
                        </Menu>
                    </Col>
                </Row>
            </div>
        </Layout.Header></Affix>)

}
export default Header