import { render } from 'react-dom';

const DireBonjour = () => {
  return (
    <p style={{ color: 'purple', backgroundColor: 'pink' }}>
      Bonjour Gontrand
    </p>
  )
};

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p style={{ color: 'pink', backgroundColor: 'purple' }}>Trop stylé React</p>
      <DireBonjour />
      <DireBonjour />
    </div>
  )
};

render(<App />, document.getElementById('root'));