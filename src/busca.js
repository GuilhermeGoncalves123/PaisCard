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

export default Busca;
