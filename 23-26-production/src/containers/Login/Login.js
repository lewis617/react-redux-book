import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from '../../actions/auth';

@connect(
  state => ({ user: state.async.user }),
  authActions
)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.any,
    login: PropTypes.func,
    logout: PropTypes.func
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const input = this.refs.username;
    this.props.login(input.value);
    input.value = '';
  };

  render() {
    const { user, logout } = this.props;
    const styles = require('./Login.scss');
    return (
      <div className={styles.loginPage + ' container'}>
        <Helmet title="登录"/>
        <h1>登录</h1>
        {!user &&
          <div>
            <form className="login-form form-inline" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text" ref="username"
                  placeholder="输入用户名"
                  className="form-control"
                />
              </div>
              <button className="btn btn-success" onClick={this.handleSubmit}>
                <i className="fa fa-sign-in"/>{' '}登录
              </button>
            </form>
            <p>
              此操作将输入的用户名传给API服务器的session。
            </p>
          </div>
        }
        {user &&
          <div>
            <p>{user.name}，您已登录成功！</p>
            <div>
              <button className="btn btn-danger" onClick={logout}>
                <i className="fa fa-sign-out"/>{' '}登出
              </button>
            </div>
          </div>
        }
      </div>
    );
  }
}
