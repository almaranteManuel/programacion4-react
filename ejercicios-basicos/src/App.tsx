import Ej1 from './Ej1.tsx';
import Ej2 from './Ej2.tsx';
import Ej3 from './Ej3.tsx';
import Ej4 from './Ej4.tsx';
import Ej5 from './Ej5.tsx';
import Ej6 from './Ej6.tsx';
import Ej7 from './Ej7.tsx';

export default function App() {
  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '32px 16px', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ marginBottom: '32px', textAlign: 'center', borderBottom: '2px solid #e2e8f0', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '28px', color: '#1e293b', marginBottom: '8px' }}>
          Programación IV - Ejercicios Básicos de React
        </h1>
        <p style={{ color: '#64748b', fontSize: '16px' }}>
          Resolución completa de los 7 ejercicios prácticos ("React desde cero")
        </p>
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {/* Ejercicio 1 */}
        <section style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ marginTop: 0, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px' }}>
            Ejercicio 1: Componente Producto con Props
          </h2>
          <Ej1 />
        </section>

        {/* Ejercicio 2 */}
        <section style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ marginTop: 0, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px' }}>
            Ejercicio 2: Contador con Límites (0 a 10)
          </h2>
          <Ej2 />
        </section>

        {/* Ejercicio 3 */}
        <section style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ marginTop: 0, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px' }}>
            Ejercicio 3: Mostrar / Ocultar Contenido (JSX)
          </h2>
          <Ej3 />
        </section>

        {/* Ejercicio 4 */}
        <section style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ marginTop: 0, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px' }}>
            Ejercicio 4: Conversor Celsius a Fahrenheit
          </h2>
          <Ej4 />
        </section>

        {/* Ejercicio 5 */}
        <section style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ marginTop: 0, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px' }}>
            Ejercicio 5: Lista de Compras Dinámica
          </h2>
          <Ej5 />
        </section>

        {/* Ejercicio 6 */}
        <section style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ marginTop: 0, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px' }}>
            Ejercicio 6: Buscador y Filtro de Lenguajes en Tiempo Real
          </h2>
          <Ej6 />
        </section>

        {/* Ejercicio 7 */}
        <section style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ marginTop: 0, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px' }}>
            Ejercicio 7: Componente Producto con Oferta
          </h2>
          <Ej7 />
        </section>
      </main>
    </div>
  );
}