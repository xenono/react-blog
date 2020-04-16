import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Administrator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLogged } = this.props;

    if (!isLogged) {
      alert('You are logged in');
      return <Redirect to="/" />;
    }
    return (
      <>
        <div>Administrator panel</div>
      </>
    );
  }
}

const mapDispatchToProps = ({ isLogged }) => ({ isLogged });

export default connect(mapDispatchToProps)(Administrator);
