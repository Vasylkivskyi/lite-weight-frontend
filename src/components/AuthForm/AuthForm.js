import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './authForm.scss';

const AuthForm = (props) => {
  return (
    <div className='auth-form justify-content-center col-lg-5 col-md-7'>
      <Form>
        <h2 className='form-title'>Реєстрація</h2>
        <FormGroup>
          <Label for='firstName'>Ім'я</Label>
          <Input
            className='form-input'
            type='text'
            name='name'
            id='firstName'
            placeholder='Арнольд'
          />
          <Label for='lastName'>Прізвище</Label>
          <Input
            className='form-input'
            type='email'
            name='email'
            id='lastName'
            placeholder='Шварценеггер'
          />
          <Label for='email'>Email</Label>
          <Input
            className='form-input'
            type='email'
            name='email'
            id='exampleEmail'
            placeholder='arnie@coolmail.gym'
          />
          <Label for='password'>Пароль</Label>
          <Input
            className='form-input'
            type='password'
            name='password'
            id='password'
            placeholder='Введіть пароль'
          />
          <Input
            className='form-input'
            type='password'
            name='password'
            placeholder='Підтвердіть пароль'
          />
        </FormGroup>
        <Button>Зареєструватись</Button>
      </Form>
    </div>
  );
};

AuthForm.propTypes = {};

AuthForm.defaultProps = {};

export default AuthForm;
