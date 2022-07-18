import React, { useState } from 'react'
import './LoginPage.css';
import { useParams } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

type LoginPageProps = {
    storeToken: (token: string)=> void;
  }

export default function LoginPage(props: LoginPageProps) {
    return (
        <div className='login-page-container'>
            <LoginForm storeToken={(loginToken) => props.storeToken(loginToken)}/>
        </div>
    );
}