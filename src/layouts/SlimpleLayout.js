// 一级路由 基本页面布局，后台首页需要使用。包含公用的头部、左侧等组件
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
// 引入容器组件的 connect
import { connect } from 'dva';
import styles from './SlimpleLayout.scss';

// 引入 Link 的两种方法
// import { Link } from 'dva/router';
import Link from 'umi/link';

const { Header, Sider, Content } = Layout;

// console.log(styles);
class SlimpleLayout extends React.Component {
  state = {
    collapsed: false,
  };

  // 右侧上方 icon 点击事件
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    // console.log(this.props.match.path);
    // console.log(this.props.menus);
  }

  render() {
    return (
      // 样式引用
      <Layout className={styles.normal}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline">
            {/* 侧边导航高亮处理 根据 router 来操作高亮*/}
            {/* 将菜单栏做成数据 拿出来循环 */}
            {this.props.menus.map(item => {
              return (
                <Menu.Item
                  key={item.id}
                  className={this.props.match.path === item.href ? 'ant-menu-item-selected' : ''}
                >
                  <Link to={item.href}>
                    <Icon type={item.icon} />
                    <span>{item.name}</span>
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// 容器组件从仓库中取出数据
export default connect(
  // 从仓库取出 菜单栏 数据 到UI组件中循环
  ({ global }) => ({
    // 只return一个对象 省略return return出来的是UI组件的props
    menus: global.menus,
  }),
  null,
)(SlimpleLayout);
// 最后返回组件
