import { theme, font } from 'src/utils/variables';
import styled from 'styled-components';

export const InputBase = styled.input`
  width: 100%;
  border: 0.5px solid #e8e8e8;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  margin-top: 0;
  height: 3rem;
  outline: 0;
  font-size: ${font.sizes.base};
  font-weight: ${font.weights.normal};
  color: black;
  &::placeholder {
    color: #939391;
    font-weight: ${font.weights.normal};
    font-size: ${font.sizes.base};
  }
  :focus {
    border: 0.5px solid ${theme.blue[500]};
  }
  :hover {
    border: 0.5px solid ${theme.blue[500]};
  }
`;
