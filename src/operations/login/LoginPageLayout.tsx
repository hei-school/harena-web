import { Box, Typography } from '@mui/material';

import { grey } from '@mui/material/colors';

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
        width={{ md: '60%', sm: '0%', xs: '0%' }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          bgcolor: lightGreyColor,
          height: '100vh',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <Typography
          sx={{
            color: '#F5F5F5',
            fontStyle: 'italic',
            position: 'absolute',
            bottom: '6.5rem',
          }}
        >
          L'assistant intelligent qui accélère la croissance des artisans et
          indépendants.
        </Typography>
      </Box>
    </Box>
  );
};

export default BpLoginPageLayout;
