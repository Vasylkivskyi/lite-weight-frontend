import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputGroupAddon, InputGroupText, InputGroup, Input, ListGroup, Button } from 'reactstrap';
import { FaPlusCircle } from 'react-icons/fa';
import { MdCreate, MdDelete } from 'react-icons/md';
import './ExercisesList.scss';
import { setAlert } from 'ReduxModules/alert/alertActions';

const ExercisesList = (props) => {
  const { dispatch } = props;
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
    const loverCaseEx = exerciseName.toLowerCase();
    const repeatEx = exercisesList.filter((ex) => ex.toLowerCase() === loverCaseEx);
    if (!exerciseName.length) {
      dispatch(setAlert('Поле не може бути порожнім...', 'danger'));
      return;
    }
    if (repeatEx.length) {
      dispatch(setAlert('Вправа уже існує...', 'danger'));
      return;
    }
    setExercisesData({
      ...listData,
      exercisesList: [...exercisesList, loverCaseEx],
      exerciseName: '',
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('enter');
      addExercise();
    }
  };

  const handleEdit = () => {
    // need to make response to db
    console.log('edit');
  };

  const handleDelete = () => {
    // need to make response to db
    console.log('delete');
  };

  const renderExercisesList = () => {
    return exercisesList.map((exercise) => {
      return (
        <li className='exercise-item'>
          <span className='exercise-text'>{exercise}</span>
          <div className='control-buttons'>
            <MdCreate className='icon' onClick={handleEdit} />
            <MdDelete className='icon' onClick={handleDelete} />
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
          onKeyPress={(e) => handleKeyPress(e)}
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
        </div>
      )}
    </div>
  );
};

ExercisesList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

ExercisesList.defaultProps = {};

export default ExercisesList;
