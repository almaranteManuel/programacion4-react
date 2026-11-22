// Creá un componente Producto que reciba nombre, precio y stock, y mostralo tres veces
// con datos distintos. Si el stock es 0, mostrar "Sin stock"
// Pista: Desestrcturá las props en la firma: function Producto({ nombre, precio, stock }: { nombre, precio, stock })
// Para el stock usá un ternario: stock === 0 ? ... : ...

// Tarjetas de producto - Props
interface ProductoProps {
  nombre: string;
  precio: number;
  stock: number;
}

// 1. Desestructurar las props en la firma: function Producto({ nombre, precio, stock })
function Producto({ nombre, precio, stock }: ProductoProps) {
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
      <p style={{ margin: '0 0 8px 0', fontWeight: '500' }}>${precio}</p>
      <p style={{ margin: 0, color: stock === 0 ? '#dc2626' : '#475569' }}>
        {stock === 0 ? 'Sin stock' : `Stock: ${stock} unidades`}
      </p>
    </div>
  );
}

// 3. Mostrar el componente tres veces con datos distintos
export default function Ej1() {
  return (
    <div>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
        <Producto nombre="Teclado" precio={45000} stock={12} />
        <Producto nombre="Mouse" precio={18000} stock={0} />
        <Producto nombre="Monitor" precio={320000} stock={3} />
      </div>
    </div>
  );
}