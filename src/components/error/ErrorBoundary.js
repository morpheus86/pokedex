import React from "react";
// import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    const { state } = this;
    const { children } = this.props;

    if (state.errorInfo) {
      return (
        <>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {state.error && state.error.toString()}
            <br />
            {state.errorInfo.componentStack}
          </details>
        </>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
