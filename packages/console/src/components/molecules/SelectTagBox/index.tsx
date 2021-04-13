import { useTheme } from '@emotion/react';
import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

type ValueObject = {
  label: string;
  value: string;
};

type Props = {
  value: string[];
  handleChangeValue: (value: string[]) => void;
};

const createOption = (label: string): ValueObject => ({
  label,
  value: label,
});

export const SelectTagBox: React.VFC<Props> = ({
  value: _value,
  handleChangeValue,
}) => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<ValueObject[]>(
    _value ? _value.map((v) => createOption(v)) : []
  );

  const handleChange = (value: any) => {
    setValue(value);
    handleChangeValue(value.map((v: any) => v.value));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!inputValue) return;

    const newValue = [...value, createOption(inputValue)];
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setValue(newValue);
        handleChangeValue(newValue.map((v) => v.value));
        setInputValue('');
        event.preventDefault();
    }
  };

  return (
    <CreatableSelect
      components={{
        DropdownIndicator: null,
      }}
      styles={{
        multiValue: (provided) => {
          return {
            ...provided,
            margin: '0 4px',
            backgroundColor: theme.color.primary,
            color: theme.color.white,
          };
        },
        multiValueLabel: (provided) => {
          return {
            ...provided,
            color: theme.color.white,
          };
        },
        input: (provided) => {
          return {
            ...provided,
            color: theme.color.white,
          };
        },
        control: (provided) => {
          return {
            ...provided,
            width: '25rem',
            padding: '6px 8px',
            color: theme.color.white,
            backgroundColor: theme.color.bgColor,
            border: 'none',
          };
        },
      }}
      inputValue={inputValue}
      isClearable
      isMulti
      menuIsOpen={false}
      onChange={handleChange}
      onInputChange={(v: string) => setInputValue(v)}
      onKeyDown={handleKeyDown}
      placeholder="タグを選択してください"
      value={value}
    />
  );
};
