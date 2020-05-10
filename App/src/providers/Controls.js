import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areControlsVisible: false,
    };
  }

  toggleControlsVisiblity = () => {
    this.setState(prevState => ({
      areControlsVisible: !prevState.areControlsVisible,
    }));
  };

  render() {
    const { areControlsVisible } = this.state;

    const renderProps = {
      areControlsVisible,
      toggleControlsVisibility: this.toggleControlsVisiblity,
    };

    return this.props.render(renderProps);
  }
}
export default Controls;
