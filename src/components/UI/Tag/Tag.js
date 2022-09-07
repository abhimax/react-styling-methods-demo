import React from 'react';
import styled from 'styled-components';
import styles from './Tag.module.css';


const Tag = props => {
  return (
    <div type={props.type} className={styles.tag} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Tag;
