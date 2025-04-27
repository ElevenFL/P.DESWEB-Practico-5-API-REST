# P.DESWEB-Practico-5-API-REST

## Características REST

- Endpoints claros: `/productos`, `/productos/:id`.
- Uso correcto de métodos HTTP: GET, POST, PUT, DELETE.
- Respuestas en JSON.
- Stateless: Cada petición se maneja de forma independiente.

## Diferencias con la aplicación tradicional de 3 capas

| Aspecto | Aplicación 3 Capas Tradicional | API REST 3 Capas |
|--------|-------------------------------|-----------------|
| Propósito | Aplicación web | Servicio de datos |
| Comunicación | HTML renderizado | JSON como respuesta |
| Interacción | Servidor genera vistas | Frontends consumen datos |
| Métodos HTTP | Generalmente solo GET/POST | GET, POST, PUT, DELETE |
| Escalabilidad | Limitada a navegador | Accesible desde cualquier cliente |

En esta API REST seguimos respetando las 3 capas:  
- **Data:** Repositorio (`Datos/`)  
- **Business:** Servicio (`Negocio/`)  
- **Controller:** Definición de rutas y respuestas (`Front/`)

