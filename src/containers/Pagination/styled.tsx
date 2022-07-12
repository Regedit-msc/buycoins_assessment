import { Button} from 'src/components';
import { font, theme } from 'src/utils/variables';
import styled, { css } from 'styled-components';

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
    background-color: ${theme.green[500]}10;
  }

  & svg path {
    stroke: transparent;
    fill: ${theme.grey[500]};
  }
`;



