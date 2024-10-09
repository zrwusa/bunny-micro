import { BlResponseCreator } from 'bunny-common';
import { CONTROLLER_BL, SERVICE_BL } from '../constants';

export const controllerResponseCreator = new BlResponseCreator(
  CONTROLLER_BL,
  'bunny-micro',
  'controller',
);

export const serviceResponseCreator = new BlResponseCreator(
  SERVICE_BL,
  'bunny-micro',
  'service',
);