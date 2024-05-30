import React from 'react';

export default function NotFound() {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center text-black bg-[var(--darkGray)]'>
            <p className='absolute top-8 left-8 text-[1.2rem] cursor-pointer' onClick={() => window.history.back()}>🡐&ensp;Back</p>
            <h1 className='text-[3.5rem]'>404 Error</h1>
            <p className='text-[1.2rem]'>This page does not exist</p>
        </div>
    );
}

