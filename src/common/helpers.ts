// src/common/helpers.ts
import { CONTROLLER_BL, SERVICE_BL } from './constants';
import {
  ControllerResponseCreator,
  ServiceResponseCreator,
} from 'bunny-common';

export const createServiceResponseHandlers = new ServiceResponseCreator(
  SERVICE_BL,
).createHandlers;

export const createControllerResponseHandlers = new ControllerResponseCreator(
  CONTROLLER_BL,
).createHandlers;
