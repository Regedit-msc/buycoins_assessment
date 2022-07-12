import { theme, font } from 'src/utils/variables';
import styled from 'styled-components';
import { SelectProps } from 'src/types';
import { ArrowDown } from '../../assets/icons/index';
import { Row } from '../Flex';

export const SelectBase = styled.select<SelectProps>`
  width: 100%;
  border: 0.5px solid #e8e8e8;
  background-color: ${(props) => props.background ?? 'transparent'};
  padding: 0.75rem 1.5rem;
  border-radius: ${(props) => props.radius ?? '0.5rem'};
  margin-top: 0;
  outline: 0;
  font-size: ${font.sizes.sm};
  color: ${(props) => props.color ?? theme.grey[400]};
  font-weight: ${(props) => props.weight ?? font.weights.normal};
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 2.15rem;
  height: ${(props) => props.color && '3.5rem'};
  :hover {
    border: 1px solid ${theme.grey[400]};
  }
  @media (max-width: 1024px) {
    width: ${(props) => props.width ?? '100%'};
  }
`;

export const ArrowUp = styled(ArrowDown)`
  position: absolute;
  right: 0;
  margin: 0 0.75rem;
  color: ${theme.black[500]};
  width: 15px;
  height: 15px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SelectContainer = styled(Row)`
  position: relative;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;
