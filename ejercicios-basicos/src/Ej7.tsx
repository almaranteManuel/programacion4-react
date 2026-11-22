// Tipar con TypeScript: interface ProductoProps con prop opcional oferta?: boolean
interface ProductoProps {
  nombre: string;
  precio: number;
  stock: number;
  oferta?: boolean; // Prop opcional según la consigna y pista
}

function Producto({ nombre, precio, stock, oferta }: ProductoProps) {
  return (
    <div
      style={{
        border: '1px solid #cbd5e1',
        borderRadius: '8px',
        padding: '16px',
        minWidth: '160px',
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}
    >
      <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>{nombre}</h3>
      {oferta && (
        <p
          style={{
            margin: '0 0 8px 0',
            color: '#16a34a',
            fontWeight: 'bold',
            fontSize: '14px',
          }}
        >
          ¡Oferta!
        </p>
      )}
      <p style={{ margin: '0 0 8px 0', fontWeight: '500' }}>${precio}</p>
      <p style={{ margin: 0, color: stock === 0 ? '#dc2626' : '#475569' }}>
        {stock === 0 ? 'Sin stock' : `Stock: ${stock} unidades`}
      </p>
    </div>
  );
}

export default function Ej7() {
  return (
    <div>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
        <Producto nombre="Teclado" precio={45000} stock={12} oferta={true} />
        <Producto nombre="Mouse" precio={18000} stock={0} />
        <Producto nombre="Monitor" precio={320000} stock={3} oferta={true} />
      </div>
    </div>
  );
}