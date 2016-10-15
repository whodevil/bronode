import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function renderPipeline(newState) {
  ReactDOM.render(
    <App state={newState} />,
    document.getElementById('root')
  );
};

fetch('/hello', {
  method: 'get'
}).then((response) => {
  return response.text();
}).then((body) => {
  console.log(body);
  renderPipeline(body);
});