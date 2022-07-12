import { useState, useRef } from 'react';
import { Paragraph, Row, Column, Chip } from 'src/components';
import { theme } from 'src/utils/variables';
import { useOnClickOutside } from 'src/utils/hooks';
import { MultiSelectContainer, MultiSelectOptionsContainer, MultiSelectWrapper, MultiSelectInput } from './styled';

type MultiSelectOption = {
  value: string | number;
  label: string;
};

export const MultiSelect = ({
  placeholder = '',
  name = '',
  options,
  onSelectItem,
  initData,
}: {
  placeholder?: string;
  name?: string;
  options: MultiSelectOption[];
  initData?: MultiSelectOption[];
  onSelectItem?: (values: MultiSelectOption[]) => void;
}) => {
  const suggestionRef = useRef(null);
  const [newOptions, setNewOptions] = useState<MultiSelectOption[]>(
    options ?? [],
  );
  const [selectedItems, setSelectedItems] = useState<MultiSelectOption[]>(
    initData ?? [],
  );
  const [suggestionVisible, setSuggestionVisible] = useState(false);

  useOnClickOutside(suggestionRef, () => {
    setNewOptions([
      ...options.filter((i) => {
        return selectedItems.findIndex((it) => it.value === i.value) === -1;
      }),
    ]);
    setSuggestionVisible(false);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!suggestionVisible) {
      setSuggestionVisible(true);
    }
    const { value } = e.target;
    setNewOptions([
      ...options.filter(
        (i) =>
          i.label.toLowerCase().match(value.toLowerCase()) &&
          selectedItems.findIndex((it) => it.value === i.value) === -1,
      ),
    ]);
  };
  return (
    <MultiSelectContainer>
      <MultiSelectWrapper padding="0.5rem" gap={1} align="center">
        {selectedItems.length < 1 ? (
          <></>
        ) : (
          <Row
            gap={1}
            style={{
              flexWrap: 'wrap',
            }}
          >
            {selectedItems.map((it, i) => {
              return (
                <Chip
                  key={i}
                  color={theme.white[200]}
                  background={theme.green[500]}
                  type="round"
                  onClick={() => {
                    const newSelectedItems = selectedItems.filter(
                      (item) => item.value !== it.value,
                    );
                    setSelectedItems([
                      ...selectedItems.filter(
                        (item) => item.value !== it.value,
                      ),
                    ]);
                    setNewOptions([
                      ...options.filter((itemI) => {
                        return (
                          newSelectedItems.findIndex(
                            (itm) => itm.value === itemI.value,
                          ) === -1
                        );
                      }),
                    ]);
                    if (!onSelectItem) return;
                    onSelectItem([
                      ...selectedItems.filter(
                        (item) => item.value !== it.value,
                      ),
                    ]);
                  }}
                >
                  {it.label}
                </Chip>
              );
            })}
          </Row>
        )}

        <MultiSelectInput
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
        />
      </MultiSelectWrapper>
      {suggestionVisible && (
        <MultiSelectOptionsContainer ref={suggestionRef}>
          <Column gap={1}>
            {newOptions.map((it, i) => {
              return (
                <Paragraph
                  key={i}
                  margin="0"
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setSelectedItems([...selectedItems, it]);
                    setNewOptions([
                      ...options.filter((item) => {
                        return item.value !== it.value;
                      }),
                    ]);
                    setSuggestionVisible(false);
                    if (!onSelectItem) return;
                    onSelectItem([...selectedItems, it]);
                  }}
                >
                  {it.label}
                </Paragraph>
              );
            })}
            {newOptions.length === 0 && <>No option found</>}
          </Column>
        </MultiSelectOptionsContainer>
      )}
    </MultiSelectContainer>
  );
};
