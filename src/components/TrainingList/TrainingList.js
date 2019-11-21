import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './trainingList.scss';
import { FormGroup, Label, Input } from 'reactstrap';
import { MdCreate, MdDelete, MdAdd } from 'react-icons/md';

const TrainingList = (props) => {
  const { dispatch, exercises } = props;
  const [trainingState, setTrainingState] = useState({
    trainings: [],
    set: {
      exerciseName: '',
      reps: 0,
      weight: 0,
    },
  });

  const { trainings, set } = trainingState;
  const { exerciseName, reps, weight } = set;

  const handleChange = (e) => {
    setTrainingState({
      ...trainingState,
      set: {
        ...set,
        [e.target.name]: event.target.value,
      },
    });
  };

  const handleSaveSet = () => {
    setTrainingState({
      ...trainingState,
      trainings: [...trainings, set],
      set: {
        exerciseName: '',
        reps: 0,
        weight: 0,
      },
    });
    console.log(trainingState);
  };

  const handleSaveTraining = () => {
    console.log('handleSaveTraining');
  };

  const renderExercisesOptions = () => {
    return exercises.map((ex) => <option key={ex.id}>{ex.name}</option>);
  };
  return (
    <div className='training-list'>
      <div className='row exercise-input'>
        <FormGroup className='select-exercise'>
          <Label for='exampleSelect'>Вибери вправу зі списку</Label>
          <Input
            type='select'
            name='exerciseName'
            id='exampleSelect'
            onChange={(e) => handleChange(e)}>
            {renderExercisesOptions()}
          </Input>
        </FormGroup>
        <FormGroup className='digits'>
          <Label for='sets'>Повтори</Label>
          <Input
            type='text'
            name='reps'
            id='sets'
            placeholder='0'
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup className='digits'>
          <Label for='weight'>Вага</Label>
          <Input
            type='text'
            name='weight'
            id='weight'
            placeholder='0'
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <div className='button-container' onClick={handleSaveSet}>
          <MdAdd className='icon' />
        </div>
      </div>
    </div>
  );
};

TrainingList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.object),
};

TrainingList.defaultProps = {
  exercises: [],
};

export default TrainingList;
