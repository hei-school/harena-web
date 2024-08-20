import { PatrimonyList } from './PatrimonyList';
import { PatrimoineShow } from './PatrimonyShow';
import { PatrimoineCreate } from './PatrimonyCreate';
import { UI } from '../common/utils/types';
import { PatrimoineEdit } from './PatrimonyEdit';

export const PATRIMONY_UI: UI = {
  list: PatrimonyList,
  show: PatrimoineShow,
  create: PatrimoineCreate,
  edit: PatrimoineEdit,
  recordRepresentation: 'nom',
};
