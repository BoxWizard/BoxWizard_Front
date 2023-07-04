import { Link } from 'react-router-dom';
import Box from '../assets/MainLogo.png'
import './HomePage.css';

function HomePage() {
    return (
        <div className='HomePageArea'>
            <div className='productArea'>
                <Link to={"/product"} className='productList'>
                    <img src={Box} alt='productImg' className='productImg' />
                    <div>다이아 상자</div>
                    <div>블록체인 기반 랜덤상자</div>
                    <div>50,000 Luck</div>
                </Link>
                <Link to={"/product"} className='productList'>
                    <img src={Box} alt='productImg' className='productImg' />
                    <div>플래티넘 상자</div>
                    <div>블록체인 기반 랜덤상자</div>
                    <div>10,000 Luck</div>
                </Link>
                <Link to={"/product"} className='productList'>
                    <img src={Box} alt='productImg' className='productImg' />
                    <div>골드 상자</div>
                    <div>블록체인 기반 랜덤상자</div>
                    <div>5,000 Luck</div>
                </Link>
                <Link to={"/product"} className='productList'>
                    <img src={Box} alt='productImg' className='productImg' />
                    <div>실버 상자</div>
                    <div>블록체인 기반 랜덤상자</div>
                    <div>1,000 Luck</div>
                </Link>
                <Link to={"/product"} className='productList'>
                    <img src={Box} alt='productImg' className='productImg' />
                    <div>브론즈 상자</div>
                    <div>블록체인 기반 랜덤상자</div>
                    <div>500 Luck</div>
                </Link>
                <Link to={"/product"} className='productList'>
                    <img src={Box} alt='productImg' className='productImg' />
                    <div>아이언 상자</div>
                    <div>블록체인 기반 랜덤상자</div>
                    <div>100 Luck</div>
                </Link>
                <Link to={"/product"} className='productList'>
                    <img src={Box} alt='productImg' className='productImg' />
                    <div>무료 상자</div>
                    <div>블록체인 기반 랜덤상자</div>
                    <div>0 Luck</div>            
                </Link>
            </div>
        </div>
    );
}

export default HomePage;