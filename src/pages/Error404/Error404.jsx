import React from 'react';
import s from './Error404.module.css';

const Error404 = () => (
  <div className={s.page_not_found}>
    <h2 className={s.page_not_found__title}>404 - Страница не найдена</h2>
    <p className={s.page_not_found__message}>
      Извините, запрашиваемая вами страница не существует.
    </p>
  </div>
);
export default Error404;
