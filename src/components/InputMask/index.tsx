/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import InputMask, { Props as InputProps } from 'react-input-mask';

import { Container, InputContainer, Error } from './styles';

interface Props extends InputProps {
  name: string;
  isRegisterInput?: boolean;
  containerStyle?: object;
  labelText?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputPhone: React.FC<Props> = ({
  name,
  containerStyle,
  icon: Icon,
  labelText,
  isRegisterInput = false,
  ...rest
}) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      {labelText && <span>{`${labelText}:`}</span>}

      <InputContainer
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
        style={containerStyle}
        isRegisterInput={isRegisterInput}
      >
        {Icon && <Icon size={20} />}

        <InputMask
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </InputContainer>
    </Container>
  );
};

export default InputPhone;
