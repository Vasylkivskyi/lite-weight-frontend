import React from 'react';
import PropTypes from 'prop-types';
import { InputGroupAddon, InputGroupText, InputGroup, Input } from 'reactstrap';
import { FaPlusCircle } from 'react-icons/fa';
import './ExercisesList.scss';

const ExercisesList = (props) => {
  return (
    <div className='exercises-list'>
      <InputGroup>
        <Input placeholder='Dolla dolla billz yo!' className='exercise-title remove-outline' />
        <InputGroupAddon addonType='append'>
          <InputGroupText>
            <FaPlusCircle className='icon' />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

ExercisesList.propTypes = {};

export default ExercisesList;
