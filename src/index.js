import { render } from 'react-dom';

const DireBonjour = ({prenom, nom, age}) => {
  return (
    <p style={{ color: 'purple', backgroundColor: 'pink' }}>
      Bonjour {prenom} {nom} !
      { age < 18 && <span>Va dans ta chambre</span> }
    </p>
  )
};

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p style={{ color: 'pink', backgroundColor: 'purple' }}>Trop stylé React</p>
      <DireBonjour prenom="Timéo" nom="Delatour" age={ 42 } />
      <DireBonjour prenom="Killian" nom="Allouard" age={ 12 } />
      <DireBonjour prenom="Killian" nom="Bernard" age={ 10 } />
    </div>
  )
};

render(<App />, document.getElementById('root'));