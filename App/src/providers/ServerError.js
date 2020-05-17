import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ServerError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { isError } = this.props;

    if (prevProps.isError !== isError) {
      this.setState({
        error: isError,
      });
    }
  }

  togglePopUp = () => {
    // toggles error's Popup
    this.setState(prevState => ({
      error: !prevState.error,
    }));
  };

  render() {
    const { error } = this.state;
    const { render } = this.props;
    const renderProps = {
      isError: error,
      toggleError: this.togglePopUp,
    };

    return render(renderProps);
  }
}

const mapStateToProps = ({ isError }) => ({ isError });

ServerError.propTypes = {
  isError: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ServerError);
