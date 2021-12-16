import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import {Layout, Typography, Input, Menu, Button, Dropdown} from "antd";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles['app-header']}>
        <div className={styles['top-header']}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button 
            style={{marginLeft: 15}} overlay={
            <Menu>
              <Menu.Item>中文</Menu.Item>
              <Menu.Item>英文</Menu.Item>
            </Menu>
          }
          >语言</Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button>登陆</Button>
            <Button>注册</Button>
          </Button.Group>
        </div>
        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="logo" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>React 旅游网</Typography.Title>
          <Input.Search placeholder='请输入旅游目的地' className={styles['search-input']} />
        </Layout.Header>
      </div>
    </div>
  );
}

export default App;
