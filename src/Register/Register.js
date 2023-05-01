import { Link, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './Register.css';


function Register({ onRegister }) {

  const { register, formState: { errors }, handleSubmit } = useForm();

  function submitForm(evt) {
    evt.preventDefault();
    onRegister({
      // name: name,
      // email: email,
      // password: password,
    })

  }

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }


  return (
    <section className='register'>
      <form className='register__container' onSubmit={handleSubmit(onSubmit)}>
        <NavLink to='/'>
          <div className='register__logo'></div>
        </NavLink>
        <h1 className='register__title'>Добро пожаловать!</h1>

        <fieldset className='register__fieldset'>
          <p className='register__text-input'>Имя</p>
          <input
            className='register__input'
            type='text'
            name='name'
            // onChange={handleChangeInput}
            minLength={3}
            pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
            required
          />
          <span className='register__error'>
            {/* {isErrors.name ? 'Недопустимое имя, минимальная длина 3 символа' : ''} */}
          </span>

          <p className='register__text-input'>E-mail</p>
          <input
            {...register('FieldEmail', { required: true })}
            className='register__input'
            type='email'
            name='email'
          // onChange={handleChangeInput}
          />
          {/* <span className='register__error'>{isErrors.email ? 'Недопустимый email' : ''}</span> */}

          <p className='register__text-input'>Пароль</p>
          <input
            className='register__input'
            type='password'
            name='password'
            // onChange={handleChangeInput}
            minLength={5}
            required
          />
          <span className='register__error'>
            {/* {isErrors.password ? 'Недопустимый пароль, минимальная длина 5 символов' : ''} */}
          </span>
        </fieldset>

        <button
          className='register__button'
          type='submit'
        >Зарегистрироваться</button>
        <p className='register__text'>
          Уже зарегистрированы?
          <Link className='register__link' to='/signin'> Войти</Link>
        </p>

      </form>
    </section>
  );
}

export default Register;