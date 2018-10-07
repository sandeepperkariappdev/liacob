import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Menu, Icon, Card, List, Button, Tabs, Row, Col, Layout, Badge} from 'antd';
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;


class Selection extends Component {
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
                                <h3 className="color-white">Selection</h3>
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>                    
                        
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

export default connect(mapStateToProps)(Selection);