import styled, { css } from 'styled-components';
import { font, theme } from 'src/utils/variables';
import { ButtonProps, Theme } from 'src/types';
import { objectKeys } from 'src/utils/functions';



export const BaseButton = styled.button<ButtonProps>`
  ${({ variant, background = 'blue', color = 'white' }) => {
    const bgDuplicate = background as keyof Theme;
    const colorDuplicate = color as keyof Theme;
    const bg = (objectKeys(theme).includes(bgDuplicate)
      ? theme[bgDuplicate][500 as never]
      : background) as string;
    const col: string = Object.keys(theme).includes(color)
      ? theme[colorDuplicate][100 as never]
      : color;

    switch (variant) {
      case 'solid':
        return css`
          border: none;
          background: ${bg};
          color: ${col};
          svg,
          path,
          * {
            stroke: ${col};
            color: ${col};
          }
        `;
      case 'outlined':
        return css`
          background: transparent;
          color: ${color};
          border: 1px solid ${bg};
          svg,
          path,
          * {
            color: ${col};
            stroke: ${bg};
          }
        `;
      case 'text':
        return css`
        background: transparent;
          border: none;
          color: ${bg};
          svg,
          path,
          * {
            color: ${col};
            stroke: ${bg};
          }
        `;
      default:
        return css`
          border: none;
          background: ${bg};
          color: ${col};
          svg,
          path,
          * {
            color: ${col};
            stroke: ${col};
          }
        `;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.6875rem;
  font-family: inherit;
  font-size: ${font.sizes.base};
  font-weight: ${font.weights.semibold};
  width: 100%;
  cursor: pointer;
  :active {
    transform: scale(0.97);
    transition: all 0.5s;
  }
`;

export const IconButton = styled(BaseButton) <
  ButtonProps & { toolTipTitle?: string }
  >`
  padding: 0;
  // height: ${({ size }) => size || '3.3125rem'};
  width: ${({ size }) => size || '3.3125rem'};

  ${({ color, background }) => {
    return css`
      background: ${theme[background as keyof Theme ?? 'white'][100 as never]};
      svg,
      path,
      * {
        color: ${theme[color as keyof Theme ?? 'white'][500 as never]};
        stroke: ${theme[color as keyof Theme ?? 'white'][500 as never]};
      }
    `;
  }};

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem;
  &:hover {
    ${({ toolTipTitle }) => {
    return (
      toolTipTitle &&
      css`
          &::after {
            font-size: ${font.sizes.xs};
            content: '${toolTipTitle ?? ''}';
            width: max-content;
            position: absolute;
            top: -2.5rem;
            background-color: ${theme.grey[500]};
            font-weight: ${font.weights.bold};
            color: ${theme.white[100]};
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
          }
        `
    );
  }}
  }
`;


