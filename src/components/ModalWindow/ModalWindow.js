import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader } from 'reactstrap';
import './ModalWindow.scss';

const ModalWindow = (props) => {
  const { content, isOpen, toggle, title } = props;
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        {content()}
      </Modal>
    </div>
  );
};

ModalWindow.propTypes = {
  buttonLabel: PropTypes.object,
  isOpen: PropTypes.bool,
};

ModalWindow.defaultProps = {
  isOpen: false,
};

export default ModalWindow;
