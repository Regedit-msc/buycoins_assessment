import { Button, Card, Row } from 'src/components';
import { font, theme } from 'src/utils/variables';
import styled, { css , keyframes} from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableContent = styled(Card)`
  border-radius: 0.5rem;
  display: flex;
  width: 100%;
  padding: 0;
  overflow: auto;
  table {
    width: 100%;
    border-collapse: collapse;

    & th,
    td {
      text-align: start;
      white-space: nowrap;
    }

    & th {
      padding: 1rem;
      color: ${theme.grey[700]};
      font-size: ${font.sizes.base};
      font-weight: ${font.weights.bold};
      border-bottom: 1px solid ${theme.grey[400]};
      &:first-child {
        padding-left: 2rem;
      }
      &:last-child {
        padding-right: 2rem;
        text-align: center;
      }
    }

    & td{
      padding: 1.2rem;
      font-weight: ${font.weights.normal};
      color: ${theme.black[100]};
      &:first-child {
        padding-left: 2rem;
      }
      &:last-child {
        padding-right: 2rem;
        text-align: end;
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  font-size: ${font.sizes.sm};
  color: ${theme.black[100]};
`;

export const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

export const PageButtons = styled(Button)<{ isPrevOrNext?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${font.sizes.xs};
  width: 2rem;
  height: 2rem;
  padding: 0.5em;
  ${({ isPrevOrNext }) =>
    isPrevOrNext &&
    css`
      background-color: ${theme.grey[100]};
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}

  &:hover {
    background-color: ${theme.grey[100]};
  }

  & svg path {
    stroke: transparent;
    fill: ${theme.grey[500]};
  }
`;

export const TableSearchContainer = styled(Row)`
  @media (max-width: 1028px) {
    width: 100%;
    * {
      width: 100%;
    }
  }
`;

export const SearchTermContainer = styled(Row)`
  flex-wrap: wrap;
  * {
    white-space: nowrap;
    border: none;
    width: max-content;
  }
`;


const breatheAnimation = keyframes`
to {
      visibility: hidden;
    }
`;


export const SearchResult = styled.div`
  animation: ${breatheAnimation} 1s steps(5, start) infinite;
  -webkit-animation: ${breatheAnimation} 1s steps(5, start) infinite;
`;
