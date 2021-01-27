import React, { useRef, useEffect, useMemo } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';

import { useField } from '@unform/core';
import { Container } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  labelTitle: string;
}

const Select: React.FC<Props> = ({ name, labelTitle, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  const fieldDefaultValue = useMemo(() => {
    return { label: defaultValue, defaultValue };
  }, [defaultValue]);

  return (
    <Container>
      <p>{labelTitle}</p>
      <ReactSelect
        defaultValue={defaultValue && fieldDefaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        placeholder="Selecione..."
        {...rest}
      />
    </Container>
  );
};
export default Select;
