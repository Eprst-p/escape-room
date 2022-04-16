import * as S from './booking-modal.styled';
import {ReactComponent as IconClose} from 'assets/img/icon-close.svg';
import { useAppDispatch} from 'hooks/redux-hooks';
import { setBookingModalStatus } from 'store/interface-process/interface-process';
import { ESC_KEYS } from 'settings/key-downs';
import { OrderType } from '../../../../types/order-type';
import { orderAction } from '../../../../store/api-actions';
import { FormEvent, useMemo, useRef, useState } from 'react';


import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



type PropretyReviewProps = {
  peopleCount: number[];
}

const BookingModal = ({peopleCount} : PropretyReviewProps) => {
  const dispatch = useAppDispatch();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const peopleRef = useRef<HTMLInputElement | null>(null);
  const legalRef = useRef<HTMLInputElement | null>(null);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [peopleError, setPeopleError] = useState('');
  const [legalError, setLegalError] = useState('');
  const phoneRegExp = useMemo(() => new RegExp(/^[0-9]+$/), []);
  const minPeopleCount = peopleCount[0];
  const maxPeopleCount = peopleCount[1];

  const nameValidation = (name:string) => {
    if (name === '') {
      setNameError('Пожалуйста введите любое имя');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const phoneValidation = (phone:string) => {
    if (phone === '') {
      setPhoneError('Введите пожалуйста телефон');
      return false;
    }
    if (!phoneRegExp.test(`${phone}`.toLowerCase())) {
      setPhoneError('Телефон может содержать только цифры от 0 до 9');
      return false;
    }
    if (phone.length !== 10) {
      setPhoneError(`Телефон может состоять только строго из 10 цифр, сейчас - ${phoneRef.current.value.length}`);
      return false;
    }
    else {
      setPhoneError('');
      return true;
    }
  };

  const peopleValidation = (peopleCount:number) => {
    if (peopleCount === 0) {
      setPeopleError('Введите пожалуйста количество человек');
      return false;
    }
    if (peopleCount > maxPeopleCount) {
      setPeopleError(`Вас слишком много, простите, но в выбранном квесте вы не поместитесь, максимальная вместимость квеста - ${maxPeopleCount} человек`);
      return false;
    }
    if (peopleCount < minPeopleCount) {
      setPeopleError(`Для успешного прохождения выбранного квеста требуется минимум ${minPeopleCount} человек`);
      return false;
    }
    else {
      setPeopleError('');
      return true;
    }
  };

  const legalValidation = (legal:boolean) => {
    if (!legal) {
      setLegalError('Без этой галочки никуда');
      return false;
    } else {
      setLegalError('');
      return true;
    }
  };

  const joinPhoneString = (phoneString: string) => phoneString.split('').filter((symbol) => symbol!=='-' && symbol!==' ').join('');

  const checkValidation = () =>  {
    const name = nameRef.current.value;
    const phone = joinPhoneString(phoneRef.current.value);
    const peopleCount = +peopleRef.current.value;
    const legal = legalRef.current.checked;
    if (nameRef.current !== null && peopleRef.current !== null && phoneRef.current !== null && legalRef.current !== null) {
      return nameValidation(name) && phoneValidation(phone) && peopleValidation(peopleCount) && legalValidation(legal);
    } else {
      return false;
    }
  };

  const createOrderData = ():OrderType => {
    return {
      name: nameRef.current.value,
      peopleCount: +peopleRef.current.value,
      phone: joinPhoneString(phoneRef.current.value),
      isLegal: legalRef.current.checked,
    }
  }

  const handleOrderSubmit = (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (checkValidation()) {
      const data = createOrderData();
      dispatch(orderAction(data))
      // .then(() => dispatch(setBookingModalStatus(false)))
      // .catch(() => dispatch(setBookingModalStatus(true)))
    }
  }

  const handleOnCloseBtnClick = () => {
    dispatch(setBookingModalStatus(false))
  }

  const handleOnEscDown = (evt: KeyboardEvent) => {
    if (ESC_KEYS.includes(evt.key)) {
      evt.preventDefault();
      dispatch(setBookingModalStatus(false));
      document.removeEventListener('keydown', handleOnEscDown);
    }
  }
  document.addEventListener('keydown', handleOnEscDown);


  return (
      <S.BlockLayer>
        <S.Modal>
          <S.ModalCloseBtn onClick={handleOnCloseBtnClick}>
            <IconClose width="16" height="16" />
            <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
          </S.ModalCloseBtn>
          <S.ModalTitle>Оставить заявку</S.ModalTitle>
          <S.BookingForm
            action="https://echo.htmlacademy.ru"
            method="post"
            id="booking-form"
            onSubmit={handleOrderSubmit}
          >
            {nameError ? <div style={{color: '#d91818'}}>{nameError}</div> : ''}
            <S.BookingField>
              <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
              <S.BookingInput
                type="text"
                id="booking-name"
                name="booking-name"
                placeholder="Имя"
                ref={nameRef}
              />
            </S.BookingField>
            {phoneError ? <div style={{color: '#d91818'}}>{phoneError}</div> : ''}
            <S.BookingField>
              <S.BookingLabel htmlFor="booking-phone">
                Контактный телефон
              </S.BookingLabel>
              <S.BookingInput
                type="tel"
                id="booking-phone"
                name="booking-phone"
                placeholder="999-555-55-55"
                ref={phoneRef}
              />
            </S.BookingField>
            {peopleError ? <div style={{color: '#d91818'}}>{peopleError}</div> : ''}
            <S.BookingField>
              <S.BookingLabel htmlFor="booking-people">
                Количество участников
              </S.BookingLabel>
              <S.BookingInput
                type="number"
                id="booking-people"
                name="booking-people"
                placeholder="Количество участников"
                ref={peopleRef}
              />
            </S.BookingField>
            <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
            {legalError ? <div style={{color: '#d91818'}}>{legalError}</div> : ''}
            <S.BookingCheckboxWrapper>
              <S.BookingCheckboxInput
                type="checkbox"
                id="booking-legal"
                name="booking-legal"
                ref={legalRef}
              />
              <S.BookingCheckboxLabel
                className="checkbox-label"
                htmlFor="booking-legal"
              >
                <S.BookingCheckboxText>
                  Я согласен с{' '}
                  <S.BookingLegalLink href="#">
                    правилами обработки персональных данных и пользовательским
                    соглашением
                  </S.BookingLegalLink>
                </S.BookingCheckboxText>
              </S.BookingCheckboxLabel>
            </S.BookingCheckboxWrapper>
          </S.BookingForm>
        </S.Modal>
      </S.BlockLayer>
  )
};

export default BookingModal;
