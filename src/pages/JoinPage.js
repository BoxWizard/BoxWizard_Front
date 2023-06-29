import './JoinPage.css'
import React, { useState } from 'react';


function JoinPage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onChangeId = (e) => {
        const currentId = e.target.value;
        setId(currentId);
        const idRegExp = /^[a-zA-z0-9]{3,12}$/;
     
        if (!idRegExp.test(currentId)) {
            
        } else {

        }
    };

    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,14}$/;
     
        if (!passwordRegExp.test(currentPassword)) {

        } else {

        }
    };

    return (
        <div className='JoinPageArea'>
            <div className='JoinArea'>
                <form>
                    <div className='JoinTitle'> 회원가입 </div>
                    <hr/>
                    <div className='JoinContent'>
                        <div className='JoinContentTitle'> 아이디 </div>
                        <input name="id" onChange={onChangeId} />
                        <button className='IdCheckButton'>중복확인</button>
                        <div className='JoinContentDesc' name="idDesc" >* 아이디는 영문 또는 숫자만 입력해주세요.</div>

                        <div className='JoinContentTitle'> 비밀번호 </div>
                        <input name="password" onChange={onChangePassword} />
                        <div className='JoinContentDesc'>* 비밀번호는 영문, 숫자, 특수문자가 모두 포함되게 입력해주세요.</div>

                        <div className='JoinContentTitle'> 비밀번호 확인 </div>
                        <input name="passwordConfirm" />

                        <div className='JoinContentTitle'> 이름 </div>
                        <input name="name"  />

                        <div className='JoinContentTitle'> 전화번호 </div>
                        <input name="phoneNumber"  />

                        <div className='JoinContentTitle'> 주소 </div>
                        <input name="address" />
                        <div></div>

                        <button className='JoinButton'> 회원가입 </button>
                        <button className='JoinButton'>취소</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default JoinPage;