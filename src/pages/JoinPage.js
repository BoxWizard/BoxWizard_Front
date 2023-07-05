import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JoinPage() {
    const navigate = useNavigate();

    //  회원가입 정보
    const intialValues = { 
        id: "",
        password: "",
        name: "",
        phoneNumber: "",
        address: ""   
    };
    
    const [ formValues, setFormValues ] = useState(intialValues);
    const [ formErrors, setFormErrors ] = useState({});
    // const [ isSubmitting, setIsSubmitting ] = useState(false);

    const submitFrom = () => {
        console.log(formValues);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        // setIsSubmitting(true);
    }

    const validate = (values) => {
        let errors = {};

        const idRegex = /^[a-zA-Z0-9]{3,12}$/;
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,14}$/;

        if(!values.id) {
            errors.id = "아이디를 입력해주세요!";
        }else if (!idRegex.test(values.id)){
            errors.id = "아이디 입력 정보를 확인해주세요!";
        }

        if(!values.password) {
            errors.password = "비밀번호를 입력해주세요!";
        }else if (!passwordRegex.test(values.password)){
            errors.password = "비밀번호 입력 정보를 확인해주세요!";
        }

        if(!values.passwordConfirm) {
            errors.passwordConfirm = "비밀번호를 입력해주세요!";
        }else if (values.password !== values.passwordConfirm){
            errors.passwordConfirm = "비밀번호를 확인해주세요!";
        }

        if(!values.name) {
            errors.name = "이름을 입력해주세요!";
        }else if (values.name.length < 2){
            errors.name = "이름을 2자이상 입력해주세요!";
        }

        if(!values.phoneNumber) {
            errors.phoneNumber = "전화번호를 입력해주세요!";
        }

        if(!values.address) {
            errors.address = "주소를 입력해주세요!";
        }

        return errors;
    }

    // useEffect(() => {
    //     if(Object.keys(formErrors).length === 0 && isSubmitting){
    //         submitFrom();
    //     }
    // }, [formErrors]);

    return (
        <div className='pageArea'>
            <div className='joinArea'>
                <form onSubmit={handleSubmit} noValidate>
                    <div className='joinTitle'> 회원가입 </div>
                    <hr/>
                    <div className='joinContent'>
                        <div className='joinContentTitle'> 아이디 </div>
                        <input type="id"
                            name="id"
                            id="id"
                            value={formValues.id}
                            onChange={handleChange}
                            className={formErrors.id && "input-error"} />
                        <button className='IdCheckButton' type='button'>중복확인</button>
                        <div className='joinContentDesc' name="idDesc" >* 아이디는 영문 또는 숫자만 입력해주세요. (3 ~ 12자)</div>
                        {formErrors.id && (
                            <span className="error">{formErrors.id}</span>
                        )}

                        <div className='joinContentTitle'> 비밀번호 </div>
                        <input type="password"
                            name="password"
                            id="password"
                            value={formValues.password}
                            onChange={handleChange}
                            className={formErrors.password && "input-error"} />
                        <div className='joinContentDesc'>* 비밀번호는 영문, 숫자, 특수문자가 모두 포함되게 입력해주세요. (8 ~ 14자)</div>
                        {formErrors.password && (
                            <span className="error">{formErrors.password}</span>
                        )}
                        

                        <div className='joinContentTitle'> 비밀번호 확인 </div>
                        <input type="password"
                            name="passwordConfirm"
                            id="passwordConfirm"
                            value={formValues.passwordConfirm}
                            onChange={handleChange}
                            className={formErrors.passwordConfirm && "input-error"} />
                        {formErrors.passwordConfirm && (
                            <div><span className="error">{formErrors.passwordConfirm}</span></div>
                        )}

                        <div className='joinContentTitle'> 이름 </div>
                        <input type="name"
                            name="name"
                            id="name"
                            value={formValues.name}
                            onChange={handleChange}
                            className={formErrors.name && "input-error"} />
                        {formErrors.name && (
                            <div><span className="error">{formErrors.name}</span></div>
                        )}

                        <div className='joinContentTitle'> 전화번호 </div>
                        <input type="phoneNumber"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={formValues.phoneNumber}
                            onChange={handleChange}
                            className={formErrors.phoneNumber && "input-error"} />
                        {formErrors.phoneNumber && (
                            <div><span className="error">{formErrors.phoneNumber}</span></div>
                        )}

                        <div className='joinContentTitle'> 주소 </div>
                        <input type="address"
                            name="address"
                            id="address"
                            value={formValues.address}
                            onChange={handleChange}
                            className={formErrors.address && "input-error"} />
                        {formErrors.address && (
                            <div><span className="error">{formErrors.address}</span></div>
                        )}
                        <div></div>

                        <button className='joinButton' type="submit"> 회원가입 </button>
                        <button className='joinButton' type='button'>취소</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default JoinPage;