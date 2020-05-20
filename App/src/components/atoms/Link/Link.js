import styled from 'styled-components';

const Link = styled.a`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  color: #fff;
  padding: 10px;
  text-decoration: none;
  font-weight: 600;
  z-index: 999;
  &.active {
    text-decoration: underline;
    color: #bdbdbd;
  }
  &:hover {
    color: #bdbdbd;
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: 780px) {
    display: block;
    color: black;
    opacity: 0;
    height: 42px;
    border-bottom: 2px solid #cfcaca75;
    padding: 10px 0;
    width: 100%;

    &:hover,
    &:focus {
      background-color: #d3d3d3;
      cursor: pointer;
    }
    &:last-child {
      border-bottom: none;
    }
  }
`;
export default Link;
