import React from 'react';
import s from '../css/accelerator.module.css';

const Accelerator = () => {
  return (
    <div className="container">
      <p>Copy and paste the PDB file:</p>
      <div className="dixTextArea">
        <textarea name="text" rows="12" placeholder="Enter all dates from the PDB file:"/>
        <p className="buttons">
          <button type="submit">Get result</button>
          <button type="reset">Clean out</button>
        </p>
      </div>
      <div className="divSelect">
        <p>The maximum distance to the atom:
          <input type="range" min="0" max="10" name="maxCount"
                 onChange="document.getElementById('rangeValue').innerHTML = this.value;"/>
          <span id="rangeValue">5</span>Å
        </p>
        <p className="selectedDate">
          <select name="element">
            <option value="AR">Ar (argon)</option>
            <option value="KR">Kr (krypton)</option>
            <option value="XE">Xe (xenon)</option>
            <optgroup label="Metals">
              <option value="CO">Co (cobalt)</option>
              <option value="CA">Ca (calcium)</option>
              <option value="K">K (potassium)</option>
              <option value="LI">Li (lithium)</option>
              <option value="MG">Mg (magnesium)</option>
            </optgroup>
            <optgroup label="Others">
              <option value="S">S (sulfur)</option>
              <option value="CL">Cl (chlorine)</option>
            </optgroup>
          </select>
        </p>
      </div>
    </div>
  );
};

export default Accelerator;
