import Box from '../assets/MainLogo.png'
import './ProductPage.css'

function ProductPage() {
    return (
        <div className='ProductPageArea'>
            <div className='productArea'>
                <div>
                    <img src={Box} alt='boximg' />
                </div>
                <div>
                    <div>이름 : 다이아 박스</div>
                    <div>가격 : 50,000 token</div>
                    <div>확률 : 확률표 보기</div>
                    <div><button>구매하기</button></div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;