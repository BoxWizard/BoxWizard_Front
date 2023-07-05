import React from 'react';
// import { ReactDOM } from 'react';
// import axios from 'axios';

function LoginPage() {

    // axios.defaults.baseURL = "";
    // axios.defaults.withCredentials = true;

    // const onLogin = (id, password) => {
    //     const data = {
    //         id,
    //         password,
    //     };
    //     axios.post('/login', data).then(response => {
    //         const { accessToken } = response.data;

    //         axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;


    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }


    return (
        <div className='pageArea'>
            <div className='loginArea'>
                <form>
                    <div className='loginTitle'> 로그인 </div>
                    <hr/>
                    <div className='loginContent'>
                        <div className='loginContentTitle'> 아이디 </div>
                        <input />
                        <div className='loginContentTitle'> 비밀번호 </div>
                        <input />
                        <div></div>
                        <button type="submit"> 로그인 </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;