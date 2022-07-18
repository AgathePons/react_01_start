import { render } from 'react-dom';
import { DireBonjour, DireAuRevoir } from './components/DireBonjour';

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p style={{ color: 'pink', backgroundColor: 'purple' }}>Trop stylé React</p>
      <DireBonjour prenom="Julien" nom="Delatour" age={ 42 } />
      <DireBonjour prenom="Killian" nom="Allouard" age={ 12 } />
      <DireBonjour prenom="Timéo" nom="Bernard" age={ 10 } />
      <DireAuRevoir prenom="Camille" nom="Roublond" />
    </div>
  )
};

render(<App />, document.getElementById('root'));