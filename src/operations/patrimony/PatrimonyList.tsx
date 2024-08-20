import {
  CreateButton,
  Datagrid,
  DateField,
  List,
  TextField,
} from 'react-admin';
import { Card, CardContent } from '@mui/material';
import { HR_COLOR } from '@/HrTheme';

export const PatrimonyList = () => {
  return (
    <>
      <Card
        sx={{
          marginTop: 1,
          border: 0,
          background: HR_COLOR['background'],
          display: 'flex',
        }}
      >
        <CardContent>
          <CreateButton data-testid="create-button" />
        </CardContent>
      </Card>
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
