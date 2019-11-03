import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './authForm.scss';
import { registerNewUser, loginUser } from 'ReduxModules/authentication/authActions';
import Router from 'next/router';
import Link from 'next/link';

const AuthForm = (props) => {
  const { page, dispatch } = props;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (page) => {
    if (page === 'register') {
      if (password !== password2) {
        console.log('Check the passwords...');
      } else {
        const newUser = {
          firstName,
          lastName,
          email,
          password,
        };
        dispatch(registerNewUser(newUser));
      }
    } else {
      console.log(formData);
    }
  };

  const formTitle = page === 'register' ? 'Реєстрація' : 'Логін';
  return (
    <div className='auth-form'>
      <h1>{formTitle}</h1>
      <Form>
        {page === 'register' && (
          <Fragment>
            <FormGroup>
              <Label for='firstName'>Ім'я</Label>
              <Input
                type='text'
                name='firstName'
                id='firstName'
                placeholder='Арнольд'
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for='lastName'>Прізвище</Label>
              <Input
                type='lastName'
                name='lastName'
                id='lastName'
                placeholder='Шварценеггер'
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Fragment>
        )}
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder=' Email'
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Пароль</Label>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='Введіть пароль'
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>

        {page === 'register' && (
          <FormGroup>
            <Input
              type='password'
              name='password2'
              id='password2'
              placeholder='Повторіть пароль'
              onChange={(e) => handleChange(e)}
            />
          </FormGroup>
        )}
        <Button onClick={() => handleSubmit(page)}>{formTitle}</Button>
      </Form>
      {page === 'register' ? (
        <p>
          Уже є аккаунт?{' '}
          <Link href='/login'>
            <a>Логін</a>
          </Link>
        </p>
      ) : (
        <p>
          Немає аккаунта?{' '}
          <Link href='/register'>
            <a>Реєстрація</a>
          </Link>
        </p>
      )}
    </div>
  );
};

AuthForm.propTypes = {
  page: PropTypes.string.isRequired,
  userToken: PropTypes.string,
};

AuthForm.defaultProps = {
  userToken: '',
};

export default AuthForm;
