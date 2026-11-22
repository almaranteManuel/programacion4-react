// Buscador - Filtrado
import { useState } from 'react';
import type { ChangeEvent } from 'react';

const lenguajesIniciales = [
  'JavaScript',
  'TypeScript',
  'Java',
  'Python',
  'C#',
  'PHP',
  'Ruby',
  'Go',
  'Rust',
  'HTML',
  'CSS',
];

export default function Ej6() {
  const [busqueda, setBusqueda] = useState<string>('');

  function buscarPalabra(e: ChangeEvent<HTMLInputElement>) {
    setBusqueda(e.target.value);
  }

  // Filtrado insensible a mayúsculas y minúsculas usando includes
  const lenguajesFiltrados = lenguajesIniciales.filter((lenguaje) =>
    lenguaje.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '350px' }}>
      <input
        value={busqueda}
        onChange={buscarPalabra}
        type="text"
        placeholder="Buscar lenguaje..."
        style={{
          width: '100%',
          padding: '8px 12px',
          borderRadius: '6px',
          border: '1px solid #cbd5e1',
          fontSize: '15px',
          boxSizing: 'border-box',
          marginBottom: '12px',
        }}
      />

      <p style={{ margin: '0 0 10px 0', color: '#475569', fontSize: '15px' }}>
        {lenguajesFiltrados.length} resultados
      </p>

      <ul style={{ paddingLeft: '20px', margin: 0 }}>
        {lenguajesFiltrados.map((lenguaje) => (
          <li key={lenguaje} style={{ margin: '4px 0' }}>
            {lenguaje}
          </li>
        ))}
      </ul>
    </div>
  );
}