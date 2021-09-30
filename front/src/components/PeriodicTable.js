import React, {useEffect} from 'react';
import s from '../css/periodicTable.module.css';
import useWindowSize from "../hooks/useWindowSize";
import {Switch} from "@mui/material";
import {createPortal} from "react-dom";

const PeriodicTable = ({setElement, visible, setVisible}) => {

  useEffect(() => {

    document.body.style.overflow = visible ? 'hidden' : '';

  }, [visible]);

  return !visible ? null : createPortal(
    <div className={s.container} onClick={e => {
      if(e.target === e.currentTarget) setVisible(false);
      e.stopPropagation();
    }}>
      <div className={s.periodicTable} onClick={handleTableClick}>
        <div>
          <div className={s.s}>
            <div>H</div>
            <div>Li</div>
            <div>Na</div>
            <div>K</div>
            <div>Rb</div>
            <div>Cs</div>
            <div>Fr</div>
          </div>
          <div className={s.s}>
            <div>Be</div>
            <div>Mg</div>
            <div>Ca</div>
            <div>Sr</div>
            <div>Ba</div>
            <div>Ra</div>
          </div>
          <div className={s.d}>
            <div>Sc</div>
            <div>Y</div>
            <div>-</div>
            <div>-</div>
          </div>
          <div className={s.d}>
            <div>Ti</div>
            <div>Zr</div>
            <div>Hf</div>
            <div>Rf</div>
          </div>
          <div className={s.d}>
            <div>V</div>
            <div>Nb</div>
            <div>Ta</div>
            <div>Db</div>
          </div>
          <div className={s.d}>
            <div>Cr</div>
            <div>Mo</div>
            <div>W</div>
            <div>Sg</div>
          </div>
          <div className={s.d}>
            <div>Mn</div>
            <div>Tc</div>
            <div>Re</div>
            <div>Bh</div>
          </div>
          <div className={s.d}>
            <div>Fe</div>
            <div>Ru</div>
            <div>Os</div>
            <div>Hs</div>
          </div>
          <div className={s.d}>
            <div>Co</div>
            <div>Rh</div>
            <div>Ir</div>
            <div>Mt</div>
          </div>
          <div className={s.d}>
            <div>Ni</div>
            <div>Pd</div>
            <div>Pt</div>
            <div>Ds</div>
          </div>
          <div className={s.d}>
            <div>Cu</div>
            <div>Ag</div>
            <div>Au</div>
            <div>Rg</div>
          </div>
          <div className={s.d}>
            <div>Zn</div>
            <div>Cd</div>
            <div>Hg</div>
            <div>Cn</div>
          </div>
          <div className={s.p}>
            <div>B</div>
            <div>Al</div>
            <div>Ga</div>
            <div>In</div>
            <div>Ti</div>
            <div>Uut</div>
          </div>
          <div className={s.p}>
            <div>C</div>
            <div>Si</div>
            <div>Ge</div>
            <div>Sn</div>
            <div>Rb</div>
            <div>Fl</div>
          </div>
          <div className={s.p}>
            <div>N</div>
            <div>P</div>
            <div>As</div>
            <div>Sb</div>
            <div>Bi</div>
            <div>Uup</div>
          </div>
          <div className={s.p}>
            <div>O</div>
            <div>S</div>
            <div>Se</div>
            <div>Te</div>
            <div>Po</div>
            <div>Lv</div>
          </div>
          <div className={s.p}>
            <div>F</div>
            <div>Cl</div>
            <div>Br</div>
            <div>I</div>
            <div>At</div>
            <div>Uus</div>
          </div>
          <div className={s.p}>
            <div>He</div>
            <div>Ne</div>
            <div>Ar</div>
            <div>Kr</div>
            <div>Xe</div>
            <div>Rn</div>
            <div>Uuo</div>
          </div>
        </div>
        <div className={s.f}>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
          <div>
            <div>La</div>
            <div>Ac</div>
          </div>
        </div>
      </div>
    </div>
    , document.body
  );

  function handleTableClick(e) {
    setElement(e.target.innerText);
    setVisible(false);
  }
};

export default PeriodicTable;
