
import React, { useState } from 'react';
import * as S from './styled';
import { useTranslation } from 'react-i18next'; 

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation(); 

  const handleSubmit = (event) => {
    event.preventDefault();
   
    onLoginSuccess();
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Input
        type="text"
        placeholder={t('username')}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <S.Input
        type="password"
        placeholder={t('password')}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.SubmitButton type="submit">{t('login')}</S.SubmitButton>
    </S.FormContainer>
  );
};

export default LoginForm;
