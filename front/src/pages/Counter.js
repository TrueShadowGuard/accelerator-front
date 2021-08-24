import React from 'react';
import s from '../css/counter.module.css';
import {Chart} from "react-google-charts";

const dataHeader = ["Amino acid", "Percent"];

const Counter = () => {
  const textAreaRef = React.createRef();
  const [pieChartData, setPieChartData] = React.useState();

  return (
    <div>
      <div className="container">
        <p>Enter the amino acid sequence:</p>
        <div className="divTextArea">
              <textarea name="text" rows="12"
                        placeholder="Example: AMFCFQCQETAKNMFCFQCQETAKNTGCTVKGMCGKPEETANLQDLLIFVLRGIAI...."
                        ref={textAreaRef}
              />
        </div>
        <p className="buttons">
          <button type="button" onClick={handleGetResult}>Get result</button>
          <button type="button" onClick={handleClear}>Clean out</button>
        </p>
        {pieChartData !== undefined && (
          <div className={s.resultContainer}>
            <Chart
              chartType="Table"
              data={pieChartData}
              width="100%"
              legendToggle
            />
            <Chart
              chartType="PieChart"
              data={pieChartData}
              width="100%"
              legendToggle
              options={{is3D: true}}
            />
          </div>
        )}
      </div>
    </div>
  );

  function handleGetResult() {
    const acidNames = {
      A: 'Alanine',
      R: "Arginine",
      N: "Asparagine",
      D: "Aspartic Acid",
      C: "Cysteine",
      E: "Glutamic Acid",
      Q: "Glutamine",
      G: "Glycine",
      H: "Histidine",
      I: "Isoleucine",
      L: "Leucine",
      K: "Lysine",
      M: "Methionine",
      F: "Phenylalanine",
      P: "Proline",
      S: "Serine",
      T: "Threonine",
      W: "Tryptophan",
      Y: "Tyrosine",
      V: "Valine"
    };
    const acidChainString = textAreaRef.current.value;
    let acids = {};
    [...acidChainString].filter(acid => acidNames[acid]).forEach(acid => acids[acid] ? acids[acid]++ : acids[acid] = 1);
    acids = Object.entries(acids).map(([a, count]) => {
      return [acidNames[a], count]
    });
    const result = [dataHeader, ...acids];
    setPieChartData(result);
  }

  function handleClear() {
    textAreaRef.current.value = '';
  }
};

export default Counter;
