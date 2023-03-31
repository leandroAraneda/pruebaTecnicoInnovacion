# Prueba Técnica

La API inlcuye endpoints para registrar usuarios, inicio de sesión a través de tokens y actualización de la información en el perfil de usuario. Además, proporciona endpoints para obtener información sobre el usuario actualmente autenticado.

La API también incluye funcionalidades de autenticación, como la verificación de credenciales en el inicio de sesión, generar y revocar tokens de acceso, y verificar si un usuario está autenticado para acceder a rutas específicas.

Además, la API implementa medidas de seguridad, como encriptación de contraseñas y uso de tokens de autenticación, para garantizar que la información del usuario esté protegida contra posibles amenazas de seguridad.

## Requerimientos previos

Antes de poder ejecutar esta API, asegúrate de tener instalados los siguientes componentes en tu sistema:

- Node.js (v16 o superior)
- npm (v8 o superior)

## Instrucciones para ejecutar la API

1. Clona el repositorio:
git clone https://github.com/tuusuario/nombre-del-repositorio.git

2. Abre una terminal en el directorio del proyecto:
cd [nombre-proyecto]

3. Instala las dependencias de la API:
npm install

4. Inicia la API:
npm start

5. La API estará disponible en `http://localhost:3000`. Utiliza un cliente de API (por ejemplo, [Postman](https://www.postman.com/)) para interactuar con los endpoints de la API.

## Documentación de la API

Para conocer los endpoints y las funcionalidades de la API, consulta la documentación RAML disponible en `docs/`.
