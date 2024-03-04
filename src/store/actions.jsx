import { createAction } from '@reduxjs/toolkit';

export const toggleCheckbox = createAction('toggleCheckbox');
export const toggleAllCheckboxes = createAction('toggleAllCheckboxes');
export const setAllCheckboxes = createAction('setAllCheckboxes');

export const setOnlineStatus = createAction('network/setOnlineStatus');
export const setOfflineStatus = createAction('network/setOfflineStatus');

export const toggleActive = createAction('toggleActive');
