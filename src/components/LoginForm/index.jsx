
import React, { useState } from 'react';
import * as S from './styled';

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
    onLoginSuccess();
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <S.Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.SubmitButton type="submit">Login</S.SubmitButton>
    </S.FormContainer>
  );
};

export default LoginForm;
