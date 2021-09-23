import React, {useState} from 'react';
import s from '../css/accelerator.module.css';
import useWindowSize from "../hooks/useWindowSize";
import PeriodicTable from "../components/PeriodicTable";
import {FormControl, MenuItem, Select} from "@mui/material";
import TableSvg from '../pictures/periodic-table.svg';

const elements = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt"];

const Accelerator = () => {

  const [element, setElement] = useState('H');

  const [isTableVisible, setIsTableVisible] = useState();

  const {width} = useWindowSize();

  return (
    <>
      <PeriodicTable visible={isTableVisible} setElement={(el) => {
        setIsTableVisible(false);
        setElement(el);
      }}/>
      <div className="container">
        <p>Copy and paste the PDB file:</p>
        <div className="dixTextArea">
          <textarea name="text" rows="12" placeholder="Enter all dates from the PDB file:"/>
          <p className="buttons">
            <button type="submit">Get result</button>
            <button type="reset">Clean out</button>
          </p>
        </div>
        <div className={s.selectElementContainer}>
          <FormControl>
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
          <img alt="Select element button"
               src={TableSvg}
               className={s.selectElementButton}
               width={40}
               height={40}
               onClick={() => setIsTableVisible(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Accelerator;
