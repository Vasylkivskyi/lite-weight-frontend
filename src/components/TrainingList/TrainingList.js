import React, { useState, Fragment } from 'react';
import PropTypes, { number } from 'prop-types';
import './trainingList.scss';
import { FormGroup, Label, Input, CustomInput } from 'reactstrap';
import { MdDelete, MdAdd } from 'react-icons/md';
import { Table } from 'reactstrap';
import uuidv4 from 'uuid/v4';
import { setAlert } from 'ReduxModules/alert/alertActions';

const TrainingList = (props) => {
  const { dispatch, exercises } = props;
  const [trainingState, setTrainingState] = useState({
    trainings: [],
    set: {
      id: '',
      exerciseName: '',
      reps: 0,
      weight: 0,
    },
  });

  const { trainings, set } = trainingState;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const checkedValue = value === '' ? '0' : value;
    setTrainingState({
      ...trainingState,
      set: {
        ...set,
        [name]: checkedValue,
      },
    });
  };

  const handleSaveSet = () => {
    const { reps, weight } = set;

    if (isNaN(weight) || isNaN(reps)) {
      dispatch(setAlert('Значення поля повинно бути числом...', 'danger'));
      return;
    }

    setTrainingState({
      ...trainingState,
      trainings: [...trainings, { ...set, id: uuidv4() }],
    });
  };

  const handleDelete = (id) => {
    const filteredExercises = trainings.filter((tr) => tr.id !== id);
    setTrainingState({
      ...trainingState,
      trainings: [...filteredExercises],
    });
  };

  const handleSaveTraining = () => {
    console.log('handleSaveTraining');
  };

  const renderCurentTraining = () => {
    const renderExercises = trainings.map((training, i) => {
      const { exerciseName, reps, weight } = training;
      const exName = exerciseName.length ? exerciseName : exercises[0].name;
      return (
        <tr key={training.id}>
          <th scope='row'>{i + 1}</th>
          <td>{exName}</td>
          <td>{reps}</td>
          <td>{weight}</td>
          <td>
            <MdDelete className='icon' onClick={() => handleDelete(training.id)} />
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
