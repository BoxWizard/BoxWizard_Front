import Roulette from '../assets/roulette.png'

function RoulettePage() {
    return (
        <div className='PageArea'>
            <div className='RouletteArea'>
                <div>
                    <img src={Roulette} alt='roulette' width='50%' />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>token</th>
                            <th>ethereum</th>
                            <th>구매하기</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1000</td>
                            <td>1</td>
                            <td><button>구매하기</button></td>
                        </tr>
                        <tr>
                            <td>10000</td>
                            <td>10</td>
                            <td><button>구매하기</button></td>
                        </tr>
                        <tr>
                            <td>100000</td>
                            <td>100</td>
                            <td><button>구매하기</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RoulettePage;