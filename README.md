# Banco Frontend

Este proyecto fue creado con el fin de ejecutar una prueba técnica para la empresa Seiza.
El código está desarrollado usando el framework [Angular](https://github.com/angular/angular-cli) en su versión 11.2.19.

A su vez, el entorno de desarrollo fue:
- [NodeJS](https://nodejs.org/en), versión 14.21.3.
- [NPM](https://www.npmjs.com), versión 6.14.18.

Para las pruebas unitarias:
- [Karma](https://karma-runner.github.io/latest/index.html), versión 6.1.
- [Jasmine](https://jasmine.github.io), versión 3.6.

En librerías adicionales, se añadieron:
- [Angular Material](https://v11.material.angular.io), versión 11.2.12.
- [Toastr](https://v11.material.angular.io), versión 13.2.1 (compatible con versión 11 de Angular).

## Instrucciones y alcances
Inicialmente, hay que asegurar el entorno de desarrollo antes de arrancar la aplicación. Si hay versiones más nuevas que las mencionadas, puede llegar a ocasionar problemas.

Para instalar las dependencias mencionadas anteriormente, hay que ejecutar el comando `npm install` en la terminal.

Este proyecto está pensando para escritorio y dispositivos móviles. No es un diseño demasiado ostentoso, pero cumple la función de proporcionar lo principal para el usuario desde un tamaño de 360px de ancho hasta el que quieran.

## Control de errores
El control de errores se maneja directamente desde el observable. Una vez se identifica un error en la solicitud, este entra al callback "error", y ejecuta una función del **Toastr**, "error" específicamente, que muestra un popup en rojo indicando el error en cuestión.

## Unit test
Para las pruebas unitarias, se desarrollaron todas las requeridas para alcanzar un mínimo de coverage del 80% en todos los puntos y cubriendo las necesidades básicas de cada componente.

## Según lo solicitado
- Se añade una interfaz de login, el cual solicita Rut y Contraseña. La contraseña es requerida, **pero debe llenarse de igual forma**, emulando la situación de ingresar a tu portal bancario.

- Existe validación para usuario autenticado mediante session storage. Si no está autenticado (mediante login), enviará automáticamente a la interfaz de inicio de sesión.

- Para la visualización de datos del cliente, se solicitó mostrar: nombre, apellido y correo.
    - El correo se sitúa en el `Toolbar`, el cual, al presionarlo, despliega un menú con la opción para cerrar sesión.
    - El nombre y apellido se pueden visualizar directamente en el contenedor de la página.

- El listado de productos contiene un skeleton animado mientras encuentra la información de productos del usuario de acuerdo al endpoint requerido.

- La información de productos muestra el tipo de producto acompañado del número, la divisa y un botón con la acción para ver el detalle.

- La acción "Ver detalle" abre un `MatDialog`, el cual muestra un título correspondiente junto al número de cuenta y sus montos.
    - Los montos tienen un **pipe** llamado `currencyFormat`, el cual, dependiendo la divisa, muestra un formato u otro.

- Hay un regalo en un botón, espero que les haga gracia :)

