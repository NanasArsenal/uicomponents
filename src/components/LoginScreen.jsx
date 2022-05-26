import React from 'react';
import Button from './shared/Button';

const LoginScreen = () => {
  return (
      <div className='h-screen flex items-center justify-center'>
        <div className="card w-[500px] h-[600px] shadow-xl pt-[200px] rounded-md bg-slate-200">
            <form className='flex items-center flex-col gap-4'>
                <div className="form-group flex flex-col gap-2">
                    <h1 className=' text-gray-400'>Username :</h1>
                    <input type="text" placeholder='Username' className=' w-[300px] py-2 px-2 rounded-md ' />
                </div>
                <div className="form-group">
                   <h1 className=' text-gray-400'>Password :</h1>
                  <input type="password" placeholder='Password' className=' w-[300px] py-2 px-2 rounded-md  active:border-lime-600 ' />
                </div>

                <div className="form-group">
                    <Button customStyle={'bg-lime-400 p-2 w-[300px]'} children={'Login'}/>
                </div>
            </form>
        </div>
      </div>
  )
}

export default LoginScreen