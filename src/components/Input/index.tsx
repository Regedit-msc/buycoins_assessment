import { InputProps } from 'src/types';
import { Column, Row } from '../Flex';
import { InputBase } from './styled';
import { InputLabel } from '../InputLabel';

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <Column>
      {label && <InputLabel>{label}</InputLabel>}
      <Row>
        <InputBase
          {...props}
          autoComplete="off"
        />
      </Row>
    </Column>
  );
};
