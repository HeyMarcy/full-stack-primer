import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import CheeseList from '../components/cheese-list';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

const bluecheese = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
];
document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(
    <CheeseList cheese={bluecheese}/>, document.getElementById('app'))
);
