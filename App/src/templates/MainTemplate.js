import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import PageContext from 'context';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

class MainTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: 'blog',
    };
  }

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['posts', 'tutorials'];

    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
    }
  };

  render() {
    const { children } = this.props;
    const { pageType } = this.state;
    return (
      <StyledWrapper>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </StyledWrapper>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
