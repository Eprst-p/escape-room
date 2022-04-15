import {createAsyncThunk} from '@reduxjs/toolkit';
import { QuestType, QuestTypes } from '../types/quest-type';
import { ApiRoute } from '../settings/api-routes';
import { loadQuest, loadQuests } from './data-process/data-process';
import { api, store } from '.';
import { generatePath } from 'react-router-dom';
import { OrderType } from '../types/order-type';

const setPromiseWaiter = (timer = 300) => new Promise(resolve => setTimeout(resolve, timer));

export const fetchQuests = createAsyncThunk(
  'data/loadQuests',
  async () => {
    try {
      const {data} = await api.get<QuestTypes>(ApiRoute.Quests);
      await setPromiseWaiter(500);
      store.dispatch(loadQuests(data));
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchQuest = createAsyncThunk(
  'data/loadQuest',
  async (id: number) => {
    try {
      const {data} = await api.get<QuestType>(generatePath(ApiRoute.Quest, {id: `${id}`}));
      await setPromiseWaiter(500);
      store.dispatch(loadQuest(data));
    } catch (error) {
      console.log(error);
    }
  },
);

export const orderAction = createAsyncThunk(
  'interface/orderAction',
  async (order: OrderType) => {
    try {
      await api.post<OrderType>(ApiRoute.Orders, order);
      await setPromiseWaiter();
    } catch (error) {
      console.log(error);
    }
  },
);


