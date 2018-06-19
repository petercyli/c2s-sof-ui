/*
 *
 * Context actions
 *
 */

import {
  CLEAR_ALL,
  CLEAR_ORGANIZATION,
  CLEAR_PATIENT,
  CLEAR_USER,
  GET_ORGANIZATION,
  GET_ORGANIZATION_ERROR,
  GET_PATIENT,
  GET_PATIENT_ERROR,
  GET_USER_CONTEXT_ERROR,
  INITIALIZE_CONTEXT,
  REFRESH_ORGANIZATION,
  REFRESH_PATIENT,
  SET_ORGANIZATION,
  SET_PATIENT,
  SET_USER,
} from './contextConstants';


export function initializeContext(userAuthContext, patientId, organizationId) {
  return {
    type: INITIALIZE_CONTEXT,
    userAuthContext,
    patientId,
    organizationId,
  };
}

export function setPatient(patient) {
  return {
    type: SET_PATIENT,
    patient,
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function setOrganization(organization) {
  return {
    type: SET_ORGANIZATION,
    organization,
  };
}

export function clearPatient() {
  return {
    type: CLEAR_PATIENT,
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER,
  };
}

export function clearOrganization() {
  return {
    type: CLEAR_ORGANIZATION,
  };
}

export function clearAll() {
  return {
    type: CLEAR_ALL,
  };
}

export function refreshPatient() {
  return {
    type: REFRESH_PATIENT,
  };
}

export function refreshOrganization() {
  return {
    type: REFRESH_ORGANIZATION,
  };
}

export function getUserContextError(error) {
  return {
    type: GET_USER_CONTEXT_ERROR,
    error,
  };
}

export function getPatient(logicalId) {
  return {
    type: GET_PATIENT,
    logicalId,
  };
}

export function getPatientError(error) {
  return {
    type: GET_PATIENT_ERROR,
    error,
  };
}

export function getOrganization(logicalId) {
  return {
    type: GET_ORGANIZATION,
    logicalId,
  };
}

export function getOrganizationError(error) {
  return {
    type: GET_ORGANIZATION_ERROR,
    error,
  };
}