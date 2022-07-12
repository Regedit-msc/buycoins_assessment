import { SelectProps } from 'src/types';
import { Column } from '../Flex';
import { InputLabel } from '../InputLabel';
import { SelectContainer, ArrowUp, SelectBase } from './styled';

export const Select: React.FC<SelectProps> = ({
  label,
  children,
  ...props
}) => {
  return (
    <Column>
      {label && <InputLabel>{label}</InputLabel>}
      <SelectContainer align="center">
        <SelectBase {...props}>{children}</SelectBase>
        <ArrowUp />
      </SelectContainer>
    </Column>
  );
};
