import {
  CreateButton,
  Datagrid,
  DateField,
  List,
  TextField,
} from 'react-admin';
import { Box, Typography } from '@mui/material';
import { HR_COLOR } from '@/HrTheme';

export const IMPORT_BUTTON_STYLE = {
  width: '8rem',
  paddingBlock: 1,
};

export const PatrimonyList = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: 5,
          marginBottom: 1,
          border: 0,
          height: 60,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '50%',
            paddingLeft: 2,
          }}
        >
          <Typography
            align="center"
            mr={12}
            variant="h6"
            fontWeight="bold"
            color={HR_COLOR[30]}
          >
            Liste des patrimoines
          </Typography>
        </Box>
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <CreateButton
            data-testid="create-button"
            label="Créer"
            sx={IMPORT_BUTTON_STYLE}
          />
        </Box>
      </Box>
      <List resource="patrimoines" actions={false}>
        <Datagrid bulkActionButtons={false}>
          <TextField source="nom" label="Nom" />
          <DateField source="t" label="Date T" />
          <TextField source="possesseur.nom" label="Possesseur" />
          <TextField source="valeur_comptable" label="Valeur Comptable" />
        </Datagrid>
      </List>
    </>
  );
};
