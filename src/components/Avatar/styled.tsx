import styled from 'styled-components';
import { AvatarProps } from 'src/types';
import { theme } from 'src/utils/variables';

export const Avatar = styled.img<AvatarProps>`
  display: block;
  border-radius: 50%;
  max-width: ${(props) => `${props.size}px` || '50px'};
  object-fit: cover;
  background-color: ${theme.grey[300]};
  width: ${(props) => `${props.size}px` || '50px'};
  height: ${(props) => `${props.size}px` || '50px'};
`;
