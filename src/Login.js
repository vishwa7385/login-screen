import React, { useState } from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import image from './Login-logo.jpg';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #808080;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 80vh;
`;

const LoginContainer = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 400px;
  box-sizing: border-box;
  margin: 0 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const InputContainer = styled.div`
  margin: 10px 0;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  padding-right: 30px;
`;

const EyeIcon = styled.i`
  position: absolute;
  right: 10px;
  top: 68%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-color: #000000;
  color: #000000;
  margin-bottom: 5px;
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

const RememberMeLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const RememberMeInput = styled.input`
  margin-right: 5px;
`;

const TermsAndConditionsContainer = styled.div`
  margin: 10px 0;
`;

const TermsAndConditionsLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const TermsAndConditionsInput = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const RegisterLink = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

const ResponsiveImage = styled.img`
  width: 250px;
  height: 200px;
  display: block;
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <LoginWrapper>
      <ImageContainer>
        <Image src={image} alt="Login Image" />
      </ImageContainer>
      <LoginContainer>
        <Title>Login</Title>
        <InputContainer>
          <Label htmlFor="loginId">Login ID</Label>
          <Input type="text" id="loginId" placeholder="Enter your Login ID" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <Input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
          />
          <EyeIcon
            className={showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'}
            onClick={togglePasswordVisibility}
          />
        </InputContainer>
        <RememberMeContainer>
          <RememberMeLabel>
            <RememberMeInput type="checkbox" id="rememberMe" />
            Remember Me
          </RememberMeLabel>
        </RememberMeContainer>
        <TermsAndConditionsContainer>
          <TermsAndConditionsLabel>
            <TermsAndConditionsInput type="checkbox" id="termsAccept" />
            I accept the <a href="#terms">Terms and Conditions</a>
          </TermsAndConditionsLabel>
        </TermsAndConditionsContainer>
        <SubmitButton type="submit">Login</SubmitButton>
        <RegisterLink>
          Don't have an account? <a href="#register">Register here</a>
        </RegisterLink>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default Login;
