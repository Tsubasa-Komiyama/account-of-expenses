'use client'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { NextPage } from 'next'
import { FC, useState } from 'react'
import { FirebaseError } from 'firebase/app'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { LoginForm } from '@/types/loginForm'
import { login } from '@/lib/auth'

const SignIn: FC<NextPage> = () => {
    const router = useRouter()
    const [error, setError] = useState('')
    const [waiting, setWaiting] = useState<boolean>(false);
    
    const isValid = async (data: LoginForm) => {
        try {
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, data.email, data.password)
        router.push('/')
        } catch (e) {
            if (e instanceof FirebaseError) {
                if (e.code === 'auth/invalid-email') {
                    setError('メールアドレスがまちがっています')
                } else if (e.code === 'auth/user-disabled') {
                    setError('指定されたメールアドレスのユーザーは無効です')
                } else if (e.code === 'auth/user-not-found') {
                    setError('指定されたメールアドレスにユーザーが見つかりません')
                } else if (e.code === 'auth/wrong-password') {
                    setError('パスワードがまちがっています')
                }
                }
        }
    }

    const signInGoogle = () => {
        setWaiting(true);
    
        login()
          .catch((error) => {
            console.error(error?.code);
          })
          .finally(() => {
            setWaiting(false);
          });
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>()
    return (
        <>
        <div className='flex'>
            <div className='mx-auto flex w-full flex-col items-center md:w-3/5 lg:w-2/3'>
            <h1 className='my-10 text-2xl font-bold text-white'> Login </h1>
            <form className='mt-2 flex w-8/12 flex-col lg:w-1/2' onSubmit={handleSubmit(isValid)}>
                <div className='mb-4'>
                <label className='mb-1 block'>メールアドレス</label>
                <input
                    className='mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200  disabled:bg-gray-100'
                    {...register('email', { required: 'メールアドレスを入力してください' })}
                    placeholder='your@email.com'
                    type={'email'}
                />
                <div className='mt-1 text-sm text-red-300'>{errors.email?.message}</div>
                </div>
                <div className='mb-4'>
                <label className='mb-1 block'>パスワード</label>
                <input
                    className='mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200  disabled:bg-gray-100'
                    {...register('password', {
                    required: 'パスワードを入力してください',
                    minLength: { value: 6, message: '6文字以上入力してください' },
                    })}
                    placeholder='Password'
                    type={'password'}
                />
                <div className='mt-1 text-sm text-red-300'>{errors.password?.message}</div>
                </div>
                <div className='mb-6'>
                <button
                    className='mt-4  w-full rounded bg-sky-200 py-4 text-center font-sans text-xl font-bold leading-tight text-white md:px-12 md:py-4 md:text-base'
                    type='submit'
                >
                    ログインする
                </button>
                </div>
            </form>
            <div>
                {!waiting && <button onClick={signInGoogle}>Googleログイン</button>}
            </div>
            <button className='mt-4 w-full text-center' onClick={() => router.push('/signup')}>
                Sign Up
            </button>
            </div>
        </div>
        </>
    )
}
export default SignIn