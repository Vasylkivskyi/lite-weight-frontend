import React from 'react';
import PropTypes from 'prop-types';
import { LastTrainings, PaginationComponent } from 'Components';
import './LastTrainingsList.scss';

const LastTrainingsList = ({ trainings, currentPage }) => {
  return (
    <div className='last-trainings-container'>
      {trainings.map((training, id) => (
        <LastTrainings key={id} training={training} />
      ))}
      <PaginationComponent currentPage={currentPage} />
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
