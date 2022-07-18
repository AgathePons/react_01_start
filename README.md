# Start React

## Vocabulaire

Les mots sont importants.

## Le JSX

On appelle JSX ce genre de truc :

```javascript
 <div id="monDiv">
    Bonjour les amis
    <span style={{ color: 'pink', backgroundColor: 'yellow' }}>
        C'est beau la vieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    </span>
    <DireBonjour prenom="Timéo" nom="Bertrand" />
    <DireBonjour prenom="Kilian" nom="Bertrand" />
    <DireAurevoir prenom="Erwan" nom="Bertrand" />
    <DireBonjour prenom="Noé" nom="Bertrand" />
</div>
```

On pourrait être tenté de croire que c'est presque du HTML, a vrai dire, c'est plus proche du Javascript. C'est un sucre syntaxique qui va nous permettre décrire nos interfaces de façon simple, mais derrière (grâce a Babel), ca va devenir ce genre de truc chelou :

```javascript
React.createElement(
    "div", 
    null,
    "Bonjour ",
    prenom,
    " ",
    nom,
    age < 18 && React.createElement("span", null, "Va faire tes devoirs")
);
```

On appellera expression JSX, un petit paté de JSX. Par exemple :

```javascript
const monDiv = <div>salut les amis</div>;
```

Au lieu d'expression JSX, on pourra aussi employer les termes :

- bloc de JSX
- bout de JSX
- noeud JSX

Constatons que pour l'instant, nous n'avons pas appelé de fonction

## Les composants

On appelle composant, une fonction qui renvoie du JSX.

```javascript
function App() {
    return (
        <div>
            salut les amis
        </div>
    );
}
```

## Le rendu

Pour charger un element JSX dans le DOM, on utilise la fonction render de react-dom :

```javascript
import { render } from 'react-dom';

render(
    <App />, // <- une expression jsx
    document.getElementById('root') // le noeud DOM ou construire l'appli
);
```
