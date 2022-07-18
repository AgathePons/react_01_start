import InfosText from './InfosText';

const InfosBloc = () => (
  <div className="infobloc">
    <h2>Infos</h2>
    {/**
     * With the InfosBloc component, we do transclusion. That means that we include a document
     * or a part of a document in an other document (in React context, document means component).
     * In this case, InfosBloc contains an other component named InfosBloc.
    */}
    <InfosText />
  </div>
);

export default InfosBloc;
