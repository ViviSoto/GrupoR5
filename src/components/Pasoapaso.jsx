import React from 'react';
import '../assets/styles/components/pasoapaso.scss';

const Pasoapaso = () => (
  <div className='pasos'>
    <div className='stepwizard'>
      <div className='stepwizard-row setup-panel'>
        <div className='stepwizard-step'>
          <a href='#step-1' type='button' className='btn btn-primary btn-circle'>1</a>
          <p>Step 1</p>
        </div>
        <div className='stepwizard-step'>
          <a href='#step-2' type='button' className='btn btn-default btn-circle' disabled='disabled'>2</a>
          <p>Step 2</p>
        </div>
        <div className='stepwizard-step'>
          <a href='#step-3' type='button' className='btn btn-default btn-circle' disabled='disabled'>3</a>
          <p>Step 3</p>
        </div>
      </div>
    </div>
  </div>
);

export default Pasoapaso;
