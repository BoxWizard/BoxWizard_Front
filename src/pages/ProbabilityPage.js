import React, { useState, useEffect } from 'react';
import ProbabilityTable from '../components/ProbabilityTable'

const categories = [
    {
        name: "다이아 상자",
        value: "diaBox",
    },
    {
        name: "플래티넘 상자",
        value: "platinumBox",
    },
    {
        name: "골드 상자",
        value: "goldBox",
    },
    {
        name: "실버 상자",
        value: "sliverBox",
    },
    {
        name: "브론즈 상자",
        value: "bronzeBox",
    },
    {
        name: "아이언 상자",
        value: "ironBox",
    },
    {
        name: "무료 상자",
        value: "freeBox",
    },
];

const probaList = [
    {
      name: "diaBox",
      title: "다이아 상자 확률",
      item1: "롤렉스",
      perecnt1: "1%",
      item2: "고급 벽지 (500 X 500)",
      perecnt2: "9%",
      item3: "45,000 luck",
      perecnt3: "10%",
      item4: "30,000 luck",
      perecnt4: "30%",
      item5: "10,000 luck",
      perecnt5: "50%",
    },
    {
      name: "platinumBox",
      title: "플래티넘 상자 확률",
      item1: "구찌 가방",
      perecnt1: "1%",
      item2: "고급 벽지 (500 X 500)",
      perecnt2: "9%",
      item3: "9,000 luck",
      perecnt3: "10%",
      item4: "5,000 luck",
      perecnt4: "30%",
      item5: "1,000 luck",
      perecnt5: "50%",
    },
    {
      name: "goldBox",
      title: "골드 상자 확률",
      item1: "금 목걸이",
      perecnt1: "1%",
      item2: "고급 벽지 (500 X 500)",
      perecnt2: "9%",
      item3: "2,500 luck",
      perecnt3: "10%",
      item4: "2,000 luck",
      perecnt4: "30%",
      item5: "1,000 luck",
      perecnt5: "50%",
    },
    {
      name: "sliverBox",
      title: "실버 상자 확률",
      item1: "은 목걸이",
      perecnt1: "1%",
      item2: "고급 벽지 (500 X 500)",
      perecnt2: "9%",
      item3: "500 luck",
      perecnt3: "10%",
      item4: "300 luck",
      perecnt4: "30%",
      item5: "200 luck",
      perecnt5: "50%",
    },
    {
      name: "bronzeBox",
      title: "브론즈 상자 확률",
      item1: "은 반지",
      perecnt1: "1%",
      item2: "고급 벽지 (500 X 500)",
      perecnt2: "9%",
      item3: "300 luck",
      perecnt3: "10%",
      item4: "150 luck",
      perecnt4: "30%",
      item5: "100 luck",
      perecnt5: "50%",
    },
    {
      name: "ironBox",
      title: "아이언 상자 확률",
      item1: "은 귀걸이",
      perecnt1: "1%",
      item2: "고급 벽지 (500 X 500)",
      perecnt2: "9%",
      item3: "75 luck",
      perecnt3: "10%",
      item4: "70 luck",
      perecnt4: "30%",
      item5: "50 luck",
      perecnt5: "50%",
    },
    {
      name: "freeBox",
      title: "무료 상자 확률",
      item1: "100 luck",
      perecnt1: "1%",
      item2: "20 luck",
      perecnt2: "5%",
      item3: "15 luck",
      perecnt3: "10%",
      item4: "13 luck",
      perecnt4: "15%",
      item5: "10 luck",
      perecnt5: "69%",
    },
  ];

function ProbabilityPage() {
    const [category, setCategory] = useState("diaBox");
    const [showList, setShowList] = useState(probaList);
  
    const getProbability = (item, index) => {
      return (
        <div>
          <div className='proTableTitle'>{item.title}</div>
          <div className="proTableContent">
            <table>
              <thead>
                <th className='proTableName'>물품</th>
                <th className='proTablePercent'>확률</th>
              </thead>
              <tbody>
                <tr>
                  <td>{item.item1}</td>
                  <td>{item.perecnt1}</td>
                </tr>
                <tr>
                  <td>{item.item2}</td>
                  <td>{item.perecnt2}</td>
                </tr>
                <tr>
                  <td>{item.item3}</td>
                  <td>{item.perecnt3}</td>
                </tr>
                <tr>
                  <td>{item.item4}</td>
                  <td>{item.perecnt4}</td>
                </tr>
                <tr>
                  <td>{item.item5}</td>
                  <td>{item.perecnt5}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    };
  
    useEffect(()=> {
      setShowList(
        probaList.filter((item) => {
          if (category === item.name) return true;
          return false;
        })
      );
    }, [category]);

    return (
        <div className='pageArea'>
          <div className='probabilityArea'>
            <div>
              <div className='probabilityTitle'>확률표</div>
              <hr/>

              <ProbabilityTable
                categories={categories}
                category={category}
                setCategory={setCategory}
              />

              <div className="probabilityContent">
                <div className="probabilityList">
                  {showList.map((item, index) => getProbability(item, index))}     
                </div>
              </div>

            </div>
          </div>
        </div>
    );
}

export default ProbabilityPage;