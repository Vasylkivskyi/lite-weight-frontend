import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

const JumbotronComponent = (props) => {
  const { header, about, action, buttonAction, link } = props;
  return (
    <Jumbotron>
      <h1 className='display-3'>{header}</h1>
      <p className='lead'>{about}</p>
      <hr className='my-2' />
      <p>{action}</p>
      <p className='lead'>
        <Button color='primary'>
          <Link href={link}>
            <a className='simple-link'>{buttonAction}</a>
          </Link>
        </Button>
      </p>
    </Jumbotron>
  );
};

JumbotronComponent.propTypes = {
  header: PropTypes.string, // jumbotron header
  about: PropTypes.string, // Here you need to explain about that is this page
  action: PropTypes.string, // That user have to do on current page
  buttonAction: PropTypes.string, //button title
  link: PropTypes.string,
};

JumbotronComponent.defaultProps = {
  header: 'Hello, world!',
  about:
    'This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.',
  action:
    'It uses utility classes for typography and spacing to space content out within the larger container.',
  buttonAction: 'Learn More',
  link: '/',
};

export default JumbotronComponent;
