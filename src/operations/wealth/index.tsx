import { PatrimoineList } from './WealthList';
import { PatrimoineShow } from './WealthShow';
import { PatrimoineCreate } from './WealthCreate';
import { UI } from '../common/utils/types';
import { PatrimoineEdit } from './WealthEdit';

export const PATRIMOINE_UI: UI = {
  list: PatrimoineList,
  show: PatrimoineShow,
  create: PatrimoineCreate,
  edit: PatrimoineEdit,
  recordRepresentation: 'nom',
};
