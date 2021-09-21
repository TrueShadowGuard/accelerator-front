import React from 'react';
import styles from '../css/home.module.css';
import {NavLink} from "react-router-dom";
import Accelerator from "./Accelerator";
import NavLinkStyled from "../components/NavLinkStyled";
import bg from "../pictures/planet.jpg";

function sendTestRequest() {
  console.log('BrakePoint - 1');
  fetch('http://localhost:8080/chemistry/test-json', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      test: 'test'
    })
  }).then(response =>{
    console.log('BrakePoint - 2');
    const json = response.json();
    console.log('Успех:', JSON.stringify(json));
    let testResult = document.getElementById('testResult');
    testResult.innerHTML =JSON.stringify(json);
  })
}

const Home = () => {
  return (
    <>
      <img src={bg}  alt="" className="planets"/>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Accelerator</h2>
            <p>
              Increases the speed of processing PDB files.
              It computes the length between the desired ligand and the nearest atom.
              As a result, we have a list of binding sites and long links.
            </p>
            <NavLinkStyled to="/accelerator" text="Accelerate up"/>
          </div>
          <div className="col-md-4">
            <h2>Counter</h2>
            <p>
              Calculates the content of all amino acids in the
              amino acid sequence of the introduced protein.
              The prevailing amino acid is determined.
              The result is displayed in the form of a diagram.
            </p>
            <NavLinkStyled to="/counter" text="Count up"/>
          </div>
          <div className="col-md-4">
            <h2>Analyzer</h2>
            <p>
              Analyzes the entered amino acid sequence.
              Calculates the fidelity of the bonds of the selected
              ligand with the given protein.
              Indicates hypothetical binding sites and their amino acid composition.
            </p>
            <NavLinkStyled to="/analyzer" text="To analyze"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h2>Mystery</h2>
            <p>
              I myself do not yet know what will come of this in the future,
              but so far the literal lasting is simply converted to amino acid.
            </p>
            <NavLinkStyled to="/mystery" text="Go to mystery"/>
          </div>
        </div>

        <button onClick={sendTestRequest}>Test Button</button>
        <span id="testResult"></span>
        <hr/>
        <footer>
          <p>&#9400; &#9413; Product created by @ Khrustalev & Kasko, 2019</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
