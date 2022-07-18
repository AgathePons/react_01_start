import { render } from 'react-dom';
/**
 * if we want to import named exports + one default export from one file, we can write:
 * import exportDefaultName, { DireBonjour, DireAuRevoir } from './components/DireBonjour';
 */
import { DireBonjour, DireAuRevoir } from './components/DireBonjour';
import InfosBloc from './components/InfosBloc';
import './style.css';

const App = () => (
  <div>

    <h1>Hello World!</h1>
    <p style={{ color: 'white', backgroundColor: 'darkblue' }}>Trop stylé React</p>
    <DireBonjour prenom="Julien" nom="Delatour" age={42} />
    <DireBonjour prenom="Killian" nom="Allouard" age={12} />
    <DireBonjour prenom="Timéo" nom="Bernard" age={10} />
    <DireAuRevoir prenom="Camille" nom="Roublond" />
    {/**
     * With the InfosBloc component, we do transclusion. That means that we include a document
     * or a part of a document in an other document (in React context, document means component).
     * In this case, InfosBloc contains an other component named InfosBloc.
    */}
    <InfosBloc infoTitle="Titre de l'info">
      Youhou I am a <strong>child</strong>!!
    </InfosBloc>
    <InfosBloc infoTitle="Autre info">
      Hey, this is the same component, but an other child, wahou, awesome!<br />
      <button type="button">Click if you think it's awesome!!</button>
    </InfosBloc>

  </div>
);

render(<App />, document.getElementById('root'));
