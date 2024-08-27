import { PatrimonyList } from './PatrimonyList';
import { PatrimonyShow } from './PatrimonyShow';
import { PatrimoineCreate } from './PatrimonyCreate';
import { UI } from '../common/utils/types';
import { PatrimoineEdit } from './PatrimonyEdit';

export const PATRIMONY_UI: UI = {
  list: PatrimonyList,
  show: PatrimonyShow,
  create: PatrimoineCreate,
  edit: PatrimoineEdit,
  recordRepresentation: 'nom',
};
