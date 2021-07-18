# CoordinadoraServiceStatus 
# Desarrolador encargado: Andrés Alzate Echeverry :)
# COORDINADORA ESTADO DE SERVICIOS | DOCUMENTACIÓN:
Documentación [Doumentación de Agular](https://angular.io/docs)


## Ejecutar información sobre las versiones Angular:
````sh
$ ng version
````


## Instalación:
**Para compilar el proyecto se necesita tener en cuenta lo siguiente:**

1. Instalar NodeJs última versión actual 14.17 + en su versión TLS [NodeJS Descarga](https://angular.io/docs)
2. Instalar Angular CLI en una termina nodejs o cmd [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.
````sh
$ npm install -g @angular/cli
````
3. Instalar Visual Estudio Code [VSCode Descarga](https://code.visualstudio.com/)
4. Descargar la carpeta del proyecto y abrirlo en Visual Studio code
5. Ejecutar el siguiente comando para instalar las dependencias del package (Se creará una carpera "node_modules")
````sh
$ npm install
````


## Compilación:
1. Ejecutar el siguiente comando para compilar el proyecto:
````sh
$ ng serve
````
2. Abrir en el navegador el puerto `http://localhost:4200/`
También puede saltar este paso y ejecutar el siguiente comando para que se abra el navegador automáticamente:
````sh
$ ng serve --open
````
	***El comando `ng serve` básico ejecutará por defecto el ambiente de desarrolo; puede compilar otros ambientes con los comandos a continuación***
### Ambientes locales (Comandos Compilación):
| AMBIENTE | COMANDO |
| ------ | ----- | ----- | ------ | ----- | ----- | ------ |
| DESARROLLO     | `ng serve --configuration dev`          |
| PRUEBAS        | `ng serve --configuration qa`           |
| PRE PRODUCCIÓN | `ng serve --configuration coordinadora` |
| PRODUCCIÓN     | `ng serve --configuration production`   |


## Transpilación (Build):
1. Ejecutar el siguiente comando para transpilar(Realizar el build) el proyecto:
````sh
$ ng build
````
	***El comando `ng build` básico ejecutará por defecto el Build para el ambiente de desarrolo; puede realizar el build a otros ambientes con los comandos a continuación***
### Ambientes locales (Comandos Build):
| AMBIENTE | COMANDO |
| ------ | ----- | ----- | ------ | ----- | ----- | ------ |
| DESARROLLO     | `ng build --configuration dev`          |
| PRUEBAS        | `ng build --configuration qa`           |
| PRE PRODUCCIÓN | `ng build --configuration coordinadora` |
| PRODUCCIÓN     | `ng build --configuration production`   |


## Pruebas unitarias/cobertura:
1. Ejecutar el siguiente comando para compilar el apartado de pruebas unitarias
[Karma](https://karma-runner.github.io).
````sh
$ ng test --codeCoverage --watch 
````
o
````sh
$ ng test --codeCoverage
````

## Alias
**Se crearon unos Alias/Paths en el archivo tsconfig.json**
Estos Alias nos permiten acceder en las importaciones a carpetas de interés mucho más directo, fácil y mantenible, Ejemplo:
`import { environment } from '@env/environment';`
`import { ... } from '@shared/...';`

## Dependencias:
- Sass (Sintaxis SCSS: **Se usa la misma sintaxis que el css normal**)
[Sass Documentación](https://sass-lang.com/documentation)
- Bootstrap 5
[Bootstrap Documentación](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- SweetAlert2 (Modales excelentes para un proyecto básico como este)
[SweetAlert2 Documentación](https://sweetalert2.github.io/) 
[in18 translate/core](https://medium.com/angular-chile/aplicaciones-multilenguaje-en-angular-7-con-ngx-translate-db8d1e7b380c)

## Recursos y utilidades
Recursos obtenidos del prototipo de AdobeXD [Prototipos](https://drive.google.com/drive/folders/147FoJKW1gmdyy82ViB6xsFrUiBvRqUwg)
-**El tiempo para refrescar el servicio se configura desde los archivos de [environtmens]**
-**Existe un archivo en shareds de util.service para codigo reutilizable.**
-Colores coordinadora para el proyecto: [assets/scss/_variables.scss]
-Imagenes coordinadora: [assets/images]
-Font Family/Fuente [styles.scss(Import)Regular|Bold]