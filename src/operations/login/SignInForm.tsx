import { Button, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { HR_COLOR } from '@/HrTheme';
import { grey } from '@mui/material/colors';
import { BpFormField } from '@/operations/login/FormField';

export const lightGreyColor = grey[100];
export const darkGreyColor = grey[800];
export const whiteColor = '#ffffff';

export const SignInForm = () => {
  const formState = useForm({
    mode: 'all',
    defaultValues: { username: '', password: '' },
  });

  //const navigate = useNavigate();

  // Fonction pour mettre à jour la largeur de la fenêtre lors du redimensionnement
  const updateWindowWidth = () => {};

  // Utilisez useEffect pour ajouter un gestionnaire d'événements de redimensionnement
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    // Nettoyez le gestionnaire d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <FormProvider {...formState}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          color: lightGreyColor,
          minWidth: '30vh',
        }}
      >
        <Typography
          variant="h5"
          fontWeight={'bold'}
          gutterBottom
          mt={1}
          color={HR_COLOR[30]}
        >
          Bienvenue !
        </Typography>
        <BpFormField
          name="username"
          label="Votre email"
          variant={'outlined'}
          style={{
            marginBlock: 3,
            width: 300,
            marginTop: 10,
          }}
        />
        <BpFormField
          name="password"
          type="password"
          label="Mot de passe"
          variant={'outlined'}
          style={{
            marginBlock: 3,
            width: 300,
            marginTop: 10,
            marginBottom: 5,
          }}
        />
        <Button
          id="login"
          style={{ marginTop: '0.5rem' }}
          type="submit"
          sx={{
            'textTransform': 'none',
            'bgcolor': HR_COLOR[30],
            'color': whiteColor,
            'width': '300px',
            'height': '40px',
            '&:hover': {
              background: HR_COLOR[50],
              opacity: 1,
            },
            '&:disabled': {
              background: darkGreyColor,
              color: whiteColor,
            },
          }}
        >
          Se connecter
        </Button>

        <Divider />
        <Divider />
      </form>
    </FormProvider>
  );
};
