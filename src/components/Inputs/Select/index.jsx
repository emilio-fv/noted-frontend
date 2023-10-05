import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';

const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-outlined': {
    color: '#dbdbdb'
  },
  '& fieldset': {
    borderColor: theme.palette.input.border.main,
  },
  '& .MuiSvgIcon-root': {
    color: '#dbdbdb'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.input.border.hover
  },
}));


const SelectInput = ({ sx, label=null, value, handleChange, categories }) => {
  return (
    <FormControl 
      fullWidth 
      size='small' 
      sx={{ ...sx }}
    >
      <InputLabel id='select-input-label'>{label}</InputLabel>
      <StyledSelect 
        labelId='select-input-label'
        id='select-input'
        value={value}
        label={label}
        variant='outlined'
        onChange={handleChange}
      >
        {categories.map((category) => {
          return (
            <MenuItem 
              value={category.value}
            >
              {category.label}
            </MenuItem>
          )
        })}
      </StyledSelect>
    </FormControl>
  )
};

export default SelectInput;