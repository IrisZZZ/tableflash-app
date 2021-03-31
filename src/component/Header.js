import React, { Component } from 'react';
import {Affix, Layout,Row, Col,Menu, Button} from 'antd'
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';
import logo from '../static/logo.png'
import Searchbar from './Searchbar';
const { SubMenu } = Menu;
class Header extends Component {
    state = {
        collapsed: true,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() { 
        return(<Affix offsetTop = {0}><Layout.Header id="header" >
            <div className = "wrap header">
                <Row align="bottom">
                    <Col className="hm_button" xs={6} sm={4} md={2}>
                        <div style={{ width: 256 }}>
                        <Button  size="large"shape="round" type="default" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                         </Button>
                    <Menu
                    id="home_page_menu"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    style={{display: this.state.collapsed?"none":"" }}
        //   inlineCollapsed={this.state.collapsed}
                    >   
          <SubMenu key="sub1" icon={<MailOutlined />} title="All Deals">
            <Menu.Item key="6">Post a Deal</Menu.Item>
          </SubMenu>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Order on TableFlash
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Contact Us
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Terms
          </Menu.Item>
         
        </Menu>
      </div>
                </Col>
                <Col  id="logo" xs ={12} sm={16} md={20}>
                <img  src={logo} alt="logo" />
                </Col>
                <Col  xs ={6} sm={4} md={2} style={{textAlign: "right"}}>
                中文版
             </Col>
            </Row>
        </div>
        <Row>
            <Col span="24">
            <Searchbar/>
            </Col>
        </Row>
        </Layout.Header>
        </Affix>)
    }
}
 
 
export default Header;
