//LISTA DE COMPRAS

// Lista de compras - Listas y estado
import { useState } from 'react';
import type { ChangeEvent } from 'react';

interface Producto {
  id: number;
  name: string;
}

export default function Ej5() {
  const [producto, setProducto] = useState<string>('');
  const [lista, setLista] = useState<Producto[]>([]);

  function manejarCambio(e: ChangeEvent<HTMLInputElement>) {
    setProducto(e.target.value);
  }

  function agregarItem() {
    if (producto.trim() === '') return;

    const newItem: Producto = {
      id: Date.now(),
      name: producto.trim(),
    };

    setLista([...lista, newItem]);
    setProducto('');
  }

  function eliminarItem(id: number) {
    setLista(lista.filter((i) => i.id !== id));
  }

  return (
    <div style={{ maxWidth: '400px' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          value={producto}
          onChange={manejarCambio}
          type="text"
          placeholder="Ej: yerba"
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            fontSize: '15px',
          }}
        />
        <button
          onClick={agregarItem}
          style={{
            padding: '8px 16px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            backgroundColor: '#f1f5f9',
            cursor: 'pointer',
            fontSize: '15px',
          }}
        >
          Agregar
        </button>
      </div>

      {lista.length === 0 ? (
        <p style={{ color: '#64748b', margin: 0 }}>No hay nada para comprar</p>
      ) : (
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          {lista.map((item) => (
            <li key={item.id} style={{ margin: '8px 0' }}>
              <span style={{ marginRight: '10px' }}>{item.name}</span>
              <button
                onClick={() => eliminarItem(item.id)}
                style={{
                  padding: '2px 8px',
                  borderRadius: '4px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}