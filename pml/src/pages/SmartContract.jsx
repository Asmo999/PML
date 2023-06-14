import React from "react";
import Wallet from "./Steps/wallet/wallet.module.css";
import WalletImg from "./../images/wallet.png"
const SmartContract = () => {
  return (
    <>
      <div className={Wallet.cnt}>
        <div className={Wallet.closebtn}>
          <button>X</button>
        </div>
        <div className={Wallet.flx}>
          <div>
            <h1>Add Wallet before <br></br> start</h1>
            <button>Add Wallet</button>
          </div>
          <img className={Wallet.walletimg} src={WalletImg} alt="Girl-Wallet" />
        </div>
      </div>
    </>
  );
};

export default SmartContract;
