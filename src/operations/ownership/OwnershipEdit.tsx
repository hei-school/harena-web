import {
  Button,
  DateInput,
  Edit,
  number,
  NumberInput,
  SimpleForm,
  TextInput,
  TopToolbar,
  useRedirect,
} from 'react-admin';
import { RemoveRedEye } from '@mui/icons-material';
import { Possession } from '@harena-com/typescript-client';
import { DeviseInputs, DeviseType, getDeviseValue } from './OwnershipCreate';
import { useParams } from 'react-router-dom';
import { required } from '@/operations/common/input-validator';

export const PossessionEdit = () => {
  const { patrimoineNom, possessionNom } = useParams();
  const redirect = useRedirect();

  const goToShow = () => {
    redirect(`/patrimoines/${patrimoineNom}/possessions/${possessionNom}/show`);
  };

  return (
    <Edit
      id={possessionNom}
      resource="possessions"
      mutationOptions={{ meta: { patrimoineNom } }}
      actions={
        <TopToolbar>
          <Button
            startIcon={<RemoveRedEye />}
            size="medium"
            onClick={goToShow}
            label="Show"
          />
        </TopToolbar>
      }
      transform={(possession: Possession & { devise: DeviseType }) => ({
        ...possession,
        devise: getDeviseValue(possession.devise),
      })}
      redirect={false}
    >
      <SimpleForm>
        <TextInput fullWidth source="nom" label="Nom" validate={required()} />
        <DateInput fullWidth source="t" label="Date T" validate={required()} />
        <NumberInput
          fullWidth
          source="valeur_comptable"
          label="Valeur Comptable"
          validate={[required(), number()]}
        />
        <DeviseInputs source="devise" />
      </SimpleForm>
    </Edit>
  );
};
