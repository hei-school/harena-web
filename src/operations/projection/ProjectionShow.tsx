import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Datagrid,
  DateInput,
  List,
  TextField,
  useListContext,
} from 'react-admin';
import { FlexBox } from '../common/components/box';
import { BASE_PATH } from '@/providers/utils';

export const ProjectionShow = () => {
  const { id } = useParams();

  return (
    <List
      title=""
      resource="fluxImpossibles"
      queryOptions={{
        meta: { patrimoineNom: id },
      }}
      filters={[
        <DateInput source="debut" label="Debut" alwaysOn />,
        <DateInput source="fin" label="Fin" alwaysOn />,
      ]}
      exporter={false}
    >
      <FlexBox sx={{ width: '100%' }}>
        <Graphe />
        <Datagrid bulkActionButtons={false}>
          <TextField source="nom" label="Nom" />
        </Datagrid>
      </FlexBox>
    </List>
  );
};

export const Graphe = () => {
  const { id } = useParams();
  const { filterValues } = useListContext();
  const [grapheUrl, setGrapheUrl] = useState("");

  useEffect(() => {
    const debut = filterValues.debut ? new Date(filterValues.debut) : new Date();
    const fin = filterValues.fin ? new Date(filterValues.fin) : new Date(debut.getFullYear() + 1, debut.getMonth(), debut.getDate());
    const url = `${BASE_PATH}/patrimoines/${id}/graphe?debut=${debut.toLocaleDateString()}&fin=${fin.toLocaleDateString()}`
    setGrapheUrl(url);
  }, [id, filterValues.debut, filterValues.fin]);

  return (
    <img
      src={grapheUrl}
      width="400px"
      style={{ display: 'block' }}
      height="300px"
    />
  );
};
