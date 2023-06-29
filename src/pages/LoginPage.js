import './LoginPage.css'

function LoginPage() {
    return (
        <div className='LoginPageArea'>
            <div className='LoginArea'>
                <form>
                    <div className='LoginTitle'> 로그인 </div>
                    <hr/>
                    <div className='LoginContent'>
                        <div className='LoginContentTitle'> 아이디 </div>
                        <input />
                        <div className='LoginContentTitle'> 비밀번호 </div>
                        <input />
                        <div></div>
                        <button> 로그인 </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;