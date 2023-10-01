import React from 'react';
import ReviewsSearchForm from '../../components/Forms/ReviewsSearch';
import ReviewsSearchResults from '../../components/SearchResults/Reviews';

const ReviewsPage = () => {
  return (
    <>
      <ReviewsSearchForm  />
      <ReviewsSearchResults />
    </>
  )
};

export default ReviewsPage;