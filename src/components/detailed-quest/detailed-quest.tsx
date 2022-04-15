import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import {ReactComponent as IconClock} from 'assets/img/icon-clock.svg';
import {ReactComponent as IconPerson} from 'assets/img/icon-person.svg';
import {ReactComponent as IconPuzzle} from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchQuest } from 'store/api-actions';
import { getQuest } from 'store/selectors';
import { hardLvls } from 'settings/quest-hard-lvls';
import LoadingScreen from '../loading-screen/loading-screen';


const DetailedQuest = () => {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const quest = useAppSelector(getQuest);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  useEffect(() => {
    dispatch(fetchQuest(id));
  }, [dispatch, id]);

  if (quest===undefined) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${quest.coverImg}`}
          alt={`Квест ${quest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>приключения</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${quest.duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${quest.peopleCount[0]}-${quest.peopleCount[1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{hardLvls[quest.level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
