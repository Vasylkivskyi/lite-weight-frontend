import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalWindow = (props) => {
  const { content, className, isOpen, toggle, title, action } = props;

  const [modal, setModal] = useState(false);

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{content()}</ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={action}>
            Do Something
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalWindow.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
};

ModalWindow.defaultProps = {
  isOpen: false,
};

export default ModalWindow;
