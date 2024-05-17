import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
  text-align: center;
`;

export const ContactFormTitle = styled.h2`
  color: #333;
  margin-bottom: 2rem;
`;

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const ContactFormField = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
`;

export const ContactFormTextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
`;

export const ContactFormButton = styled.button`
  font-size: 1rem;
  padding: 0.8rem 2rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
