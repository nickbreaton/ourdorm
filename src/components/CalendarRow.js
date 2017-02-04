import styled from 'styled-components';

export default styled.div`
  display: flex;
  border: 1px solid #e0e0e0;
  border-right: 0;
  border-left: 0;
  &:not(:last-child) {
    border-bottom: none;
  }
`;
