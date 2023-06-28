import './LoginPage.css'

function LoginPage() {
    return (
        <div className='LoginPageArea'>
            <div className='LoginArea'>
                <form>
                    <div> 로그인 </div>
                    <div> 아이디 </div>
                    <input />
                    <div> 비밀번호 </div>
                    <input />
                    <div></div>
                    <button> 로그인 </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;