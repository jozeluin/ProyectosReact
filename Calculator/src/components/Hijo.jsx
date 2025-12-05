// Componente Hijo
export default function Hijo({ onCambioNombre }) {
  const handleClick = () => {
    onCambioNombre('Pepito'); // Llama a la función padre y pasa el argumento
  };

  return (
    <button onClick={handleClick}>
      Actualizar nombre en el padre
    </button>
  );
}