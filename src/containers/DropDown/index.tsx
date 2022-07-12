import { useRef, useState } from 'react';
import { Text, Card } from 'src/components';
import { MoreHorizon } from 'src/assets/icons';
import { useOnClickOutside } from 'src/utils/hooks';
import { DropDownData } from 'src/types';
import { theme } from 'src/utils/variables';
// import { useModal } from 'src/state';
import { DropDownContainer, DropDownItem, DropDownSection } from './styled';

export const DropDown = ({
  dataSet,
  rowData,
  isRight,
}: {
  dataSet: DropDownData[];
  rowData: Record<string, unknown>;
  isRight?: boolean | undefined;
}) => {
  const [show, setShow] = useState(false);
  const dropDownRef = useRef(null);
  useOnClickOutside(dropDownRef, () => setShow(false));
  return (
    <DropDownSection>
      <Card
        onClick={() => {
          setShow(!show);
        }}
        radius="100%"
        align="center"
        display="flex"
        justify="center"
        padding="0px"
        width="30px"
        height="30px"
        color={theme.grey[150]}
        boxShadow="none"
      >
        <MoreHorizon />
      </Card>
      {show && (
        <DropDownContainer isRight={isRight} gap={1} ref={dropDownRef}>
          {dataSet.map(({ icon: Icon, ...d }, i) => (
            <DropDownItem
              key={i}
              onClick={() => {
                setShow(false);
                if (typeof d.onClick !== 'undefined') {
                  d.onClick(rowData);
                }
              }}
              align="center"
              gap={2}
            >
              {Icon && <Icon />}
              <Text color="black">{d.label}</Text>
            </DropDownItem>
          ))}
        </DropDownContainer>
      )}
    </DropDownSection>
  );
};
