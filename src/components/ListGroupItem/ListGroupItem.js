import React, { useState } from 'react';
import {
  Toast,
  ToastBody,
  ToastHeader,
  ListGroup,
  ListGroupItem,
  Collapse,
  Table,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ListGroupItemComponent = ({ name, sets }) => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);
  const changeCSS = collapse ? 'change' : '';

  return (
    <ListGroupItem className='justify-content-between'>
      <div className={`exercise-container ${changeCSS}`} onClick={toggle}>
        <div className='exercise-box'>
          <span className='exercise-name'>{name}</span>
          <span className={`sets-count ${changeCSS}`}> Підходів: {sets.length}</span>
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
              {sets.map((set, index) => (
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
};

ListGroupItemComponent.propTypes = {};

export default ListGroupItemComponent;
