// Global import
import "core-js/stable";
import "regenerator-runtime/runtime";

import ReactDOM from 'react-dom'

import App from './App'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks')
  worker.start()
}

ReactDOM.render(<App />, document.getElementById('root'))