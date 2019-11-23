import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import './trainingList.scss';
import { FormGroup, Label, Input, Button, ModalBody, ModalFooter } from 'reactstrap';
import { MdDelete, MdAdd } from 'react-icons/md';
import { Table } from 'reactstrap';
import uuidv4 from 'uuid/v4';
import { setAlert } from 'ReduxModules/alert/alertActions';
import { saveTraining } from 'ReduxModules/training/trainingActions';
import { ModalWindow } from 'Components';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const TrainingList = (props) => {
  const token = cookies.get('token');
  const { dispatch, exercises } = props;
  const [trainingState, setTrainingState] = useState({
    trainings: [],
    set: {
      exerciseId: '',
      exercise_name: '',
      reps: 0,
      weight: 0,
    },
    modalIsOpen: false,
  });

  const { trainings, set, modalIsOpen } = trainingState;

  const toggleModal = () =>
    setTrainingState({
      ...trainingState,
      modalIsOpen: !modalIsOpen,
    });

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
    const { reps, weight, exercise_name } = set;
    if (isNaN(weight) || isNaN(reps)) {
      dispatch(setAlert('Значення поля повинно бути числом...', 'danger'));
      return;
    }

    const exName = !exercise_name.length ? exercises[0].name : exercise_name;

    setTrainingState({
      ...trainingState,
      trainings: [...trainings, { ...set, exerciseId: uuidv4(), exercise_name: exName }],
    });
  };

  const handleDelete = (id) => {
    const filteredExercises = trainings.filter((tr) => tr.exerciseId !== id);
    setTrainingState({
      ...trainingState,
      trainings: [...filteredExercises],
    });
  };

  const handleSaveTraining = () => {
    dispatch(saveTraining(trainings, token));
    Router.push('/');
  };

  const renderModalContent = () => {
    return (
      <Fragment>
        <ModalBody>Ви дійсно хочете зберегти сьогоднішнє тренування?</ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleSaveTraining}>
            Зберегти
          </Button>{' '}
          <Button color='secondary' onClick={toggleModal}>
            Скасувати
          </Button>
        </ModalFooter>
      </Fragment>
    );
  };

  const renderCurentTraining = () => {
    const renderExercises = trainings.map((training, i) => {
      const { exercise_name, reps, weight } = training;
      return (
        <tr key={training.exerciseId}>
          <th scope='row'>{i + 1}</th>
          <td>{exercise_name}</td>
          <td>{reps}</td>
          <td>{weight}</td>
          <td>
            <MdDelete className='icon' onClick={() => handleDelete(training.exerciseId)} />
          </td>
        </tr>
      );
    });

    return (
      <Fragment>
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
        {''}
        <div className='text-center mt-3 mb-3'>
          <Button color='primary' onClick={toggleModal}>
            Зберегти
          </Button>
        </div>
      </Fragment>
    );
  };

  const renderExercisesOptions = () => {
    return exercises.map((ex) => <option key={ex.id}>{ex.name}</option>);
  };

  return (
    <div className='training-list section-wrapper'>
      <h1 className='mb-3'>Сьогоднішнє тренування</h1>
      <div className='row exercise-input'>
        <FormGroup className='select-exercise'>
          <Label for='exampleSelect'>Вибери вправу зі списку</Label>
          <Input type='select' name='exercise_name' onChange={(e) => handleChange(e)}>
            {renderExercisesOptions()}
          </Input>
        </FormGroup>
        <FormGroup className='digits'>
          <Label for='sets'>Повтори</Label>
          <Input type='text' name='reps' placeholder='0' onChange={(e) => handleChange(e)} />
        </FormGroup>
        <FormGroup className='digits'>
          <Label for='weight'>Вага</Label>
          <Input type='text' name='weight' placeholder='0' onChange={(e) => handleChange(e)} />
        </FormGroup>
        <div className='button-container' onClick={handleSaveSet}>
          <MdAdd className='icon-plus' />
        </div>
      </div>
      {trainings.length > 0 && (
        <Fragment>
          <h4 className='text-center mt-3 mb-3'>Виконані вправи</h4>
          <h6 className='text-center mb-3'>(Не забудь зберегти своє тренування у кінці!)</h6>
          {renderCurentTraining()}
        </Fragment>
      )}
      <ModalWindow
        isOpen={modalIsOpen}
        toggle={toggleModal}
        content={renderModalContent}
        title='Зберегти тренування?'
      />
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
