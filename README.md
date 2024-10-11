# Backend Restaurant

Este es un proyecto de backend para una aplicación de restaurante, desarrollado utilizando **Node.js** y **Express**. Este API permite gestionar un menú de alimentos, incluyendo operaciones de creación, lectura, actualización y eliminación (CRUD) para los ítems del menú.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js.
- **TypeScript**: Lenguaje de programación que es un superconjunto de JavaScript.
- **Prisma**: ORM (Object Relational Mapping) para interactuar con la base de datos.
- **PostgreSQL**: Sistema de gestión de bases de datos utilizado.

## Requisitos Previos

- Tener **Node.js** y **npm** instalados en tu máquina.
- Tener acceso a una base de datos **PostgreSQL**.
- Tener **Postman** o una herramienta similar para probar la API.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/backend-restaurant.git
   ```

2. Navega a la carpeta del proyecto:

   ```bash
   cd backend-restaurant
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura la conexión a tu base de datos en el archivo `.env` (si es necesario). Un ejemplo de conexión podría ser:

   ```plaintext
   DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_base_de_datos
   ```

## Ejecutar el Proyecto

Para iniciar el servidor, utiliza el siguiente comando:

```bash
npm run dev
```

El servidor debería estar corriendo en `http://localhost:3000`.


## Rutas de la API

Aquí tienes algunas de las rutas disponibles en la API:

### Obtener todos los ítems de comida

- **Método**: `GET`
- **Ruta**: `/food`
- **Descripción**: Obtiene una lista de todos los ítems de comida.

### Crear un nuevo ítem de comida

- **Método**: `POST`
- **Ruta**: `/food`
- **Descripción**: Crea un nuevo ítem de comida.
- **Cuerpo (Body)**:
  ```json
  {
    "name": "Nombre del plato",
    "price": 10.99,
    "description": "Descripción del plato"
  }
  ```

### Actualizar un ítem de comida

- **Método**: `PUT`
- **Ruta**: `/food/:id`
- **Descripción**: Actualiza un ítem de comida existente.
- **Cuerpo (Body)**:
  ```json
  {
    "name": "Nuevo nombre del plato",
    "price": 12.99,
    "description": "Nueva descripción del plato"
  }
  ```

### Eliminar un ítem de comida

- **Método**: `DELETE`
- **Ruta**: `/food/:id`
- **Descripción**: Elimina un ítem de comida por su ID.

## Pruebas

Puedes usar **Postman** para probar las rutas de la API. Asegúrate de que el servidor esté en funcionamiento antes de realizar las solicitudes.

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir un **issue** o hacer un **pull request**.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
