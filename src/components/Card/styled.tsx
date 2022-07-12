import { theme } from 'src/utils/variables';
import styled, { css } from 'styled-components';
import { CardProps } from 'src/types';

export const Card = styled.div<CardProps>`
  ${({
    width,
    height,
    color,
    boxShadow,
    padding,
    align,
    radius,
    display,
    justify,
    overflow,
  
  }) => {
    return css`
      width: ${width || '100%'};
      height: ${height || 'unset'};
      background: ${color ?? theme.white[100]};
      border-radius: ${radius || '0.9375rem'};
      box-shadow: ${boxShadow || '0 0 0.5rem rgba(0, 0, 0, 0.05)'};
      padding: ${padding ?? '2rem'};
      display: ${display && display};
      justify-content: ${justify && justify};
      align-items: ${align ?? 'center'};
      overflow: ${overflow && overflow};
     
    `;
  }}
  /* :hover {
    transform: scale(1.002);
    transition: all 0.2s ease;
  } */
`;
