import React from 'react';
import PropTypes from 'prop-types';
import { LastTrainings } from 'Components';

const LastTrainingsList = ({ trainings }) => {
  return (
    <div>
      {trainings.map((training, id) => (
        <LastTrainings key={id} training={training} />
      ))}
    </div>
  );
};

LastTrainingsList.propTypes = {};

export default LastTrainingsList;
