import React from 'react';
import PropTypes from 'prop-types';
import './trainingList.scss';
import { FormGroup, Label, Input } from 'reactstrap';
import { MdCreate, MdDelete, MdAdd } from 'react-icons/md';

const TrainingList = (props) => {
  const { dispatch, exercises } = props;

  const renderExercisesOptions = () => {
    return exercises.map((ex) => <option key={ex.id}>{ex.name}</option>);
  };
  return (
    <div className='training-list'>
      <div className='row exercise-input'>
        <FormGroup className='select-exercise'>
          <Label for='exampleSelect'>Вибери вправу зі списку</Label>
          <Input type='select' name='select' id='exampleSelect'>
            {renderExercisesOptions()}
          </Input>
        </FormGroup>
        <FormGroup className='digits'>
          <Label for='sets'>Повтори</Label>
          <Input type='text' name='selectMulti' id='sets' placeholder='0' />
        </FormGroup>
        <FormGroup className='digits'>
          <Label for='weight'>Вага</Label>
          <Input type='text' name='select' id='weight' placeholder='0' />
        </FormGroup>
        <div className='digits button-container'>
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
