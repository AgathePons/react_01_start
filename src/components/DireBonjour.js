// named exports, have to be imported by their names
export const DireBonjour = ({ prenom, nom, age }) => (
  <p style={{ color: 'purple', backgroundColor: 'pink' }}>
    Bonjour {prenom} {nom} !
    {/* comparison operators way */}
    { age < 18 && <span>Va dans ta chambre !</span> }
    {/* ternary way */}
    { age < 18 ? <span>Et finis tes devoirs !</span> : <span>Prends donc une bière !</span> }
  </p>
);

export const DireAuRevoir = ({ prenom, nom, age }) => (
  <p style={{ color: 'purple', backgroundColor: 'pink' }}>
    Au revoir {prenom} {nom} !
  </p>
);

/**
 * We can also just declare without export, and export at the end of the file:
 * const Blablabla = () => { blablabla };
 * export Blablabla;
 */

/**
 * A default export is unique for one file, it refers to the file, so it can be imported with another name
 * export default DireBonjour;
 */
