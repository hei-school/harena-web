import { Box } from '@mui/material';

import { grey } from '@mui/material/colors';
import HrBackgroundImage from '../../assets/harena-logo.png';
import Spline from '@splinetool/react-spline';

export const lightGreyColor = grey[100];

// @ts-ignore
const BpLoginPageLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: lightGreyColor,
        height: '100vh',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {
        <img
          src={HrBackgroundImage}
          style={{
            position: 'absolute',
            top: '3%',
            left: '2%',
            width: '120px',
          }}
          alt="Bienvenue sur BPartners !"
        />
      }
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          bgcolor: lightGreyColor,
          height: '100vh',
          alignItems: 'center',
          overflow: 'hidden',
          flexShrink: 0,
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
      <Box
        width={{ md: '55%', sm: '0%', xs: '0%' }}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          height: '110vh',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <Spline
          scene="https://prod.spline.design/LK8ejaUxl227aam7/scene.splinecode"
          style={{ width: 570, height: 570, marginLeft: 30, marginTop: 100 }}
        />
      </Box>
    </Box>
  );
};

export default BpLoginPageLayout;
