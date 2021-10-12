import React from 'react';

const Mystery = () => {
  return (
    <div className="container">
      <p>Copy and paste the amino acid sequence:</p>
      <form method="post">
        <div className="divTextArea">
          <textarea name="text" rows="12" placeholder="Enter all data from the amino acid sequence:"/>
        </div>
        <input type="hidden"/>
        <p className="buttons">
          <button type="submit">Get result</button>
          <button type="reset">Clean out</button>
        </p>
      </form>
    </div>
  );
};

export default Mystery;
