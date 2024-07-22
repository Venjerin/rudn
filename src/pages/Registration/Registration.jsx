import React from "react";
import s from "./Registration.module.css";
import returnButton from "../../assets/images/personalAccImages/return-button.svg";
import backgroungImg from "../../assets/images/personalAccImages/background-logo.svg";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import googleIcon from '../../assets/images/registrationImages/google-color-svgrepo-com.svg'

export const Registration = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth)

  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate(-1);
    setValue('email', '');
    setValue('fullName', '');
    setValue('password', '');

  };

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      fullName: 'Full Name',
      email: 'text@text.ru',
      password: '12345'
    },
    mode: 'onChange'
  })

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values)).catch(err => console.log(err))

    if(!data.payload){
      return alert('Не удалось зарегистрироваться')
    }

    if('token' in data.payload){
      window.localStorage.setItem('token', data.payload.token)
    }

    if(isAuth){
      navigate('/')
    }
  }

  // const oauthSignIn = () => {
  //   var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  
  //   var form = document.createElement('form');
  //   form.setAttribute('method', 'GET'); 
  //   form.setAttribute('action', oauth2Endpoint);
  
  //   var params = {
  //     'client_id': '96875601024-uq5paf8sgnf5iec6aktgsrfa5n4o0e50.apps.googleusercontent.com',
  //     'redirect_uri': 'http://localhost:3000/oauth-callback-google',
  //     'response_type': 'code',
  //     'scope': 'email profile',
  //     'state': 'pass-through value'
  //   };
  
  //   for (var p in params) {
  //     var input = document.createElement('input');
  //     input.setAttribute('type', 'hidden');
  //     input.setAttribute('name', p);
  //     input.setAttribute('value', params[p]);
  //     form.appendChild(input);
  //   }
  
  //   document.body.appendChild(form);
  //   form.submit();
  // }

  const GoogleButton = () => {
    const login = () => {
      const CLIENT_ID = '96875601024-h4j0momk2kd5u2bkmg9hk4rhf4lraqdd.apps.googleusercontent.com'
      const REDIRECT_URL = 'http://localhost:3000/oauth-callback-google'
      const scope = 'email profile';
      const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=code&redirect_uri=${REDIRECT_URL}&client_id=${CLIENT_ID}`
      window.location.assign(url);
    }

    return <img style={{zIndex:5000, cursor:"pointer"}} width={100} height={100} alt="Google" src={googleIcon} onClick={login}></img>
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
            <p className={s.title}>Регистрация</p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form} >
              <input
                {...register("fullName")}
                type="text"
                placeholder="Введите имя пользователя"
              />
              <input
                {...register("email")}
                type="text"
                placeholder="Введите почту"
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Введите пароль"
              />
              <GoogleButton></GoogleButton>
              {/* <button onClick={oauthSignIn} style={{zIndex:5000, cursor:"pointer"}}>Google</button> */}
              <button
                type="submit"
                className={s.registration_button}
              >
                Регистрация
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
