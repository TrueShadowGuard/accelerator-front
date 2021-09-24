import React, {useState} from 'react';
import s from '../css/accelerator.module.css';
import useWindowSize from "../hooks/useWindowSize";
import PeriodicTable from "../components/PeriodicTable";
import {FormControl, MenuItem, Select, Slider, TextField} from "@mui/material";
import TableSvg from '../pictures/periodic-table.svg';
import {distanceStep, elements, maxDistance, minDistance} from '../consts';

const Accelerator = () => {

  const [element, setElement] = useState('H');
  const [distance, setDistance] = useState(0);

  const [isTableVisible, setIsTableVisible] = useState();

  const {width} = useWindowSize();

  return (
    <>
      <PeriodicTable visible={isTableVisible}
                     setElement={(el) => {
                       setIsTableVisible(false);
                       setElement(el);
                     }}
      />
      <div className="container">
        <p>Copy and paste the PDB file:</p>

        <textarea rows="12" placeholder="Enter all data from the PDB file:"/>

        Element to calculate
        <div className={s.selectElementContainer}>
          <FormControl className={s.selectedElement}>
            <Select
              autoWidth={true}
              label="Element"
              value={element || 'H'}
              onChange={e => {
                setElement(e.target.value)
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

        Max acceptable distance, Å
        <div className={s.selectDistanceContainer}>
          <div className={s.selectedDistance}>
            <TextField type="number"
                       variant="standard"
                       value={distance || ""}
                       onChange={e => {
                         let number = +e.target.value;
                         number = Math.max(minDistance, number);
                         number = Math.min(maxDistance, number);
                         console.log('number: ' + number);
                         setDistance(number);
                       }}
            />
          </div>
          <div className={s.selectDistance}>
            <Slider min={minDistance}
                    max={maxDistance}
                    step={distanceStep}
                    valueLabelDisplay="on"
                    sx={{color: "text.primary"}}
                    value={distance}
                    onChange={e => {
                      setDistance(e.target.value)
                    }}
            />
          </div>
        </div>

        <div className="buttons">
          <button type="submit">Get result</button>
          <button type="reset">Clean out</button>
        </div>
      </div>
    </>
  );
};

export default Accelerator;
