import React from "react";
import Box from '../assets/MainLogo.png'

const LS_KEY_CATEGORY = "LS_KEY_CATEGORY";

const ProbabilityTable = ({ categories, category, setCategory }) => {
    const makeCategories = () => {
        if (categories.length === 0) return;
    
        return categories.map((item, idx) => (
          <div
            key={idx}
            className={
              item.value === category ? "categoryChild selected" : "categoryChild"
            }
            onClick={() => {
              setCategory(item.value);
              localStorage.setItem(LS_KEY_CATEGORY, item.value);
            }}
          >
            <div>
              <div><img className="boxImg" src={Box} alt="img"/></div>
              <div>{item.name}</div>
            </div>
          </div>
        ));
      };
    
      return (
        <>
          <div className="makeCategory">{makeCategories()}</div>
        </>
      );
}

export default ProbabilityTable;