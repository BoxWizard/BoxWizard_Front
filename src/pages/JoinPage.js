import './JoinPage.css'


function JoinPage() {
    return (
        <div className='JoinPageArea'>
            <div className='JoinArea'>
                <form>
                    <div> 회원가입 </div>
                    <div> 아이디 </div>
                    <input />
                    <button>중복확인</button>
                    <div> 비밀번호 </div>
                    <input />
                    <div> 비밀번호 확인 </div>
                    <input />
                    <div></div>
                    <button> 회원가입 </button>
                    <button>취소</button>
                </form>
            </div>
        </div>
    );
}

export default JoinPage;