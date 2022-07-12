import styled, { css } from 'styled-components';
import { font } from 'src/utils/variables';
import { ChipProps } from 'src/types';

export const Chip = styled.span<ChipProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  white-space: nowrap;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  ${({ color = 'white', background }) => {
    return css`
      color: ${color};
      background: ${background};
    `;
  }};
  font-weight: ${font.weights.semibold};
  font-size: ${font.sizes.base};
`;
