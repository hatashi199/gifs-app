# GifsApp

Este es mi primer proyecto realizado en Angular, para poner en práctica lo aprendido hasta el momento de forma autodidacta. Se trata de una pequeña app donde a través de una búsqueda realizada por el usuario, me muestre 10 gifs relacionados con la búsqueda, guardando las búsquedas realizadas en un historial.

## Variables de entorno

Utilizo do varibles de entorno que son las siguientes:

```typescript
	GIFS_API_KEY: 'your_giphy_api_key',
	SEARCH_GIFS_URL: 'https://api.giphy.com/v1/gifs/search'
```

Una es la api key de Giphy y el otro es el endpoint utilizado para realizar la consulta a la API.

## Servidor de desarrollo

Para lanzar la aplicación en modo desarrollo debes tener Angular CLI instalado y lanazar el comando `ng serve` y abrir en el navegador la url `http://localhost:4200`.

## Generar build

Para generar el build de la app y llevarlo a producción se utiliza la linea de comandos del Angula CLI `ng build`.
