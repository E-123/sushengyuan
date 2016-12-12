import React from 'react';
import {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class Register extends Component {
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
                console.log('Received values of form: ', values);
                this.props.confirmRegister(values);
            }
        });
    };

    getVercode = (e) => {
        let error = this.props.form.getFieldError('phone');
        if (!error) {
            this.props.getVercode(this.props.form.getFieldValue('phone'));
        }
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <div className="form-wrapper">
                    <FormItem>
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, max: 11, min: 11, message: '请输入正确的手机号码' }],
                        })(
                            <Input type="tel" size="large" maxLength="11" placeholder="请输入手机号码" />
                        )}
                    </FormItem>
                    <div className="ver-code">
                        <FormItem>
                            {getFieldDecorator('smscode', {
                                rules: [{ required: true, message: '请输入验证码' }],
                            })(
                                <Input size="large" maxLength="4" placeholder="请输入验证码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.getVercode}>
                                获取验证码
                            </Button>
                        </FormItem>
                    </div>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, min: 6, max: 20, message: '请输入6-20位密码' }],
                        })(
                            <Input size="large" type="password" placeholder="请输入6-20位密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                            确认并登录
                        </Button>
                        <center>
                            <p>未注册、未设置或忘记密码？</p>
                            <Link to="login" className="register-link">返回 &gt;</Link>
                        </center>
                    </FormItem>
                </div>
             </Form>
        );
    }
}

export default Register = Form.create()(Register);
