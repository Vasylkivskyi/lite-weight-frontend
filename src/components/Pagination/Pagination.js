import React from 'react';
import './Pagination.scss';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PaginationComponent = ({ currentPage, amount }) => {
  const page = currentPage < 1 ? 1 : currentPage;
  const numOnPage = 5;
  const lastPage = Math.ceil(amount / numOnPage);

  const disableLinkPrev = currentPage <= 1 ? 'disabled-link' : '';
  const disableLinkNext = currentPage >= lastPage ? 'disabled-link' : '';

  return (
    <div className='pagination'>
      <div className='buttons'>
        <Link href={`/?page=${currentPage - 1}`}>
          <a className={disableLinkPrev}>
            <div className='selection'>
              <MdArrowBack />
            </div>
          </a>
        </Link>
        <div className='center-item current-page'>{`${page} of ${lastPage}`}</div>
        <Link href={`/?page=${currentPage + 1}`}>
          <a className={disableLinkNext}>
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
  amount: PropTypes.number.isRequired,
};

export default PaginationComponent;
