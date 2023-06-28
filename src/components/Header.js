import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png';
import './Header.css';
import { useMediaQuery } from 'react-responsive';

function Header() {
    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });

    // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

    return (
        // 헤더 전체 영역
        <div className="headerArea">
            {/* 회원정보 영역 */}
            {isDesktopOrLaptop && <>
                <div className='profileArea'>
                    <div className="profileButton">
                        <Link to={"/"}>
                            <div>About</div>
                        </Link>
                        <Link to={"/Login"}>
                            <div>Login</div>
                        </Link>
                        <Link to={"/Join"}>
                            <div>Join</div>
                        </Link>
                        <Link to={"/Mypage"}>
                            <div>Mypage</div>
                        </Link>
                    </div>
                </div>
            </>}


            {/* 카테고리 영역 */}
            <div className='categoryArea'>
                <div className="logoArea">
                    <Link to={"/"}>
                        <img src={Logo} alt='Logo' className='logo'/>
                    </Link>
                </div>

                <div className="categoryList">
                    <div className="categoryButton">
                        <Link to={"/Point"}>
                            <div>Point</div>
                        </Link>
                        <Link to={"/Probability"}>
                            <div>Probability</div>
                        </Link>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Header;