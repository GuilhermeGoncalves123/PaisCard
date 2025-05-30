// Componente funcional PaisCard que recebe dados de um país como props
const PaisCard = ({nome, capital, continente, populacao, bandeira}) =>{
    return (
         // Container do cartão com a classe CSS 'card'
        <div className="card">
        <img src={bandeira} alt={`Bandeira de ${nome}`} className="bandeira"/>
        <h2>{nome}</h2>
        <p><strong>Capital:</strong> {capital}</p>
        <p><strong>Continente:</strong> {continente}</p>
        <p><strong>População:</strong> {populacao.toLocaleString()}</p>
        </div>
    );
};

export default PaisCard;