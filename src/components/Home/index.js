import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Menu, Icon, Card, List, Button, Tabs, Row, Col, Layout, Badge} from 'antd';
import { Link } from "react-router-dom";
import CholoplethMaps from "../CholoplethMaps";
import Combinations from "../Combinations";
import Selection from "../Selection";
const { Header, Sider, Content } = Layout;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {             
        }
    }
    
    componentDidUpdate(prevProps) {       
    }

    componentDidMount(){        
    }

    static getDerivedStateFromProps(props, state) {  
        return state;
    }        
                            
    render() {         
        return ( 
            <div>
            <Layout>                         
                    <Header>                        
                        <Row>
                            <Col xs={14} sm={14} md={14} lg={14} xl={14}>   
                                <h3 className="color-white">Home</h3>
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>                    
                        <Row>
                            <Selection />
                       </Row>
                       <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>   
                                <CholoplethMaps />
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>   
                                <Combinations />
                            </Col>
                        </Row>
                    </Content>            
            </Layout></div>);
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.auth.loggedIn,
        userObject: state.auth.user,        
    };
};

export default connect(mapStateToProps)(Home);