import styled from 'styled-components';
import { InputBase } from '../Input/styled';
import { IconButton } from '../Button';
import { Row } from '../Flex';

export const PasswordInputBase = styled(InputBase)`
  padding-right: 2.85rem;
`;

export const PasswordToggleButton = styled(IconButton)`
  height: 100%;
  width: 2.75rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  position: absolute;
  right: 0;
`;

export const PasswordContainer = styled(Row)`
  position: relative;
`;
