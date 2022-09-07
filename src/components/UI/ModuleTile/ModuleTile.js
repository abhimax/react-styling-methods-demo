import React from 'react';
import styles2 from './ModuleTile.module.css';


const ModuleTile = props => {
  return (
    <div type={props.type} className={styles2['module-tile']} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default ModuleTile;
