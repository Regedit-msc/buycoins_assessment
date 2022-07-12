import { useState } from 'react';
import { VisibleIcon, InvisibleIcon } from 'src/assets/icons';
import { InputProps } from 'src/types';
import {
  PasswordToggleButton,
  PasswordInputBase,
  PasswordContainer,
} from './styled';
import { Column } from '../Flex';
import { InputLabel } from '../InputLabel';

export const PasswordInput: React.FC<InputProps> = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Column>
      {label && <InputLabel>{label}</InputLabel>}
      <PasswordContainer>
        <PasswordInputBase
          type={showPassword ? 'text' : 'password'}
          {...props}
        />
        <PasswordToggleButton
          onClick={() => setShowPassword(!showPassword)}
          variant="text"
        >
          {showPassword ? <VisibleIcon /> : <InvisibleIcon />}
        </PasswordToggleButton>
      </PasswordContainer>
    </Column>
  );
};
