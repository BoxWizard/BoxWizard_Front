import './ProbabilityPage.css'

function ProbabilityPage() {
    return (
        <div className='ProbabilityPageArea'>
            <div className='ProbabilityArea'>
                <table>
                    <thead>
                        <tr>
                            <th>종류</th>
                            <th>상품 이름</th>
                            <th>확률</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>다이아 박스</td>
                            <td>롤렉스</td>
                            <td>1%</td>
                        </tr>
                        <tr>
                            <td>다이아 박스</td>
                            <td>벤츠</td>
                            <td>1%</td>
                        </tr>
                        <tr>
                            <td>다이아 박스</td>
                            <td>다이아반지</td>
                            <td>1%</td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                    </tbody>
                    
                </table>

            </div>
        </div>
    );
}

export default ProbabilityPage;