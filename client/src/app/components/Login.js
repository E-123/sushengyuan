/**
 * @file demo login
 * @author hancong
 * @date 2016-11-02
 */

import React from 'react';
import {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import moment from 'moment';
import _ from 'lodash';

const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);
    }

    state = {
    };

    componentWillMount = () => {
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <div className="form-wrapper">
                    <FormItem>
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: '请输入手机号码' }],
                        })(
                            <Input size="large" maxLength="11" placeholder="请输入手机号码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, min: 6, max: 20, message: '请输入密码' }],
                        })(
                            <Input size="large" type="password" placeholder="请输入密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        <center>
                            <p>未注册、未设置或忘记密码？</p>
                            <Link to="register" className="register-link">前去设置帐号 &gt;</Link>
                        </center>
                    </FormItem>
                </div>
             </Form>
        );
    }
}

export default Login = Form.create()(Login);