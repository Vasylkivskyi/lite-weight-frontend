import React, { useState, useEffect } from 'react';
import PropTypes, { any } from 'prop-types';
import { InputGroupAddon, InputGroupText, InputGroup, Input, ListGroup, Button } from 'reactstrap';
import { FaPlusCircle } from 'react-icons/fa';
import { MdCreate, MdDelete } from 'react-icons/md';
import './ExercisesList.scss';
import { setAlert } from 'ReduxModules/alert/alertActions';
import { saveExercise } from 'ReduxModules/exercises/exercisesActions';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const ExercisesList = (props) => {
  const token = cookies.get('token');
  const { dispatch, exercises } = props;
  const exercisesData = exercises.message ? [] : exercises.rows;
  const [listData, setExercisesData] = useState({
    exerciseName: '',
    exercisesList: exercisesData,
  });

  const { exerciseName, exercisesList } = listData;

  const handleChange = (event) => {
    const { value } = event.target;
    setExercisesData({
      ...listData,
      exerciseName: value,
    });
  };

  useEffect(() => {
    setExercisesData({
      ...listData,
      exercisesList: [...exercisesData],
    });
  }, [props.exercises]);

  const addExercise = async () => {
    const loverCaseEx = exerciseName.toLowerCase();
    const repeatEx = exercisesList.filter((ex) => ex.name.toLowerCase() === loverCaseEx);
    console.log(exercisesList);
    if (!exerciseName.length) {
      dispatch(setAlert('Поле не може бути порожнім...', 'danger'));
      return;
    }
    if (repeatEx.length) {
      dispatch(setAlert('Вправа уже існує...', 'danger'));
      return;
    }
    // here need to make requests to db
    dispatch(saveExercise(token, exerciseName));
    setExercisesData({
      ...listData,
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
    // need to show modal and make req to db
    console.log('edit');
  };

  const handleDelete = () => {
    // need to show modal and make req to db

    console.log('delete');
  };

  const renderExercisesList = () => {
    return exercisesList.map((exercise) => {
      return (
        <li className='exercise-item' key={exercise.id}>
          <span className='exercise-text'>{exercise.name}</span>
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
  exercises: PropTypes.objectOf(any),
};

ExercisesList.defaultProps = {
  exercises: {},
};

export default ExercisesList;
