// CONVERSOR DE TEMPERATURA
// Un input donde se escriben grados Celsius y, debajo, el equivalente en Fahrenheit que se actualiza mientras se escribe.
// Fórmula: F = C * 9/5 + 32. Extra: si la temperatura supera los 30°C, mostrá "Hace calor".
// Pista: El valor del input es texto. Convertilo con Number(Celsius) antes de calcular. 
// Fahrenheit no necesita estado propio: se calcula a partir de Celsius en cada renderizado.

// Conversor de temperatura - Inputs controlados
import { useState } from 'react';
import type { ChangeEvent } from 'react';

export default function Ej4() {
  const [celsius, setCelsius] = useState<string>('');

  // Se calcula a partir de Celsius en cada renderizado (sin estado propio)
  const celsiusNumber = Number(celsius);
  const tieneValor = celsius.trim() !== '' && !isNaN(celsiusNumber);
  const fahrenheit = tieneValor ? (celsiusNumber * 9) / 5 + 32 : 0;

  function convertToFahrenheit(e: ChangeEvent<HTMLInputElement>) {
    setCelsius(e.target.value);
  }

  return (
    <div style={{ maxWidth: '320px' }}>
      <input
        type="text"
        value={celsius}
        onChange={convertToFahrenheit}
        placeholder="Grados Celsius"
        style={{
          width: '100%',
          padding: '8px 12px',
          borderRadius: '6px',
          border: '1px solid #cbd5e1',
          fontSize: '16px',
          boxSizing: 'border-box',
        }}
      />

      <div style={{ fontSize: '32px', fontWeight: 'bold', margin: '14px 0 6px 0' }}>
        {tieneValor ? `${fahrenheit} °F` : '0 °F'}
      </div>

      {tieneValor && celsiusNumber > 30 && (
        <p style={{ margin: 0, color: '#475569', fontSize: '15px' }}>
          Hace calor
        </p>
      )}
    </div>
  );
}