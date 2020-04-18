import React from 'react';
import styled from 'styled-components';

const Radio = ({ changeFn, checked, children }) => (
  <>
    <label>
      <input type="radio" checked={checked} onChange={changeFn} />
      {children}
    </label>
  </>
);
export default Radio;
