import React, { useState } from 'react';
import PropTypes, { object } from 'prop-types';
import './LastTrainings.scss';
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
import { MdKeyboardArrowDown } from 'react-icons/md';

const LastTrainings = (props) => {
  const { trainings } = props;
  const data = moment(trainings[0].created_date).format('DD-MM-YYYY HH:mm');

  const renderTrainings = () => {
    const names = trainings.map((tr) => tr.exercise_name);
    const onlyUnique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    const uniqNames = names.filter(onlyUnique);
    const sortedExercises = uniqNames.map((name) => {
      const sets = trainings.filter((tr) => tr.exercise_name === name);
      return { name, sets };
    });

    return sortedExercises.map((ex, i) => {
      const [collapse, setCollapse] = useState(false);
      const toggle = () => setCollapse(!collapse);
      const changeCSS = collapse ? 'change' : '';

      return (
        <ListGroupItem key={i} className='justify-content-between'>
          <div className={`exercise-container ${changeCSS}`}>
            <div className='exercise-box'>
              <span className='exercise-name'>{ex.name}</span>
              <span className={`sets-count ${changeCSS}`}> Підходів: {ex.sets.length}</span>
            </div>
            <span className='see-more' onClick={toggle}>
              <MdKeyboardArrowDown className={`more-button ${changeCSS}`} />
            </span>
          </div>
          <Collapse isOpen={collapse}>
            <div className='exercise-table'>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Підхід</th>
                    <th>Кількість повторів</th>
                    <th>Вага</th>
                  </tr>
                </thead>
                <tbody>
                  {ex.sets.map((set, index) => (
                    <tr key={index}>
                      <th scope='row'>{index + 1}</th>
                      <td>{set.reps}</td>
                      <td>{set.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Collapse>
        </ListGroupItem>
      );
    });
  };

  return (
    <div className='last-trainings'>
      <Toast className='w-100'>
        <ToastHeader>
          Останнє тренування:<span className='date'>{data}</span>
        </ToastHeader>
        <ToastBody>
          <ListGroup>{renderTrainings()}</ListGroup>
        </ToastBody>
      </Toast>
    </div>
  );
};

LastTrainings.propTypes = {
  trainings: PropTypes.arrayOf(object).isRequired,
};

export default LastTrainings;
