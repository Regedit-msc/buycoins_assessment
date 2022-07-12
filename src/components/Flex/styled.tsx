import styled from 'styled-components';
import { BaseFlexProps } from 'src/types';

export const BaseFlex = styled.div<BaseFlexProps>`
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'unset'};
  box-sizing: border-box;
  gap: ${(props) => props.gap || '0'}rem;
  padding: ${(props) => props.padding || '0rem'};
  margin: ${(props) => props.margin || '0rem'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
`;

export const Row = styled(BaseFlex)`
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const Column = styled(BaseFlex)`
  flex-direction: column;
`;



export const FullColumn = styled(Row)<{
  maxWidth?: string;
}>`
 max-width: ${(props) => props.maxWidth || '100%'};
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }
`;
