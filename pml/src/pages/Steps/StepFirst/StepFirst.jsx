import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepFirst = () => {
  return (
    <>
      <div>
        <div>
          <button>X</button>
        </div>
        <div>
          <div>
            <h3>Step 1</h3>
            <h1>Choose the chain to deploy</h1>
            <div>
              <div>
                <input type="radio" name="Binance-radio" id="Binance-radio" />
                <label htmlFor="Binance-radio">Binance</label>
              </div>
              <div>
                <input type="radio" name="Etherium-radio" id="Etherium-radio" />
                <label htmlFor="Etherium-radio">Etherium</label>
              </div>
              <div>
                <input type="radio" name="Casper-radio" id="Casper-radio" />
                <label htmlFor="Casper-radio">Casper</label>
              </div>
              <div>
                <input type="radio" name="Solana-radio" id="Solana-radio" />
                <label htmlFor="Solana-radio">Solana</label>
              </div>
              <div>
                <input type="radio" name="Cronos-radio" id="Cronos-radio" />
                <label htmlFor="Cronos-radio">Cronos</label>
              </div>
            </div>
          </div>
          <img src="" alt="Man-LapTop-B" />
        </div>
        <div>
          <CircularProgress value={1} max={14} />
          <button>Arrow-Circle</button>
        </div>
      </div>
    </>
  );
};

export default StepFirst;
