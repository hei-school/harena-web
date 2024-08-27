import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const textFieldStyle = {
  marginBlock: 3,
  width: 300,
};

// @ts-ignore
export const BpFormField = (props) => {
  const {
    name,
    label,
    type,
    validate,
    style,
    shouldValidate,
    variant,
    ...others
  } = props;
  const {
    register,
    formState: { errors },
    setError,
  } = useFormContext();
  const record = useWatch();
  const [visibility, setVisibility] = useState(false);
  const toggleVisibility = () => setVisibility((e) => !e);

  const passwordType = visibility ? 'text' : 'password';

  const dateProps = (type || '').includes('date')
    ? { InputLabelProps: { shrink: true } }
    : {};

  const errorStyle = errors[name]
    ? { error: true, helperText: errors[name].message }
    : { error: false };

  // if there is an specific validation other than required, it will used
  // and if shouldValidate is false, no validation will used
  const validationType = validate
    ? // @ts-ignore
      { validate: (e) => validate(e, record, setError) }
    : { required: 'Ce champ est requis' };

  const customRegister = register(
    name,
    // @ts-ignore
    shouldValidate !== false && validationType
  );

  return (
    <TextField
      sx={
        type === 'password'
          ? {
              '.MuiInputBase-root': {
                padding: 0,
              },
              '.MuiIconButton-root': {
                position: 'absolute',
                right: '0.4rem',
              },
            }
          : {}
      }
      label={label}
      {...dateProps}
      {...errorStyle}
      {...others}
      variant={variant ?? 'filled'}
      {...customRegister}
      data-testid={`${name}-field-input`}
      type={type === 'password' ? passwordType : type}
      style={style || textFieldStyle}
      value={record[name] || ''}
      color={'secondary'}
      InputProps={{
        endAdornment: type === 'password' && (
          <IconButton
            aria-label="toggle password visibility"
            onClick={toggleVisibility}
          >
            {visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        ),
      }}
    />
  );
};
