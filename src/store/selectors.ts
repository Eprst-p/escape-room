import {State} from '../types/state'
// import {SortOption} from '../settings/sort-options';
// import {sortByLowerPrice, sortByHigherPrice, sortByTopRate} from '../components/main-screen/sort-variants';
// import {createSelector} from 'reselect';
// import {sortByNewerDate} from '../components/property-screen/sort-commets';
// import {CommentsAmount} from '../settings/comments-settings';


export const getQuests = (state:State) => state.DATA.quests;
