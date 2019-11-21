import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import './trainingList.scss';
import { FormGroup, Label, Input, CustomInput } from 'reactstrap';
import { MdCreate, MdDelete, MdAdd } from 'react-icons/md';
import { Table } from 'reactstrap';

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
    });
  };

  const handleSaveTraining = () => {
    console.log('handleSaveTraining');
  };

  const renderCurentTraining = () => {
    console.log('test');
    const renderExercises = trainings.map((training, i) => {
      const { exerciseName, reps, weight } = training;
      const exName = exerciseName.length ? exerciseName : exercises[0].name;
      return (
        <tr key={i}>
          <th scope='row'>{i + 1}</th>
          <td>{exName}</td>
          <td>{reps}</td>
          <td>{weight}</td>
          <td>
            <MdDelete className='icon' />
          </td>
        </tr>
      );
    });
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Назва вправи</th>
            <th>Повтори</th>
            <th>Вага</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderExercises}</tbody>
      </Table>
    );
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
      {trainings.length > 0 && (
        <Fragment>
          <h2 className='text-center mt-3 mb-3'>Виконані вправи</h2>
          <h6 className='text-center mb-3'>(Не забудь зберегти своє тренування у кінці!)</h6>
          {renderCurentTraining()}
        </Fragment>
      )}
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
