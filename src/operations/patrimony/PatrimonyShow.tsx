import {
  DateField,
  EditButton,
  Show,
  SimpleShowLayout,
  TabbedShowLayout,
  TextField,
} from 'react-admin';
import { PossessionList } from '@/operations/ownership';
import { useParams } from 'react-router-dom';
import { ProjectionShow } from '../projection/ProjectionShow';
import { Box } from '@mui/material';
import { HR_COLOR } from '@/HrTheme';
import { IMPORT_BUTTON_STYLE } from '@/operations/patrimony/PatrimonyList';

export const PatrimonyShow = () => {
  const { id } = useParams();

  return (
    <>
      <Show resource="patrimoines" id={id} actions={false}>
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
            <TextField
              source="nom"
              sx={{
                alignItems: 'center',
                color: HR_COLOR[30],
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            />
          </Box>
          <Box
            sx={{
              width: '50%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginRight: 2,
            }}
          >
            <EditButton
              data-testid="edit-button"
              label="Modifier"
              sx={IMPORT_BUTTON_STYLE}
            />
          </Box>
        </Box>
        <SimpleShowLayout>
          <DateField source="t" label="Date T" />
          <TextField source="possesseur.nom" label="Possesseur" />
          <TextField source="valeur_comptable" label="Valeur Comptable" />
        </SimpleShowLayout>
        <TabbedShowLayout>
          <TabbedShowLayout.Tab
            data-testid="patrimoine-possession-list"
            label="Posssession"
            path=""
          >
            <PossessionList patrimoineNom={id!} />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab
            data-testid="patrimoine-projection-list"
            label="Projection"
            path="projection"
          >
            <ProjectionShow />
          </TabbedShowLayout.Tab>
        </TabbedShowLayout>
      </Show>
    </>
  );
};
