import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './authForm.scss';

const AuthForm = (props) => {
  const { page } = props;
  const formTitle = page === 'register' ? 'Реєстрація' : 'Логін';

  const renderForm = (page) => {
    if (page === 'register') {
      return (
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
          <Button>Зареєструватись</Button>
        </FormGroup>
      );
    }
    return (
      <FormGroup>
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
        <Button>Увійти</Button>
      </FormGroup>
    );
  };

  return (
    <div className='auth-form justify-content-center col-lg-5 col-md-7'>
      <Form>
        <h2 className='form-title'>{formTitle}</h2>
        {renderForm(page)}
      </Form>
    </div>
  );
};

AuthForm.propTypes = {
  page: PropTypes.string.isRequired,
};

AuthForm.defaultProps = {};

export default AuthForm;
