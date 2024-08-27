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
        <img
          src="../../assets/harena-logo.png"
          width={50}
          height={50}
          alt="Bienvenue sur BPartners !"
        />
        <Typography variant="h5" gutterBottom mt={1} color={'black'}>
          Bienvenue !
        </Typography>
        <BpFormField name="username" label="Votre email" />
        <BpFormField name="password" type="password" label="Mot de passe" />
        <Button
          id="login"
          style={{ marginTop: '0.5rem' }}
          type="submit"
          sx={{
            'textTransform': 'none',
            'bgcolor': 'rgba(156, 37, 90, 1)',
            'color': whiteColor,
            'width': '300px',
            '&:hover': {
              background: HR_COLOR[5],
              opacity: 1,
            },
            '&:disabled': {
              background: darkGreyColor,
              bgcolor: whiteColor,
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
