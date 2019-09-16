import React from 'react';
import style from './Title.style.css';

const Title = props => <h1 className={style.TodoTitle}>Things to do: {props.numberOfThings}</h1>;

export default Title;