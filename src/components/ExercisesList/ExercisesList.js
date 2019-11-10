import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputGroupAddon, InputGroupText, InputGroup, Input, ListGroup, Button } from 'reactstrap';
import { FaPlusCircle } from 'react-icons/fa';
import { MdCreate, MdDelete } from 'react-icons/md';
import './ExercisesList.scss';

const ExercisesList = (props) => {
  const [listData, setExercisesData] = useState({
    exerciseName: '',
    exercisesList: [],
  });

  const { exerciseName, exercisesList } = listData;

  const handleChange = (event) => {
    const { value } = event.target;
    setExercisesData({
      ...listData,
      exerciseName: value,
    });
  };

  const addExercise = () => {
    setExercisesData({
      ...listData,
      exercisesList: [...exercisesList, exerciseName],
    });
  };

  const renderExercisesList = () => {
    return exercisesList.map((exercise) => {
      return (
        <li className='exercise-item'>
          <span className='exercise-text'>{exercise}</span>
          <div className='control-buttons'>
            <MdCreate className='icon' onClick={addExercise} />
            <MdDelete className='icon' onClick={addExercise} />
          </div>
        </li>
      );
    });
  };

  return (
    <div className='exercises-list'>
      <InputGroup>
        <Input
          placeholder='Назва вправи'
          className='exercise-title'
          value={exerciseName}
          onChange={(e) => handleChange(e)}
        />
        <InputGroupAddon addonType='append'>
          <InputGroupText>
            <FaPlusCircle className='icon' onClick={addExercise} />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      {exercisesList.length > 0 && (
        <div className='created-exercises'>
          <ListGroup>{renderExercisesList()}</ListGroup>
          <Button color='primary' className='save-button' size='lg'>
            Зберегти список
          </Button>
        </div>
      )}
    </div>
  );
};

ExercisesList.propTypes = {};

export default ExercisesList;
