import React from "react";
import s from "./Application.module.css";

import returnButton from "../../assets/images/personalAccImages/return-button.svg";
import backgroungImg from "../../assets/images/personalAccImages/background-logo.svg";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { fetchApplication } from "../../redux/slices/application";

export const Application = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  if(!isAuth){
    navigate('/')
  }

  const backButtonHandler = () => {
    navigate(-1);
    setValue('name', '');
    setValue('organization', '');
    setValue('patronymic', '');
    setValue('phoneNumber', '');
    setValue('surname', '');
  };

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      surname: 'Фамилия',
      name: 'Имя',
      patronymic: 'Отчество',
      organization: 'ООО "Организация"',
      phoneNumber: '12345678910'
    },
    mode: 'onChange'
  })

  const onSubmit = async (values) => {
    const data = await dispatch(fetchApplication(values)).catch(err => console.log(err))

    if(!data.payload){
      return alert('Не удалось зарегистрироваться')
    }

    if('token' in data.payload){
      window.localStorage.setItem('token', data.payload.token)
    }

    navigate('/');
    alert('Заявка отправлена!')
  }

  return (
    <>
      <img src={backgroungImg} alt="" className={s.image_container} />
      <div className={s.account_page}>
        <div className={s.container}>
          <div className={s.header}>
            <img
              src={returnButton}
              alt="Вернуться"
              className={s.return_button}
              onClick={backButtonHandler}
            />
            <p className={s.title}>Создание заявки</p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form} >
              <input
                {...register("surname")}
                type="text"
                placeholder="Введите фамилию"
              />
              <input
                {...register("name")}
                type="text"
                placeholder="Введите имя"
              />
              <input
                {...register("patronymic")}
                type="text"
                placeholder="Введите отчество"
              />
              <input
                {...register("organization")}
                type="text"
                placeholder="Введите организацию"
              />
              <input
                {...register("phoneNumber")}
                type="text"
                placeholder="Введите номер телефона"
              />
              <button
                type="submit"
                className={s.registration_button}
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
