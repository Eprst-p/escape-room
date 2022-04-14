import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import React from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import { getAllQuests } from '../../store/selectors';


const HomePage = () => {

  const quests = useAppSelector(getAllQuests);
  console.log(quests);

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  )
};

export default HomePage;
