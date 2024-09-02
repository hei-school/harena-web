import {
  Button,
  DateField,
  FunctionField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';
import { PossessionTypeField } from './components';
import { ArrowBack, Create as EditIcon } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { renderMoney } from '../common/utils/typo';
import { ShowField } from './OwnershipCreate';
import {
  Possession,
  PossessionAvecTypeTypeEnum,
} from '@harena-com/typescript-client';
import { Box } from '@mui/material';
import { IMPORT_BUTTON_STYLE } from '@/operations/patrimony/PatrimonyList';

const PossessionShowActions = () => {
  const { patrimoineNom, possessionNom } = useParams();

  return (
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
        }}
      >
        <Button
          href={`/#/patrimoines/${patrimoineNom}/show`}
          label={'Retour'}
          startIcon={<ArrowBack />}
          sx={IMPORT_BUTTON_STYLE}
        />
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
        <Button
          href={`/patrimoines/${patrimoineNom}/possessions/${possessionNom}/edit`}
          startIcon={<EditIcon />}
          label="Modifier"
          variant="contained"
          size="medium"
          sx={IMPORT_BUTTON_STYLE}
        />
      </Box>
    </Box>
  );
};

export const PossessionShow = () => {
  const { patrimoineNom, possessionNom } = useParams();

  return (
    <Show
      id={possessionNom}
      resource="possessions"
      queryOptions={{ meta: { patrimoineNom } }}
      actions={<PossessionShowActions />}
    >
      <SimpleShowLayout>
        <TextField source="nom" label="Nom" />
        <DateField source="t" label="Date T" />
        <FunctionField
          render={(possession) =>
            renderMoney(possession.valeur_comptable, possession.devise)
          }
          label="Valeur Comptable"
        />
        <PossessionTypeField />
        <ShowField
          shouldShow={(
            record: Possession & { type: PossessionAvecTypeTypeEnum }
          ) => record.type === 'ARGENT'}
        >
          <TextField source="typeEx" />
        </ShowField>
      </SimpleShowLayout>
    </Show>
  );
};
