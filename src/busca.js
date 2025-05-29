// Componente funcional Busca que recebe uma função 'onBuscar' como prop
const Busca = ({ onBuscar }) => {
  return (
    <div className="busca">
      <input
        type="text"
        placeholder="Buscar país..."
        onChange={(e) => onBuscar(e.target.value)}
      />
    </div>
  );
};

export default Busca; // Exporta o componente para ser usado em outros arquivos
