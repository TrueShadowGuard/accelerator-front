import React, {useRef, useState} from 'react';
import s from '../css/accelerator.module.css';
import useWindowSize from "../hooks/useWindowSize";
import PeriodicTable from "../components/PeriodicTable";
import {FormControl, MenuItem, Select, Slider, TextField} from "@mui/material";
import TableSvg from '../pictures/periodic-table.svg';
import {distanceStep, elements, maxDistance, minDistance} from '../consts';
import ligandPosition from "../http/ligand-position";

const Accelerator = () => {

  const PDBFileRef = useRef();
  const [ligandName, setLigandName] = useState('H');
  const [maxAcceptableDistance, setMaxAcceptableDistance] = useState(0);

  const [isTableVisible, setIsTableVisible] = useState();

  return (
    <>
      <PeriodicTable visible={isTableVisible}
                     setVisible={setIsTableVisible}
                     setElement={(el) => {
                       setLigandName(el);
                     }}
      />
      <div className="container">
        <p>Copy and paste the PDB file:</p>

        <textarea rows="12" placeholder="Enter all data from the PDB file:" ref={PDBFileRef}/>

        <div className={s.elementAndDistanceContainer}>
          <div>
            Element to calculate
            <div className={s.selectElementContainer}>
              <FormControl className={s.selectedElement}>
                <Select
                  autoWidth={true}
                  label="Element"
                  value={ligandName || 'H'}
                  onChange={e => {
                    setLigandName(e.target.value)
                  }}
                >
                  {elements.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)}
                </Select>
              </FormControl>
              <button data-default={true}>
                <img alt="Select element button"
                     src={TableSvg}
                     className={s.selectElementButton}
                     width={40}
                     height={40}
                     onClick={() => setIsTableVisible(true)}
                />
              </button>
            </div>
          </div>
          <div>
            Max acceptable distance, Å
            <div className={s.selectDistanceContainer}>
              <div>
                <TextField type="number"
                           variant="standard"
                           value={maxAcceptableDistance || ""}
                           onChange={e => {
                             let number = +e.target.value;
                             number = Math.max(minDistance, number);
                             number = Math.min(maxDistance, number);
                             console.log('number: ' + number);
                             setMaxAcceptableDistance(number);
                           }}
                />
              </div>
              <div className={s.selectDistance}>
                <Slider min={minDistance}
                        max={maxDistance}
                        step={distanceStep}
                        valueLabelDisplay="on"
                        sx={{color: "text.primary"}}
                        value={maxAcceptableDistance}
                        onChange={e => {
                          setMaxAcceptableDistance(e.target.value)
                        }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button type="submit" onClick={post}>Get result</button>
          <button type="reset">Clean out</button>
        </div>
      </div>
    </>
  );

  async function post() {
    const response = await ligandPosition.post(ligandName, maxAcceptableDistance, PDBFileRef.current.value);
    // const response = await ligandPosition.get();
    console.log('post response', response);
  }
};

export default Accelerator;
