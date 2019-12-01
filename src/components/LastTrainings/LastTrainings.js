import React from 'react';
import PropTypes, { object } from 'prop-types';
import './LastTrainings.scss';
import { ListGroupItemComponent } from 'Components';
import {
  Toast,
  ToastBody,
  ToastHeader,
  ListGroup,
  ListGroupItem,
  Collapse,
  Table,
} from 'reactstrap';
import moment from 'moment';

const LastTrainings = (props) => {
  const { training } = props;
  const { created_date } = training[0];
  const date = moment(created_date).format('DD-MM-YYYY HH:mm');

  const renderTrainings = () => {
    const names = training.map((tr) => tr.exercise_name);
    const onlyUnique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    const uniqNames = names.filter(onlyUnique);
    const sortedExercises = uniqNames.map((name) => {
      const sets = training.filter((tr) => tr.exercise_name === name);
      return { name, sets };
    });

    return sortedExercises.map((ex, i) => (
      <ListGroupItemComponent key={i} name={ex.name} sets={ex.sets} />
    ));
  };

  return (
    <div className='last-trainings'>
      <Toast className='w-100'>
        <div className='home-header'>
          <span className='date'>{date}</span>
        </div>

        <ToastBody>
          <ListGroup>{renderTrainings()}</ListGroup>
        </ToastBody>
      </Toast>
    </div>
  );
};

LastTrainings.propTypes = {
  training: PropTypes.arrayOf(object).isRequired,
};

export default LastTrainings;
