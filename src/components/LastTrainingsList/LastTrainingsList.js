import React from 'react';
import PropTypes from 'prop-types';
import { LastTrainings, PaginationComponent } from 'Components';
import './LastTrainingsList.scss';

const LastTrainingsList = ({ trainings, currentPage }) => {
  const amount = trainings[0][0].amount;

  return (
    <div className='last-trainings-container'>
      {trainings.map((training, id) => (
        <LastTrainings key={id} training={training} />
      ))}
      <PaginationComponent currentPage={currentPage} amount={+amount} />
    </div>
  );
};

LastTrainingsList.propTypes = {
  trainings: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  currentPage: PropTypes.number,
};

LastTrainingsList.defaultProps = {
  trainings: [],
  currentPage: 1,
};

export default LastTrainingsList;
