import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './components/Layout.jsx'

window.onload = function(){
  ReactDOM.render(
    <Layout />,
    document.getElementById('app')
  );
}

