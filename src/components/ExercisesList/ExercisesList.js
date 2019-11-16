import React, { useState, useEffect } from 'react';
import PropTypes, { any } from 'prop-types';
import {
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input,
  ListGroup,
  FormGroup,
  Button,
  Label,
} from 'reactstrap';
import { FaPlusCircle } from 'react-icons/fa';
import { MdCreate, MdDelete } from 'react-icons/md';
import { ModalWindow } from 'Components';
import './ExercisesList.scss';
import { setAlert } from 'ReduxModules/alert/alertActions';
import { saveExercise, getExercises, editExercise } from 'ReduxModules/exercises/exercisesActions';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const ExercisesList = (props) => {
  const token = cookies.get('token');
  const { dispatch, exercises } = props;
  const exercisesData = exercises.message ? [] : exercises.rows;
  const [listData, setExercisesData] = useState({
    exerciseName: '',
    editExerciseName: '',
    exercisesList: exercisesData,
    modalIsOpen: false,
    modalButtonLabel: '',
    modalTitle: '',
    exerciseId: 1,
  });

  const {
    exerciseName,
    exercisesList,
    modalIsOpen,
    modalTitle,
    modalButtonLabel,
    editExerciseName,
    exerciseId,
  } = listData;

  const toggleModal = () =>
    setExercisesData({
      ...listData,
      modalIsOpen: !modalIsOpen,
    });

  const handleChange = (event, fieldType) => {
    const { value } = event.target;
    if (fieldType === 'exerciseName') {
      setExercisesData({
        ...listData,
        exerciseName: value,
      });
    } else {
      setExercisesData({
        ...listData,
        editExerciseName: value,
      });
    }
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
    if (!exerciseName.length) {
      dispatch(setAlert('Поле не може бути порожнім...', 'danger'));
      return;
    }
    if (repeatEx.length) {
      dispatch(setAlert('Вправа уже існує...', 'danger'));
      return;
    }
    dispatch(saveExercise(token, exerciseName));
    setExercisesData({
      ...listData,
      exerciseName: '',
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addExercise();
    }
  };

  const handleEdit = (id) => {
    // need to show modal and make req to db
    console.log(id);
    setExercisesData({
      ...listData,
      modalIsOpen: true,
      modalTitle: 'Змінити вправу',
      exerciseId: id,
    });
  };

  const requestExerciseEdit = () => {
    dispatch(editExercise(token, { name: editExerciseName, id: exerciseId }));
    toggleModal();
  };

  const renderModalContent = () => (
    <FormGroup>
      <Label for='backdrop'>Введіть нову назву вправи</Label>{' '}
      <Input
        type='text'
        name='backdrop'
        id='backdrop'
        onChange={handleChange}
        placeholder='Жим штанги лежачи'
      />
    </FormGroup>
  );

  const handleDelete = () => {
    // need to show modal and make req to db

    console.log('delete');
  };

  const renderExercisesList = () => {
    const sortedExercises = exercisesList.sort(function(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return sortedExercises.map((exercise) => {
      return (
        <li className='exercise-item' key={exercise.id}>
          <span className='exercise-text'>{exercise.name}</span>
          <div className='control-buttons'>
            <MdCreate className='icon' onClick={() => handleEdit(exercise.id)} />
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
          onChange={(e) => handleChange(e, 'exerciseName')}
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
      <ModalWindow
        isOpen={modalIsOpen}
        toggle={toggleModal}
        content={renderModalContent}
        title={modalTitle}
        action={requestExerciseEdit}
      />
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
