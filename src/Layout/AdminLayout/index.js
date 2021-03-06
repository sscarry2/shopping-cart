import React, { Fragment } from 'react';
import { isLogin } from '../../middleware/auth';
import SideBar from '../../components/SideBar';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { Layout, Menu, Image, Typography } from 'antd';
import { GiShoppingCart } from 'react-icons/gi';
import styled from 'styled-components';

const { Footer, Sider, Content } = Layout;

const WrapIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  padding: 10px;
`;

const AdminLayout = ({ children }) => {
  const location = useLocation();
  if (!isLogin()) {
    return <Redirect to='/' />;
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme='light' style={{ boxShadow: '0px 3px 10px #00000029' }}>
        <WrapIcon>
          <GiShoppingCart size={50} />
        </WrapIcon>
        <Menu
          theme='light'
          defaultSelectedKeys={['/history']}
          selectedKeys={[location.pathname]}
          mode='inline'
        >
          <Menu.Item key='/history'>
            <Link to='/history'>ข้อมูลการขาย</Link>
          </Menu.Item>
          <Menu.Item key='/stock'>
            <Link to='/stock'>คลังสินค้า</Link>
          </Menu.Item>
          <Menu.Item key='/employee-list'>
            <Link to='/employee-list'>พนักงาน</Link>
          </Menu.Item>
          <Menu.Item key='/promotion'>
            <Link to='/promotion'>โปรโมชั่น</Link>
          </Menu.Item>
          <Menu.Item key='/logout'>
            <Link to='/logout'>ออกจากระบบ</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ backgroundColor: 'white' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
