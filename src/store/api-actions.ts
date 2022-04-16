import {createAsyncThunk} from '@reduxjs/toolkit';
import { QuestType, QuestTypes } from '../types/quest-type';
import { ApiRoute } from '../settings/api-route';
import { loadQuest, loadQuests } from './data-process/data-process';
import { api, store } from '.';
import { generatePath } from 'react-router-dom';
import { OrderType } from '../types/order-type';
import { errorHandle } from '../services/error-handle';
import { setBookingModalStatus } from './interface-process/interface-process';
import { redirectToRoute } from './action';
import { AppRoute } from '../settings/app-route';

const setPromiseWaiter = (timer = 300) => new Promise(resolve => setTimeout(resolve, timer));

export const fetchQuests = createAsyncThunk(
  'data/loadQuests',
  async () => {
    try {
      const {data} = await api.get<QuestTypes>(ApiRoute.Quests);
      await setPromiseWaiter(500);
      store.dispatch(loadQuests(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchQuest = createAsyncThunk(
  'data/loadQuest',
  async (id: number) => {
    try {
      const {data} = await api.get<QuestType>(generatePath(ApiRoute.Quest, {id: `${id}`}));
      await setPromiseWaiter();
      store.dispatch(loadQuest(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const orderAction = createAsyncThunk(
  'interface/orderAction',
  async (order: OrderType) => {
    try {
      await api.post<OrderType>(ApiRoute.Orders, order);
      await setPromiseWaiter();
      store.dispatch(setBookingModalStatus(false))
    } catch (error) {
      errorHandle(error);
      store.dispatch(setBookingModalStatus(true))
    }
  },
);


