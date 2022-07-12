import { TextAreaProps } from 'src/types';
import { Column, Row } from '../Flex';
import { TextAreaBase } from './styled';
import { InputLabel } from '../InputLabel';

export const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
  return (
    <Column>
      {label && <InputLabel>{label}</InputLabel>}
      <Row>
        <TextAreaBase {...props} autoComplete="new-password" />
      </Row>
    </Column>
  );
};
