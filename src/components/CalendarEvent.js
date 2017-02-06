import styled from 'styled-components';

export default styled.a`
  color: white;
  display: block;
  background: ${props => props.personal ? 'green' : 'blue'};
  margin-bottom: 5px;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
`;
