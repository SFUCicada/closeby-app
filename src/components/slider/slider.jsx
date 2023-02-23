import { CenterFocusStrong, CenterFocusWeakTwoTone } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme } from '@mui/material/styles';
import * as React from 'react';

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export default function Slider2() {
  
  const theme = createTheme({
    palette: {
      primary: {
        light: '#7704ba',
        main: '#7704ba',
        dark: '#7704ba',
        contrastText: '#fff',
      },
      secondary: {
        light: '#7704ba',
        main: '#7704ba',
        dark: '#7704ba',
        contrastText: '#000',
      },
    },
  });

  const [value1, setValue1] = React.useState([5, 15]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:20, paddingBottom:0}}>
    <div>
    <Box sx={{ width: 300}}>
      <Slider className="distance-slider" 
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        color="secondary"
      />
      <Slider className="time-slider"
        getAriaLabel={() => 'Minimum distance shift'}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        color='secondary'
      />
    </Box>
    </div>
    </Box>
  );
}