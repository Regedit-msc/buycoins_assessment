import { Row } from 'src/components';
import { TabHeaderItemButtonType } from 'src/types';
import { font, theme } from 'src/utils/variables';
import styled from 'styled-components';

export const TabHeaderBase = styled(Row)`
  flex-wrap: wrap;
`;

export const TabHeaderItemButton = styled.div<TabHeaderItemButtonType>`
  background: transparent;
  border: none;
  color: ${({ active }) => (active ? theme.green[500] : '#828282')};
  svg,
  path {
    stroke: ${({ active }) => (active ? theme.green[500] : '#828282')};
  }
  font-size: ${font.sizes.base};
  font-weight: ${({ active }) =>
    active ? font.weights.bold : font.weights.normal};
  padding: ${({ active }) => (active ? '0.5rem' : '0.875rem')};
  border-bottom: ${({ active }) => (active ? '0.2rem solid' : 'none')};
  border-color: ${({ active }) => (active ? theme.green[500] : 'none')};
  cursor: pointer;
  /* height: 100%; */
  :hover {
    color: ${theme.green[500]};
  }
`;
