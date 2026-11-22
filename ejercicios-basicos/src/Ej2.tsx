// Contador con límites
// Un contador que va de 0 a 10, con botones para restar, sumar y reiniciar. 
// Nunca puede salirse del rango. Extra: deshabilitá cada botón cuando se llega al límite.
// Pista: Los botones aceptan la prop disabled. Y antes de sumar podés chequear if (valor < 10)

// Contador con límites (0 a 10) - useState
import { useState } from 'react';

export default function Ej2() {
  const [contador, setContador] = useState<number>(0);

  function sumar() {
    if (contador < 10) {
      setContador((c) => c + 1);
    }
  }

  function restar() {
    if (contador > 0) {
      setContador((c) => c - 1);
    }
  }

  function reiniciar() {
    setContador(0);
  }

  return (
    <div>
      <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '12px' }}>
        {contador}
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <button
          disabled={contador === 0}
          onClick={restar}
          style={{ padding: '6px 14px', fontSize: '16px', cursor: contador === 0 ? 'not-allowed' : 'pointer' }}
        >
          -
        </button>
        <button
          disabled={contador === 10}
          onClick={sumar}
          style={{ padding: '6px 14px', fontSize: '16px', cursor: contador === 10 ? 'not-allowed' : 'pointer' }}
        >
          +
        </button>
        <button
          onClick={reiniciar}
          style={{ padding: '6px 14px', fontSize: '16px', cursor: 'pointer' }}
        >
          Reiniciar
        </button>
      </div>

      {contador === 10 && (
        <p style={{ color: '#475569', marginTop: '12px', fontSize: '14px' }}>
          Llegaste al máximo
        </p>
      )}
    </div>
  );
}