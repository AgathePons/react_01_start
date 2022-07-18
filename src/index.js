import { render } from 'react-dom';
/**
 * if we want to import named exports + one default export from one file, we can write:
 * import exportDefaultName, { DireBonjour, DireAuRevoir } from './components/DireBonjour';
 */
import { DireBonjour, DireAuRevoir } from './components/DireBonjour';
import './style.css';

const App = () => (
  <div>

    <h1>Hello World!</h1>
    <p style={{ color: 'pink', backgroundColor: 'purple' }}>Trop stylé React</p>
    <DireBonjour prenom="Julien" nom="Delatour" age={42} />
    <DireBonjour prenom="Killian" nom="Allouard" age={12} />
    <DireBonjour prenom="Timéo" nom="Bernard" age={10} />
    <DireAuRevoir prenom="Camille" nom="Roublond" />
  </div>
);

render(<App />, document.getElementById('root'));
