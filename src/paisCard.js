
const PaisCard = ({nome, capital, continente, populacao, bandeira}) =>{
    return (
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