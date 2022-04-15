import {ReactComponent as IconAllQuests} from 'assets/img/icon-all-quests.svg';
import {ReactComponent as IconAdventures} from 'assets/img/icon-adventures.svg';
import {ReactComponent as IconHorrors} from 'assets/img/icon-horrors.svg';
import {ReactComponent as IconMystic} from 'assets/img/icon-mystic.svg';
import {ReactComponent as IconDetective} from 'assets/img/icon-detective.svg';
import {ReactComponent as IconScifi} from 'assets/img/icon-scifi.svg';
import {ReactComponent as IconPerson} from 'assets/img/icon-person.svg';
import {ReactComponent as IconPuzzle} from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { questTypes, themeNames } from 'settings/quest-themes';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { getActiveTheme, getQuestsByTheme } from 'store/selectors';
import { ApiRoute } from 'settings/api-routes';
import { generatePath, useLocation, useParams } from 'react-router-dom';
import { hardLvls } from 'settings/quest-hard-lvls';
import { QuestTheme } from 'settings/quest-themes';
import { changeTheme } from 'store/interface-process/interface-process';
import { AppRoute } from 'settings/app-routes';

const themeIcons = {
  [QuestTheme.AllQuests]: <IconAllQuests />,
  [QuestTheme.Adventures]: <IconAdventures />,
  [QuestTheme.Horror]: <IconHorrors />,
  [QuestTheme.Mystic]: <IconMystic />,
  [QuestTheme.Detective]: <IconDetective />,
  [QuestTheme.SciFi]: <IconScifi />,
}

const QuestsCatalog = () => {
  const dispatch = useAppDispatch();

  const activeTheme = useAppSelector(getActiveTheme);
  const quests = useAppSelector(getQuestsByTheme);

  const handleOnThemeClick = (theme: string) => dispatch(changeTheme(theme));

 // isActive - пока хрен знает как пофиксить типы

  return (
    <>
      <S.Tabs>
        {
          questTypes.map((type) =>
            (
            <S.TabItem key={type}>
              <S.TabBtn  isActive={activeTheme === type ?  true : false} onClick={() => handleOnThemeClick(type)} >
                {themeIcons[type]}
                <S.TabTitle>{themeNames[type]}</S.TabTitle>
              </S.TabBtn>
            </S.TabItem>
            ),
          )
        }
      </S.Tabs>

      <S.QuestsList>
        {
          quests.map(quest =>
            (
              <S.QuestItem key={quest.id}>
                <S.QuestItemLink to={generatePath(AppRoute.Quest, {id: `${quest.id}`})}>
                  <S.Quest>
                    <S.QuestImage
                      src={`/${quest.previewImg}`}
                      width="344"
                      height="232"
                      alt={`квест ${quest.title}`}
                    />

                    <S.QuestContent>
                      <S.QuestTitle>{quest.title}</S.QuestTitle>

                      <S.QuestFeatures>
                        <S.QuestFeatureItem>
                          <IconPerson />
                          {`${quest.peopleCount[0]}-${quest.peopleCount[1]} чел`}
                        </S.QuestFeatureItem>
                        <S.QuestFeatureItem>
                          <IconPuzzle />
                          {hardLvls[quest.level]}
                        </S.QuestFeatureItem>
                      </S.QuestFeatures>
                    </S.QuestContent>
                  </S.Quest>
                </S.QuestItemLink>
              </S.QuestItem>
            ),
          )
        }
      </S.QuestsList>
    </>
  )

};

export default QuestsCatalog;
