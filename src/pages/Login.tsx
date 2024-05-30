import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/input';

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        navigate('/home')
    }


    return (
        <div className='pt-[10rem] flex flex-col gap-[3rem] pb-[10rem]'>
            <h1 className='font-garetBold text-[1.2rem] quatro:text-[2rem] text-center'>Welcome back!</h1>
            <div className='flex justify-center w-full'>
                <div className='w-full seis:w-[25rem] flex flex-col items-center gap-8'>
                    <Input label='Email' value={email} setValue={setEmail} type="email" />
                    <Input label='Password' value={password} setValue={setPassword} type="password" />
                    <button onClick={login} className='w-full rounded-full bg-[var(--primary)] px-4 py-2 text-white'>Login</button>
                </div>
            </div>
        </div>
    );
}

