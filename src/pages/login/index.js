// 使用 bootstrap 的登录页面
import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="container">
        {/* 行 */}
        <div className="row justify-content-center">
          {/* 列 */}
          <div className="col-md-5">
            {/* 卡 m-margin y-top/bottom 5-$spacer*3*/}
            <div className="card my-5">
              <div className="card-body">
                {/* display-num 显示标题 使标题突出 */}
                <h1 className="my-5 display-4">Login</h1>

                <div>
                  {/* 表格组 */}
                  <div className="form-group">
                    <label htmlFor="username">用户名</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="请输入用户名"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">密码</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="请输入密码"
                    />
                  </div>

                  <button className="btn btn-primary btn-block my-4">登录</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
