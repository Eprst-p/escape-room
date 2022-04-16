import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../settings/app-route';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

