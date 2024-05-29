
import React, { useState } from 'react';
import * as S from './styled';

const RegisterForm = ({ onRegisterSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
 
    onRegisterSuccess();
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
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.SubmitButton type="submit">Register</S.SubmitButton>
    </S.FormContainer>
  );
};

export default RegisterForm;
