import { theme, font } from 'src/utils/variables';
import styled from 'styled-components';

export const TextAreaBase = styled.textarea`
  width: 100%;
  border: 0.5px solid #e8e8e8;
  background-color: none;
  padding: 0.4rem 1.5rem;
  border-radius: 0.2rem;
  font-family: 'Roboto', sans-serif;
  margin-top: 0;
  outline: 0;
  font-size: ${font.sizes.sm};
  font-weight: ${font.weights.semibold};
  color: ${theme.grey[500]};
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    color: ${theme.grey[500]};
    font-weight: ${font.weights.bold};
  }
  :focus {
    border: 2px solid ${theme.black[200]};
  }
  :hover {
    border: 1px solid ${theme.black[100]};
  }
`;
