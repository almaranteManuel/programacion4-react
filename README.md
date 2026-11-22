# Programación IV - Repositorio de Prácticas y Entregas (React)

Repositorio correspondiente a la cátedra de **Programación IV** (Tecnicatura Universitaria en Programación - UTN Paraná).

## Estructura del Repositorio

```text
programacion4-react/
   ejercicios-basicos/        (un proyecto Vite con los 7 ejercicios de "React desde cero")
   frontend-endpoints/        (las 8 prácticas de endpoints, cada una en su carpeta con el proyecto completo)
      practica1/
      practica2/
      practica3/
      practica4/
      practica5/
      practica6/
      practica7/
      practica8/
```

---

## 1. Ejercicios Básicos (`ejercicios-basicos`)

Proyecto Vite + React + TypeScript que contiene la resolución de los 7 ejercicios de la guía "React desde cero":

- `src/Ej1.tsx`: Componente Producto con desestructuración de props (`nombre`, `precio`, `stock`).
- `src/Ej2.tsx`: Contador numérico con límites inferior (0) y superior (10) y reinicio.
- `src/Ej3.tsx`: Tarjeta interactiva con toggle para mostrar/ocultar concepto de JSX.
- `src/Ej4.tsx`: Conversor reactivo de temperatura Celsius a Fahrenheit calculado al vuelo.
- `src/Ej5.tsx`: Lista de compras con inserción y eliminación dinámica de ítems.
- `src/Ej6.tsx`: Buscador y filtro en tiempo real sobre lista de tecnologías/lenguajes.
- `src/Ej7.tsx`: Componente Producto con renderizado condicional de etiqueta "Oferta!".
- `src/App.tsx`: Vista general que integra y presenta los 7 ejercicios con títulos identificatorios.

### Instrucciones de Ejecución

```bash
cd ejercicios-basicos
npm install
npm run dev
```

Para compilar y validar TypeScript:

```bash
npm run build
```

---

## 2. Frontend Endpoints (`frontend-endpoints`)

Cada carpeta contiene el proyecto completo y funcionando hasta dicha práctica inclusive:

- **`practica1/`**: Consulta y visualización del detalle de usuario (`GET /user/{id}`) al hacer clic en un ítem de la lista.
- **`practica2/`**: Formulario interactivo para la creación de un nuevo usuario (`POST /user`) con campos controlados en React y refresco de la lista.
- **`practica3/`**: Búsqueda en tiempo real por nombre (`GET /user/search/{name}`) con codificación de URI y botón para limpiar/recargar el listado.
- **`practica4/`**: Eliminación de usuarios (`DELETE /user/{id}`) con diálogo de confirmación y actualización reactiva de la lista en memoria.
- **`practica5/`**: Código documentado con comentarios explicativos sobre DTOs, casting numérico y ciclo de vida de estados, más limpieza de estilos iniciales.
- **`practica6/`**: Filtro alternable para listar "Todos" o "Solo mayores de edad" (`GET /user_mayores` vs `GET /users`).
- **`practica7/`**: Identificación y saludo del usuario autenticado actual con sus roles asignados (`GET /user/me/id` -> `GET /user/{id}`).
- **`practica8/`**: Persistencia de sesión con `localStorage`, callback `onUnauthorized` para manejo centralizado de respuestas HTTP 401 (sesión vencida) y alineación de endpoints con el backend.

> **Nota:** La práctica 9 no lleva carpeta de código ya que se responde en el cuestionario de la cátedra.

### Cómo correr una práctica

Necesitan la API de clase `clase-1-sqlmodel` corriendo en `http://localhost:8000`:

```bash
# desde la carpeta clase-1-sqlmodel
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Y después, en la práctica:

```bash
cd frontend-endpoints/practica8
copy .env.example .env     # VITE_API_URL=http://localhost:8000
npm install
npm run dev
```

Abrir [http://localhost:5174](http://localhost:5174/) (usar `localhost`, no `127.0.0.1`).

Usuarios de prueba (contraseña `123`):

| Email | Rol | Puede |
|---|---|---|
| `mgomez@email.com` | ADMIN | ver, crear y borrar usuarios |
| `sfer@email.com` | REGULAR | solo ver (crear y borrar responden 403) |

Para compilar y verificar tipos:

```bash
npm run build
```

## 3. Práctica 9.

| Qué | Cantidad |
|---|---:|---|
| `import.meta.env.VITE_API_URL` | 46 usos en 16 archivos |
| `Authorization: \`Bearer ${token}\`` | 38 usos en 8 archivos |
| `!respuesta.ok` o `!response.ok` | 23 usos en 15 archivos |
| `respuesta.status === 401` | 22 estados: 7 de loading y 15 de error |


Por ejemplo, si el backend cambia el formato del encabezado de autenticación, hay que modificar 7 construcciones de `Authorization` dentro de [`UserList.tsx`]. Como TypeScript trata esos encabezados como strings, puede pasar el build aunque quede una llamada sin el formato correcto y el backend la rechace.

La solución propuesta para el paso 9 es extraer esas responsabilidades:

- Un único `apiFetch` debe construir la URL, agregar el token al encabezado, revisar `response.ok` y centralizar la gestión del `401`.
- Un hook `useFetch` debe centralizar los estados de carga y error.
- Cada componente puede consumir esas dos abstracciones sin repetir lógica de red.

De esta manera, un cambio posterior en la URL, el encabezado del token o el manejo de una sesión vencida puede concentrarse en pocos lugares en vez de modificarse en cada pedido.
