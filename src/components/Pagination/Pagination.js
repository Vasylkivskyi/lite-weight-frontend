import React from 'react';
import './Pagination.scss';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PaginationComponent = ({ currentPage }) => {
  console.log(currentPage);

  return (
    <div className='pagination'>
      <div className='buttons'>
        <Link href={`/?page=${currentPage - 1}`}>
          <a>
            <div className='selection'>
              <MdArrowBack />
            </div>
          </a>
        </Link>
        <div className='center-item current-page'>{currentPage}</div>
        <Link href={`/?page=${currentPage + 1}`}>
          <a>
            <div className='selection'>
              <MdArrowForward />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

PaginationComponent.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

export default PaginationComponent;
