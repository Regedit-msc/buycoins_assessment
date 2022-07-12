import styled from 'styled-components';
import { Column, Row, Input, Card } from 'src/components';

export const MultiSelectContainer = styled(Column)`
  position: relative;
`;

export const MultiSelectWrapper = styled(Row)`
  background: transparent;
  border-radius: 4px;
`;

export const MultiSelectInput = styled(Input)`
  background: none;
  &:hover {
    outline: none;
    background: transparent;
  }
  &:focus {
    outline: none;
    background: transparent;
  }
`;

export const MultiSelectOptionsContainer = styled(Card)`
  position: absolute;
  top: -100px;
  z-index: 9999999;
  min-height: max-content;
  overflow-y: auto;
  max-height: 20rem;
`;
