import React from "react";
// import PropTypes from 'prop-types';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="ui container">
      <h1>Page Not Found!!!</h1>
      <p>Please try again!</p>
    </div>
  );
};

NotFoundPage.defaultProps = {
  staticContext: {}
};

export default NotFoundPage;
