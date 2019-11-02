import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './authForm.scss';
import { registerNewUser, loginUser } from 'ReduxModules/authentication/authActions';
import Router from 'next/router';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      checkPassword: '',
    };
  }

  handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    // const { password, checkPassword } = this.state;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (page) => {
    const { firstName, lastName, email, password } = this.state;
    const { dispatch } = this.props;
    if (page === 'register') {
      const newUser = {
        firstName,
        lastName,
        email,
        password,
      };
      dispatch(registerNewUser(newUser));
      Router.push({ pathname: '/login' });
    } else {
      const usersLoginData = {
        email,
        password,
      };
      dispatch(loginUser(usersLoginData));
      Router.push({ pathname: '/' });
    }
  };

  renderForm = (page) => {
    if (page === 'register') {
      return (
        <FormGroup>
          <Label for='firstName'>Ім'я</Label>
          <Input
            className='form-input'
            type='text'
            value={this.state.firstName}
            name='firstName'
            id='firstName'
            placeholder='Арнольд'
            onChange={this.handleChange}
          />
          <Label for='lastName'>Прізвище</Label>
          <Input
            className='form-input'
            type='text'
            value={this.state.lastName}
            name='lastName'
            id='lastName'
            placeholder='Шварценеггер'
            onChange={this.handleChange}
          />
          <Label for='email'>Email</Label>
          <Input
            className='form-input'
            type='email'
            value={this.state.email}
            name='email'
            id='email'
            placeholder='arnie@coolmail.gym'
            onChange={this.handleChange}
          />
          <Label for='password'>Пароль</Label>
          <Input
            className='form-input'
            type='password'
            value={this.state.password}
            name='password'
            id='password'
            placeholder='Введіть пароль'
            onChange={this.handleChange}
          />
          <Input
            className='form-input'
            type='password'
            value={this.state.checkPassword}
            name='password'
            id='checkPassword'
            placeholder='Підтвердіть пароль'
            onChange={this.handleChange}
          />
          <Button onClick={() => this.handleSubmit(page)}>Зареєструватись</Button>
        </FormGroup>
      );
    }
    return (
      <FormGroup>
        <Label for='email'>Email</Label>
        <Input
          className='form-input'
          type='email'
          value={this.state.email}
          name='email'
          id='email'
          placeholder='arnie@coolmail.gym'
          onChange={this.handleChange}
        />
        <Label for='password'>Пароль</Label>
        <Input
          className='form-input'
          type='password'
          value={this.state.password}
          name='password'
          id='password'
          placeholder='Введіть пароль'
          onChange={this.handleChange}
        />
        <Button onClick={() => this.handleSubmit(page)}>Увійти</Button>
      </FormGroup>
    );
  };

  render() {
    const { page, dispatch } = this.props;
    const formTitle = page === 'register' ? 'Реєстрація' : 'Логін';
    return (
      <div className='auth-form justify-content-center col-lg-5 col-md-7'>
        <Form>
          <h2 className='form-title'>{formTitle}</h2>
          {this.renderForm(page)}
        </Form>
      </div>
    );
  }
}

AuthForm.propTypes = {
  page: PropTypes.string.isRequired,
};

AuthForm.defaultProps = {};

export default AuthForm;
