import styled from 'styled-components';

export default styled.div`
  flex-grow: 1;
  height: auto;
  transition: width 0.1s linear;
  position: relative;
  border: 1px solid #e0e0e0;
  border-bottom: none;
  border-top: none;
  background: ${props => props.current ? 'white' : '#f2f2f2'};
  &:not(:last-child) {
    border-right: none;
  }
  &::after {
    padding-top: 100%;
    content: '';
    display: block;
  }
`;
