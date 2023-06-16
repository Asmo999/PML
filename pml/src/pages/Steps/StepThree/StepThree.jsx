import React from "react";
import Bicon from "../../../images/b.png";
import Lftarrow from "../../../images/Leftarrow.png";
import Rhtarrow from "../../../images/rightarrow.png";
import StepThreeCss from "./StepThree.module.css";
import BoxImg from "../../../images/box.png";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepThree = () => {
  return (
    <>
      <div className={StepThreeCss.cnt}>
        <div className={StepThreeCss.closebtn}>
          <button>X</button>
        </div>
        <div className={StepThreeCss.flx}>
          <div className={StepThreeCss.txts}>
            <h3>Step 3</h3>
            <h1>Insert Smart contract <br></br> name</h1>
            <input className={StepThreeCss.inp} type="text" placeholder="Smart contract standart"/>
          </div>
          <img className={StepThreeCss.b} src={Bicon} alt="" />
          <img className={StepThreeCss.floatimg} src={BoxImg} alt="B-Float" />
        </div>
        <div className={StepThreeCss.progress}>
          <CircularProgress valuse={3} max={14} />
          <div className={StepThreeCss.movebtn}>
            <button><img src={Lftarrow} alt="" /></button>
            <button><img src={Rhtarrow} alt="" /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepThree;
