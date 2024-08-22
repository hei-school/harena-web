import {
  CreateButton,
  Datagrid,
  DateField,
  List,
  TextField,
} from 'react-admin';
import { Box } from '@mui/material';

export const IMPORT_BUTTON_STYLE = {
  width: '8rem',
  paddingBlock: 1,
};

export const PatrimonyList = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: 1,
          border: 0,
          height: 60,
          display: 'flex',
          justifyContent: 'flex-start',
          paddingLeft: 2,
          alignItems: 'center',
        }}
      >
        <CreateButton
          data-testid="create-button"
          label="Créer"
          sx={IMPORT_BUTTON_STYLE}
        />
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
