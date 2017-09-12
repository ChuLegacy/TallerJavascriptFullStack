## Introducción

Querido aprendiz, el siguiente **taller de JavaScript** se divide en cuatro niveles; **nivel 1**
correspondiente a la verificación de sus conocimientos en programación provenientes de la
fase de análisis, el **nivel 2** corresponde a la integración de JavaScript con HTML usando la
librería jQuery 3, el **nivel 3** finaliza con la implementación del framework AngularJS 1 y en el
**nivel 4** trabajaremos JavaScript del lado del servidor (NodeJS) con bases de datos
relacionales (PostgreSQL), bases de datos no relacionales (MongoDB y/o Redis) y tecnología
PUSH (WebSockets) sin olvidar lo aprendido en los niveles anteriores.

Por favor no olvide tener en cuenta la bibliografía citada en este taller como apoyo cualquier
duda referente al lenguaje de programación JavaScript.

Para presentar el taller de JavaScript, debe usted crear un proyecto en NetBeans 8.2 o
superior con una carpeta por cada punto del taller como se muestra en la figura 1.

```
Figura 1: Estructura del proyecto para el taller de JavaScript en NetBeans 8.
```
En la figura 1 se muestra la estructura del proyecto, donde el index.html es el archivo que
enlazará cada archivo index.html de cada punto del taller (el menú del taller). Al menú del
taller deberá cumplir con los siguientes requerimientos:

1. Usar el comando **npm** para instalar Bootstrap y jQuery
2. Usar Bootstrap para presentar el menú del taller.
3. El archivo package.json debe de cumplir con la estructura que se muestra en la figura
    2.


```
Figura 2: Estructura mínima del archivo package.json
```
A continuación, en la figura 3 se describe la estructura de carpetas que se debe de tener para
cada punto del taller; index.html es el archivo principal en cada punto del taller de JavaScript.

```
Figura 3: Estructura base de cualquier punto del taller de JavaScript.
```
Reglas para entregar el taller de JavaScript.

1. Se debe de entregar un proyecto en NetBeans 8.2 con todos los puntos del taller de
    JavaScript.
2. El taller comienza el 17 de Julio de 2017 y la entrega final es el 30 de Septiembre de
    2017 antes de media noche en plataforma BlackBoard y GitHub.com
3. Cada vez que usted termine un punto del taller deberá hacer un **commit** con su
    respectivo comentario (no haga un commit sin comentario).
4. Usted debe realizar un **commit** obligatorio cada fin de semana de todo lo que tenga
    hasta el momento así no haya terminado algún punto que esté en desarrollo.
5. En el **commit** de fin de semana también deberá realizar un **push** al proyecto en
    GitHub.com
6. Cada vez que el **commit** semanal no esté, para la siguiente semana habrá un punto
    adicional el cual se encontrará en el **anexo B** de este taller.
7. Nombre de variables, funciones, archivos y enunciados impresos en cualquier parte
    del navegador, deberán ir exclusivamente en inglés.
8. Cada página web, archivo CSS y archivo JavaScript, deberá estar correctamente
    indentado a 2 espacios mínimo de profundidad por nivel.


## Nivel 1

El nivel uno está diseñado para realizar 3 puntos por día en máximo 3 horas desde el 17 de
Julio de 2017 hasta el 30 de Julio de 2017. Solo podrá usar un archivo **index.html** por punto,
solo podrá usar el comando **prompt** para capturar información del usuario y solo podrá usar
el comando **console.log** para imprimir cualquier resultado, es decir solo podrá usar JavaScript
puro.

### Punto 1

Imprimir en consola el siguiente enunciado: “Hola, este es mi primer script en JavaScript.”

### Punto 2

Imprimir en consola el siguiente enunciado almacenado en una variable: “Hola, este es mi
primer script en JavaScript almacenado en una variable.”

### Punto 3

Imprimir en consola el siguiente enunciado: “Hola, soy [SU NOMBRE] y me siento feliz de
estar aprendiendo JavaScript”. Donde dice “[SU NOMBRE]” deberá aparecer el nombre del
usuario que será capturado a través de la función **promp**.

### Punto 4

Imprimir en consola los siguientes enunciados:

Hola, mi nombre es [SU NOMBRE COMPLETO].
Mi número de [TIPO DE DOCUMENTO] es [NUMERO DE IDENTIFICACIÓN].
Genero biológico: [MASCULINO o FEMENINO]
Mi estatura es: [ESTATURA] mts.
¿Es verdad que vivo en Cartago?: [FALSO O VERDADERO]

### Punto 5

Imprimir en consola el siguiente enunciado:

Hola, mi nombre es [SU NOMBRE COMPLETO].
Mi número de [TIPO DE DOCUMENTO] es [NUMERO DE IDENTIFICACIÓN].

**Nota importante**
A partir de aquí en adelante, cada vez que usted encuentre algo entre corchetes “[...]”
significa que usted va a capturar en una variable lo que entre corchetes se describe y lo va a
imprimir en ese punto.


### Punto 6

Imprima en consola el siguiente enunciado haciendo las operaciones correspondientes:

50 a la 10 es: [RESULTADO]
10 a la 50 es: [RESULTADO]
La multiplicación entre 50 y 10 es: [RESULTADO]
La división entre 50 y 10 es: [RESULTADO]
La división entre 10 y 50 es: [RESULTADO]
El módulo de la división entre 50 y 10 es: [RESULTADO]
La resta entre 50 y 10 es: [RESULTADO]
La suma entre 50 y 10 es: [RESULTADO]

Por favor no capture el valor, realice el cálculo necesario.

### Punto 7

Imprima en consola el siguiente enunciado, capturando [VARIABLE 1] y [VARIABLE 2]. Realice
los cálculos necesarios para encontrar [RESULTADO].

[VARIABLE 1] a la [VARIABLE 2] es: [RESULTADO]
[VARIABLE 2] a la [VARIABLE 1] es: [RESULTADO]
La multiplicación entre [VARIABLE 1] y [VARIABLE 2] es: [RESULTADO]
La división entre [VARIABLE 1] y [VARIABLE 2] es: [RESULTADO]
La división entre [VARIABLE 1] y [VARIABLE 2] es: [RESULTADO]
El módulo de la división entre [VARIABLE 1] y [VARIABLE 2] es: [RESULTADO]

### Punto 8

Capturar dos números enteros y realizar las cuatro operaciones básicas. Muestre de forma
organizada el resultado en consola.

### Punto 9

Capturar un número entero y mostrar en consola si es primo o no.

### Punto 10

Capturar un número entero y mostrar en consola si es par o impar.

### Punto 11


Por medio de la estructura de control “do while”, “if” y una variable que contiene un
asterisco (*) -solo debe de usar una vez y solo puede usar el comando “console.log”-,
imprima en consola la siguiente estructura:

\*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*

### Punto 12

Por medio de la estructura de control “while”, “if” y una variable que contiene un asterisco
(*) -solo debe de usar una vez y solo puede usar el comando “console.log”-, imprima en
consola la siguiente estructura:

\*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*

### Punto 13

Por medio de la estructura de control “for”, “if” y una variable que contiene un asterisco (*) -
solo debe de usar una vez y solo puede usar el comando “console.log”-, imprima en consola
la siguiente estructura:

\*
\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*\*
\*\*\*
\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*\*
\*\*\*\ *\*\*\*\*\*
\*\*\*\*\*\*\*
\*\*\*\*\*
\*\*\*
\*

### Punto 14


Representar los siguientes enunciados mediante expresiones aritméticas usando un
algoritmo para resolver la problemática:

1. Una empresa tiene $258.320.000 para distribuir a sus empleados como un bono.
    ¿Cuánto dinero recibirá cada empleado?
2. Un electricista cobra $45.000 por hora y gasta $20.000 por día en gasolina. ¿Cuál es
    su ganancia por un día?
3. Hay 5.280 pies en una milla, 12 pulgadas en un pie y 2.54 centímetros en una
    pulgada. ¿Cuántos centímetros hay en una milla?

### Punto 15

La empresa RUMAEstereo va a realizar un reventón por todo lo grande en la esquina donde
las arañas tejen su nombre, pero para ello necesitan un software que pregunte por la edad
de la persona y que si este es un menor de edad no lo deje entrar, pero si es un mayor de
edad, lo dejará entrar al reventón.

### Punto 16

Crear un programa que solicite las variables necesarias para calcular el perímetro y el área de
un rectángulo y muestre el resultado en pantalla de forma coherente y organizada.

### Punto 17

Crear un programa que solicite las variables necesarias para resolver una regla de 3 e
imprimir el resultado en pantalla.

### Punto 18

Crear un programa donde se solicite el salario de un trabajador, el porcentaje de retención
en la fuente y este deberá calcular cuánto se le retiene y cuanto se le pagará al trabajador en
total. No olvide mostrar los resultados en consola.

### Punto 19

Crear un programa que solicite un número entero, si el número ingresado es negativo,
entonces se debe hacer el cálculo necesario y mostrar el mismo número, pero en positivo,
pero si el número ingresado es positivo, se debe de imprimir un mensaje en que diga “Debe
ingresar un número menor de cero”.

### Punto 20

Crear un programa el cual con base a un salario mínimo pueda detectar que, si el salario
ingresado es equivalente a dos salarios mínimos o menos entonces se le otorgará el auxilio


de transporte, de lo contrario no se otorgará auxilio de transporte, pero si el salario
ingresado es 4 veces un salario mínimo o superior, este debe de hacerle retención en la
fuente.

Imprima en pantalla el tiquete con el cual se le paga al trabajador y tenga en cuenta que 30
días es el número máximo de días laborables por mes, así que el programa debe de solicitar
la cantidad de días que ha laborado para hacer el cálculo de cuanto se le va a pagar al
trabajador.

### Punto 21

Cree un programa para calcular la hipotenusa de un triángulo; los datos deben de solicitarse
al usuario y el resultado impreso en pantalla con un mensaje que haga alusión al cálculo
realizado.

### Punto 22

Escriba un programa que calcule los meses, días, horas, minutos y segundos que hay en 15
años contables.

### Punto 23

Escriba un programa que solicite dos fechas y en consola salga la diferencias en días, en
meses y en años. Use el objeto **Date** de JavaScript para manejar las fechas.

### Punto 24

Escriba un programa que reciba un número de horas y calcule la cantidad de semanas y días
que representan.

### Punto 25

Escriba un programa que capture 10 números enteros en un arreglo y por medio de todas las
estructuras de ciclos cuales son los números pares, cuáles son los números primos, cuento es
la suma de los números primos, cuanto es la suma de los números pares, cuanto es el
promedio de los números primos y cuanto es el promedio de los números pares.

### Punto 26

Escriba un programa el cual por medio del **prompt** imprima el siguiente menú:

1. Realizar una suma
2. Realizar una resta
3. Realizar una multiplicación


4. Realizar una división
0. Salir del programa

Al elegir cualquiera de las opciones, el programa deberá solicitar al usuario los dos números
necesarios para realizar la operación seleccionada. Cada acción dentro del programa deberá
usar funciones.

### Punto 27

Escriba un programa para llevar la información personal de una persona usando registros
(uno por cada sección) y con un menú de la siguiente manera para introducir los datos:

Seleccione una opción para ingresar sus datos.

1. Datos personales
2. Referencia familiar
3. Referencia laboral
4. Descripción de perfil profesional
5. Imprimir hoja de vida
0. Salir del programa

Cada acción dentro del programa deberá usar funciones.

### Punto 28

Escriba un programa que imprima el siguiente menú:

1. Llenar arreglo
2. Buscar elemento por método de búsqueda secuencial
3. Aplicar método de ordenamiento de burbuja
4. Aplicar método de ordenamiento de burbuja bidireccional
5. Aplicar método de ordenamiento por inserción
6. Aplicar método de ordenamiento por mezcla
7. Aplicar el método de ordenamiento por selección
8. Imprimir arreglo.
0. Salir del programa

Tenga en cuenta para este programa los siguientes aspectos:

1. El arreglo debe ser del tamaño que el usuario del programa indique.
2. Al llenar el arreglo, no importa si este está lleno o vacío, siempre se llenará con
    números aleatorios. Pero cuando ya el arreglo esté ordenado bajo cualquier método,
    se preguntará al usuario si está seguro de volver a llenar el arreglo.
3. En el método de búsqueda secuencial, el usuario introducirá un valor entero
    cualquiera y este deberá buscarse y mostrar el respectivo mensaje si fue encontrado
    o no.


4. Cada opción del menú deberá escribirse en una función.

### Punto 29

Crear un programa capture el nombre de los elementos de una empresa (código y nombre) y
los guarde en un archivo. El programa deberá contar con un buscador por código y también
deberá contar con un buscador por nombre para mostrar los elementos buscados. No olvide
crear el programa con un menú interactivo. Cada acción del programa deberá estar
programada en una función y el inventario deberá estar contenido en un arreglo de registros.

Para saber la empresa que le corresponde, por favor consulte el **anexo A**.

### Punto 30

Crear un programa donde se hace uso de arreglos con registros y el **localStorage** que permita
llevar la nómina de una empresa teniendo en cuenta los siguientes aspectos:

1. Se podrán ingresar empleados de forma ilimitada.
2. La empresa requerirá una configuración previa para poder empezar a usar el
    software.
3. Use arreglos en conjunto con registros para tener organizado la configuración del
    sistema y demás aspectos del mismo.
4. Usar funciones para cualquier acción en el software.
5. Tenga en cuenta la siguiente imagen:


6. La gestión de empleados será un CRUD donde usted podrá listar la información,
    agregar, modificar y eliminar un empleado.
7. Los datos del empleado serán los siguientes: cédula, nombre, apellidos, cargo,
    salario.
8. El valor del salario introducido no podrá ser inferior al salario mínimo configurado en
    el sistema.
9. El número de cédula no podrá repetirse en cuanto los números ya registrados
    (Validación).
10. Cuando se modifique, el sistema buscará por el número de cédula introducido.
11. Las validaciones en la modificación son las mismas validaciones cuando se está
    agregando un nuevo empleado.
12. Para eliminar un empleado, se deberá solicitar el número de cedula a eliminar y se
    deberá solicitar una confirmación para eliminar dicho empleado, pero también se
    deberá avisar si el número de cédula a eliminar no existe.
13. La información en la gestión de empleados debe de salir ordenada por el número de
    cédula.
14. Cuando se registren las horas laboradas de un empleado, se debe de buscar por
    número de cédula y al registrar las horas deberán ser de la siguiente manera y entre
    todas no superiores a las horas laborables al mes configuradas previamente:
       a. Horas diurnas (0%)
       b. Horas nocturnas (35%)
       c. Horas dominicales diurnas (75%)
       d. Horas dominicales nocturnas (110%)
       e. Horas extras diurnas (25%)
       f. Horas extras nocturnas (75%)
       g. Horas dominicales extra diurnas (100%)
       h. Horas dominicales extra nocturnas (150%)
15. Recuerde que al generar la nómina se debe de tener en cuenta los porcentajes de
    horas estipulados en el aspecto 14 y las reglas de auxilio de transporte, retención en
    la fuente y también se le dará a quien gane un salario mínimo el 20% sobre el salario
    como auxilio de alimentación.
16. Cuando la nómina haya sido calculada, esta se guardará en el **localStorage** (al
    generar la nómina pedirá el mes y año de generación)
17. Cuando la nómina termine de generarse, se mostrará una tabla con la siguiente
    información: Cédula, Cargo, Sueldo a pagar. La tabla deberá estar ordenada por el
    número de cédula.
18. En la opción de “Imprimir comprobante de pago” el programa solicitará la cédula
    para buscar el empleado y generará un comprobante de pago con la apariencia
    necesaria para ser impreso (estilo tiquete de compra). Sea creativo.


### Punto 31

Escriba un programa que capture N números enteros en un arreglo y por medio de todas las
estructuras de ciclos encuentre cuales son los números pares, cuáles son los números
primos, cuento es la suma de los números primos, cuanto es la suma de los números pares,
cuanto es el promedio de los números primos y cuanto es el promedio de los números pares
haciendo uso exclusivamente de clases en JavaScript.

### Punto 32

Volver a codificar el punto 26 pero no use funciones, s olo puede usar clases de JavaScript.

### Punto 33

Volver a codificar el punto 27 pero no use funciones, solo puede usar clases de JavaScript.

### Punto 34

Volver a codificar el punto 28 pero no use funciones, solo puede usar clases de JavaScript.

### Punto 35

Volver a codificar el punto 29 pero no use funciones, solo puede usar clases de JavaScript.

### Punto 36

Volver a codificar el punto 30 pero no use funciones, solo puede usar clases de JavaScript.


## Nivel 2

El nivel dos está diseñado para realizar 2 puntos por día en máximo 3 horas desde el 31 de
Julio de 2017 hasta el 20 de Agosto de 2017. El archivo **index.html** será el archivo de inicio de
cada punto. Para los siguientes ejercicios, usted deberá usar Bootstrap 3 o 4, incluir
**responsive design** y jQuery 3. Recuerde que las librerías deberán ser instaladas a través del
sistema de paqueterías **npm**.

### Punto 37

Mostrar en una página web el siguiente enunciado: “Hola, este es mi script número 37 en
JavaScript usando jQuery”. No olvide que el enunciado debe ser impreso desde jQuery.

### Punto 38

Mostrar en una página web el siguiente enunciado almacenado en una variable: “Hola, este
es mi script número 38 en JavaScript almacenado en una variable usando jQuery.”

### Punto 39

Mostrar en una página web el siguiente enunciado: “Hola, soy [SU NOMBRE] y me siento feliz
de estar aprendiendo JavaScript usando jQuery”. Donde dice “[SU NOMBRE]” deberá
aparecer el nombre del usuario que será capturado a través de un formulario en la misma
página.

**Nota importante**
A partir de aquí en adelante, cada vez que usted encuentre algo entre corchetes “[...]”
significa que usted va a capturar en una variable lo que entre corchetes se describe y lo va a
imprimir en ese punto. La captura de información deberá producirse a través de un
formulario en la misma página web.

###Punto 40

Mostrar en una página web los siguientes enunciados:

Hola, mi nombre es [SU NOMBRE COMPLETO].
Mi número de [TIPO DE DOCUMENTO] es [NUMERO DE IDENTIFICACIÓN].
Genero biológico: [MASCULINO o FEMENINO]
Mi estatura es: [ESTATURA] mts.
¿Es verdad que vivo en Cartago?: [FALSO O VERDADERO]

### Punto 41

Mostrar en una página web el siguiente enunciado:


Hola, mi nombre es [SU NOMBRE COMPLETO].
Mi número de [TIPO DE DOCUMENTO] es [NUMERO DE IDENTIFICACIÓN].

### Punto 42

Mostrar en una página web el siguiente enunciado haciendo las operaciones
correspondientes:

50 a la 10 es: [RESULTADO]
10 a la 50 es: [RESULTADO]
La multiplicación entre 50 y 10 es: [RESULTADO]
La división entre 50 y 10 es: [RESULTADO]
La división entre 10 y 50 es: [RESULTADO]
El módulo de la división entre 50 y 10 es: [RESULTADO]
La resta entre 50 y 10 es: [RESULTADO]
La suma entre 50 y 10 es: [RESULTADO]

Por favor no capture el valor, realice el cálculo necesario.

### Punto 43

Muestre en una página web el siguiente enunciado, capturando [VARIABLE 1] y [VARIABLE 2].
Realice los cálculos necesarios para encontrar [RESULTADO].

[VARIABLE 1] a la [VARIABLE 2] es: [RESULTADO]
[VARIABLE 2] a la [VARIABLE 1] es: [RESULTADO]
La multiplicación entre [VARIABLE 1] y [VARIABLE 2] es: [RESULTADO]
La división entre [VARIABLE 1] y [VARIABLE 2] es: [RESULTADO]
La división entre [VARIABLE 1] y [VARIABLE 2] es: [RESULTADO]
El módulo de la división entre [VARIABLE 1] y [VARIABLE 2] es: [RESULTADO]

### Punto 44

Capturar dos números enteros a través de un formulario web y realizar las cuatro
operaciones básicas. Muestre de forma organizada el resultado en la misma web de captura.

### Punto 45

Capturar un número entero y mostrar en una página web si es primo o no.

### Punto 46

Capturar un número entero y mostrar en una página web si es par o impar.


### Punto 47

Por medio de la estructura de control “do while”, “if” y una variable que contiene un
asterisco (*) -solo debe de usar una vez la impresión por jQuery”-, imprima en una página
web la siguiente estructura:

\*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*

### Punto 48

Por medio de la estructura de control “while”, “if” y una variable que contiene un asterisco
(*) -solo debe de usar una vez y solo puede usar la impresión por jQuery-, imprima en una
página web la siguiente estructura:

\*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*

### Punto 49

Por medio de la estructura de control “for”, “if” y una variable que contiene un asterisco (*) -
solo debe de usar una vez y solo puede usar la impresión por jQuery-, imprima en una página
web la siguiente estructura:

\*
\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*\*
\*\*\*
\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*\*
\*\*\*\ *\*\*\*\*\*
\*\*\*\*\*\*\*
\*\*\*\*\*
\*\*\*
\*


### Punto 50

Representar los siguientes enunciados mediante expresiones aritméticas usando un
algoritmo para resolver la problemática en una página web:

1. Una empresa tiene $258.320.000 para distribuir a sus empleados como un bono.
    ¿Cuánto dinero recibirá cada empleado?
2. Un electricista cobra $45.000 por hora y gasta $20.000 por día en gasolina. ¿Cuál es
    su ganancia por un día?
3. Hay 5.280 pies en una milla, 12 pulgadas en un pie y 2.54 centímetros en una
    pulgada. ¿Cuántos centímetros hay en una milla?

### Punto 51

La empresa RUMAEstereo va a realizar un reventón por todo lo grande en la esquina donde
las arañas tejen su nombre, pero para ello necesitan un software que pregunte por la edad
de la persona y que si este es un menor de edad no lo deje entrar, pero si es un mayor de
edad, lo dejará entrar al reventón. Recuerde que el desarrollo debe estar contenido en una
página web.

### Punto 52

Crear un programa que solicite las variables necesarias por medio de un formulario web,
para calcular el perímetro y el área de un rectángulo y muestre el resultado en la misma
página web de forma coherente y organizada.

### Punto 53

Crear un programa que solicite las variables necesarias a través de un formulario web, para
resolver una regla de 3 e imprimir el resultado en la misma página web.

### Punto 54

Crear un programa donde se solicite el salario de un trabajador, el porcentaje de retención
en la fuente y este deberá calcular cuánto se le retiene y cuanto se le pagará al trabajador en
total. No olvide mostrar los resultados en la misma página web que contiene el formulario
para solicitar la información necesaria.

### Punto 55

Crear un programa que solicite un número entero mediante un formulario, si el número
ingresado es negativo, entonces se debe hacer el cálculo necesario y mostrar el mismo


número, pero en positivo, pero si el número ingresado es positivo, se debe de imprimir un
mensaje en que diga “Debe ingresar un número menor de cero” en la página web.

### Punto 56

Crear un programa web, el cual con base a un salario mínimo pueda detectar que, si el salario
ingresado es equivalente a dos salarios mínimos o menos entonces se le otorgará el auxilio
de transporte, de lo contrario no se otorgará auxilio de transporte, pero si el salario
ingresado es 4 veces un salario mínimo o superior, este debe de hacerle retención en la
fuente.

Imprima en otra página web, el tiquete con el cual se le paga al trabajador y tenga en cuenta
que 30 días es el número máximo de días laborables por mes, así que el programa web debe
de solicitar la cantidad de días que ha laborado para hacer el cálculo de cuanto se le va a
pagar al trabajador. No olvide usar **localStorage** y **sessionStorage** para almacenar
información.

### Punto 57

Cree un programa para calcular la hipotenusa de un triángulo; los datos deben de solicitarse
al usuario a través de un formulario web y el resultado impreso en otra página con un
mensaje que haga alusión al cálculo realizado. No olvide usar **localStorage** y **sessionStorage**
para almacenar información.

### Punto 58

Escriba un programa que calcule los meses, días, horas, minutos y segundos que hay en 15
años contables. La información debe de solicitarse en un formulario web e impreso en la
misma página web.

### Punto 59

Escriba un programa que solicite dos fechas y en un formulario web usando el input correcto
para capturar fechas, y muestre en la misma página la diferencias en días, en meses y en
años. Use el objeto **Date** de JavaScript para manejar las fechas.

### Punto 60

Escriba un programa que capture por medio de un formulario web, un número de horas y
calcule la cantidad de semanas y días que representan, mostrando el resultado en la misma
página web.

### Punto 61


Escriba un programa que capture N números enteros en un arreglo y por medio de todas las
estructuras de ciclos cuales son los números pares, cuáles son los números primos, cuento es
la suma de los números primos, cuanto es la suma de los números pares, cuanto es el
promedio de los números primos y cuanto es el promedio de los números pares. No olvide
solicitar la información por medio de un formulario web y mostrar el resultado en la misma
página web indicando qué resultado es por qué estructura. Para este ejercicio siempre debe
de usar funciones.

### Punto 62

Escriba un programa web de una sola página, imprima el siguiente menú a base de links o
botones:

```
Realizar una suma
Realizar una resta
Realizar una multiplicación
Realizar una división
```
Al elegir cualquiera de las opciones, el programa ocultar el menú y deberá mostrar un
formulario, solicitando al usuario los dos números necesarios para realizar la operación
seleccionada. Cada acción dentro del programa deberá usar funciones y los efectos para
lograr la aplicación web, deberán realizarse con jQuery.

### Punto 63

Escriba una aplicación web para llevar la información personal de una persona usando
registros (uno por cada sección) y con un menú de la siguiente manera para introducir los
datos:

Seleccione una opción para ingresar sus datos.
Datos personales
Referencia familiar
Referencia laboral
Descripción de perfil profesional
Imprimir hoja de vida

Cada acción dentro del programa deberá usar funciones. Y la aplicación web deberá
realizarse en una sola página web.

### Punto 64

Escriba una aplicación web que muestre el siguiente menú:

Llenar arreglo


Buscar elemento por método de búsqueda secuencial
Aplicar método de ordenamiento de burbuja
Aplicar método de ordenamiento de burbuja bidireccional
Aplicar método de ordenamiento por inserción
Aplicar método de ordenamiento por mezcla
Aplicar el método de ordenamiento por selección
Imprimir arreglo.

Tenga en cuenta para este programa los siguientes aspectos:

5. El arreglo debe ser del tamaño que el usuario del programa indique.
6. Al llenar el arreglo, no importa si este está lleno o vacío, siempre se llenará con
    números aleatorios. Pero cuando ya el arreglo esté ordenado bajo cualquier método,
    se preguntará al usuario si está seguro de volver a llenar el arreglo.
7. En el método de búsqueda secuencial, el usuario introducirá un valor entero
    cualquiera y este deberá buscarse y mostrar el respectivo mensaje si fue encontrado
    o no.
8. Cada opción del menú deberá escribirse en una función.

### Punto 65

Crear un programa web que capture el nombre de los elementos de una empresa (código y
nombre) y los guarde en un archivo. El programa deberá contar con un buscador por código y
también deberá contar con un buscador por nombre para mostrar los elementos buscados.
No olvide crear el programa con un menú interactivo. Cada acción del programa deberá estar
programada en una función y el inventario deberá estar contenido en un arreglo de registros.
El programa web deberá usar todas las páginas web que sean necesarias. No olvide usar
**localStorage** o **sessionStorage** según sea necesario.

Para saber la empresa que le corresponde, por favor consulte el **anexo A**.

### Punto 66

Volver a codificar el punto 30 pero esta vez estilo aplicación web con todos sus
requerimientos. Use todas las páginas web que sean necesarias. Recuerde que el objetivo es
usar jQuery siempre, responsive design con Bootstrap 3 o 4.

### Punto 67

Escriba un programa que capture N números enteros en un arreglo y por medio de todas las
estructuras de ciclos cuales son los números pares, cuáles son los números primos, cuento es
la suma de los números primos, cuanto es la suma de los números pares, cuanto es el
promedio de los números primos y cuanto es el promedio de los números pares. No olvide


solicitar la información por medio de un formulario web y mostrar el resultado en la misma
página web indicando qué resultado es por qué estructura. Para este ejercicio siempre debe
de usar clases en JavaScript.

### Punto 68

Volver a codificar el punto 62 pero no use funciones, solo puede usar clases en JavaScript.

### Punto 69

Volver a codificar el punto 63 pero no use funciones, solo puede usar clases de JavaScript.

### Punto 70

Volver a codificar el punto 64 pero no use funciones, solo puede usar clases de JavaScript.

### Punto 71

Volver a codificar el punto 65 pero no use funciones, solo puede usar clases de JavaScript.

### Punto 72

Volver a codificar el punto 66 pero no use funciones, solo puede usar clases de JavaScript.


## Nivel 3

Querido aprendiz, se encuentra usted ahora en el nivel 3 del taller de JavaScript. El diseño de
este taller está para realizar un programa web por día en máximo 3 horas, desde el 21 de
Agosto de 2017 hasta el 30 de Septiembre de 2017. Las tecnologías para usar en este nuevo
nivel son las siguientes: HTML5, CSS3 (Bootstrap 3 o 4), JavaScript (jQuery y AngularJS 1) y
Responsive Design. A continuación, el listado de librerías a manejar con **npm** para poder
trabajar el último nivel:

1. npm install jquery --save
2. npm install bootstrap --save
3. npm install angular --save
4. npm install angular-ui -router --save
5. npm install angular-middleware --save
6. npm install ngstorage --save
7. npm install oclazyload --save
8. npm install ng-file-upload --save
9. https://github.com/paulocaldeira17/angular-websql/archive/master.zip (preguntar
    al instructor cómo instalar esta dependencia)

Cada punto del taller del nivel 3 deberá contar con una estructura inicial como se muestra en
la figura 4.

```
Figura 4: Estructura básica de una aplicación web con AngularJS 1
```

No olvide los siguientes aspectos para tener en cuenta para este nuevo nivel:

1. Todos los puntos deben de tener una arquitectura en capas como la que se muestra
    en la figura 4.
2. Todos los puntos deben de usar la arquitectura **MVVM** (Model-View-View-Model).
3. Usar siempre **Bootstrap** para la capa de presentación de datos en la página web con
    **responsive design**.
4. **jQuery** no queda fuera de servicio, solo está en un segundo plano debido a que
    **AngularJS** es capaz de reemplazarlo en un 90% de las ocasiones, el 10% restante le
    pertenece al manejo con **Bootstrap** y sus componentes.

### Punto 73

Imprimir en la página web y en consola el siguiente enunciado: “Hola, este es mi script
número 73 en JavaScript con AngularJS y Bootstrap.”. El enunciado anterior debe de cumplir
lo siguiente:

1. El enunciado debe de estar en una variable en el controlador.
2. El enunciado debe de ser impreso en la página web desde la variable del controlador.
3. El enunciado también debe de ser impreso en consola usando la dependencia **$log()** ,
    lanzando el enunciado en modo **log** , **warn** , **info** , **error** y **debug**.

### Punto 74

Crear una aplicación web donde se encuentre un formulario con un único **input**. En tiempo
real muestre el contenido que se está escribiendo en el **input** en un **div** que esté más abajo y
también en consola en los diferentes modos por medio de la dependencia **$log**. Después del
primer **div** no olvide mostrar el tipo de dato que se está mostrando: cadena de caracteres,
numérico o fecha.

**Nota importante**
A partir de aquí en adelante, cada vez que usted encuentre algo entre corchetes “[...]”
significa que usted va a capturar o procesar en una variable lo que entre corchetes se
describe y lo va a imprimir en ese punto. La captura de información deberá producirse a
través de un formulario, resultado de un proceso o información almacenada en algún tipo
de almacenamiento como **localStorage** , **sessionStorage** , entre otros. El mensaje deberá ser
una plantilla en **HTML** o similar.

### Punto 75

Crear una aplicación web que disponga de un formulario web el cual solicite el género
biológico, edad y estado civil. Dicho formulario deberá procesarse por medio de **ng-submit**.


Cuando el formulario cumpla con todos los datos y la información esté lista y completa,
entonces mostrar en la misma página el siguiente mensaje:

Usted es una persona de [EDAD] años de edad, cuyo género bilógico es [GENERO
BIOLOGICO] y su estado civil es [ESTADO CIVIL].

Aspectos para tener en cuenta:

1. El lugar donde se encuentre el mensaje debe de estar oculto y se mostrará
    exclusivamente cuando la información esté completa y haya sido procesada por
    medio del **ng-submit**.
2. Cuando hagan clic en el botón de **reset** del formulario, el mensaje deberá ocultarse.
3. Para las acciones anteriores debe de usarse la directiva **ng-show**.

### Punto 76

Crear una aplicación web que disponga de un formulario web el cual solicite nombre y edad.
Dicho formulario deberá procesarse por medio de **ng-submit**. Cuando el formulario cumpla
con todos los datos y la información esté lista y completa, entonces mostrar en la misma
página el siguiente mensaje:

Hola [NOMBRE], usted tiene [EDAD] años de edad.

Aspectos para tener en cuenta:

1. El lugar donde se encuentre el mensaje debe de estar oculto y se mostrará
    exclusivamente cuando la información esté completa y haya sido procesada por
    medio del **ng-submit**.
2. Cuando hagan clic en el botón de **reset** del formulario, el mensaje deberá ocultarse.
3. Para las acciones anteriores debe de usarse la directiva **ng-hide**.

### Punto 77

Crear una lista de contactos (10 contactos máximo) en una variable usando arreglos y
registros de JavaScript en una variable ubicada en un controlador. Por medio de la directiva
**ng-repeat** imprimir la información de los contactos en una tabla.

### Punto 78

Crear una lista de contactos (10 contactos máximo) en una variable usando arreglos y
registros de JavaScript en una variable ubicada en un controlador. Por medio de la directiva
**ng-repeat** imprimir la información una lista, pero dicha lista debe ser desplegable, es decir


solo se muestra el nombre del contacto y los demás datos se mostrarán al desplegar la
información de cada contacto por medio de la directiva **ng-open**.

### Punto 79

Crear una aplicación web para llevar una agenda telefónica con la siguiente información:
Nombre, Apellidos, Teléfono, Dirección, Correo electrónico. El formulario deberá validar que
tanto el teléfono como el correo electrónico son datos únicos en toda nuestra agenda. La
información del formulario deberá ser procesada a través de **ng-submit** y cuando la
información haya sido validada y esta sea válida, entonces deberá ser mostrada en una tabla.
Recuerde usar un array de registros para almacenar la información.

### Punto 80

Agregue al punto 79 la opción de almacenar la información en **localStorage**.

### Punto 81

Agregue al punto 79 la opción de poder almacenar la información en el **sessionStorage**.

### Punto 82

Agregue al punto 79 la opción de poder almacenar la información en la base de datos del
navegador ( **webSql** ) usando la **estructura de servicios**.

### Punto 83

Al punto 79 agregue la posibilidad de poder borrar un dato de la agenda telefónica sin
importar el tipo de almacenamiento en el que se encuentran los datos.

### Punto 84

Complemente el punto 79 con la posibilidad de poder modificar la información del contacto
deseado sin importar el tipo de almacenamiento en el que se encuentren los datos.

### Punto 85

Complete el punto 79 con un sistema de seguridad basado en usuario y contraseña, junto a la
posibilidad de no poder acceder a la información si no se está identificado frente al sistema
usando **angular-middleware**. La información de usuario y contraseña deberá estar contenida
en la base de datos del navegador ( **webSql** ).

### Punto 86


Al punto 79 ahora agregue la posibilidad de almacenar una imagen del contacto y con su
respectiva validación. Para este punto deberá usar **ng-file-upload**. Recuerde que dicha
imagen deberá aparecer en la tabla donde se muestra la información del contacto.

### Punto 87

Al sistema diseñado en el punto 79, agregue un buscador de contactos. El buscador deberá
reaccionar al nombre del contacto y la información buscada deberá presentarse en la
modalidad de tarjetas y no en una tabla.

### Punto 88 y Punto 89

Es momento de terminar por completo el punto 79, así que, en estos dos puntos
comprendidos en 6 horas, deberá pulir el ejercicio con respecto a los siguientes
requerimientos (tome los requerimientos como una lista de chequeo):

Realizar una aplicación web para llevar el control de una agenda de contactos el cual deberá
cumplir con los siguientes requisitos:

1. Sistema de seguridad basado en usuario y contraseña. Los datos de usuario y
    contraseña deberán estar almacenados en el sistema **webSql** del navegador.
2. La libreta de direcciones deberá contar con un **CRUD** para los contactos.
3. La aplicación web debe de manejar diferentes direcciones, para los diferentes puntos
    de acceso a ella como registro de contactos, edición de contactos, entre otros. Cada
    punto de acceso a la libreta deberá estar protegido de tal modo que si el usuario está
    identificado entonces dejará entrar al sistema, pero sino lo está, deberá solicitar
    usuario y contraseña ( **angular-middleware** ).
4. Buscador de contactos por nombre.
5. La información que se guarde, solo el número de teléfono y correo electrónico son
    únicos en todo el sistema.
6. El contacto que se crea deberá poder anexarle una imagen.
7. Los datos de la agenda de contactos deberán estar almacenados de tal forma que no
    se pierdan al cerrar el navegador.
8. La aplicación deberá usar Bootstrap y Responsive Design.
9. Las librerías que se usarán para el punto 79 deberán ser independientes a las
    librerías usadas en todo el taller.
10. La aplicación deberá estar compilada para Android mínimo 4.4 o superior (utilice la
    plataforma Intel XDK) y tener sus propios iconos.


## Nivel 4

Querido aprendiz hasta ahora hemos trabajado el código **JavaScript** en el navegador, es
decir, del lado del cliente, pero llegó el momento de saltar a los servidores y trabajar
JavaScript del lado del servidor ( **NodeJS** ) integrando las técnicas **AJAX** y **PUSH** , como también
integrando bases de datos relacionales como **PostgreSQL** y bases de datos no relacionales
como **MongoDB** y **Redis**. En los siguientes 19 ejercicios comprenderemos el uso de los datos
en el servidor en conjunto con el cliente.

Cada ejercicio está programado para ser desarrollado en 4 horas máximo y un ejercicio por
día.

NodeJS es JavaScript del lado del servidor, pero para que la programación en este sentido sea
más fluida, utilizaremos el framework **Express 4**.

### Punto 90

Crear 4 servicios web tipo **RESTful** con NodeJS y Express de la siguiente manera:

1. Método: GET; insumos: nombre, edad; respuesta: {mensaje: “Hola [NOMBRE], usted
    tiene [EDAD] años de edad.”}
2. Método: POST; insumos: nombre, edad; respuesta: {mensaje: “Hola [NOMBRE],
    usted tiene [EDAD] años de edad.”}
3. Método: PUT; insumos: nombre, edad; respuesta: {mensaje: “Hola [NOMBRE], usted
    tiene [EDAD] años de edad.”}
4. Método: DELETE; insumos: nombre, edad; respuesta: {mensaje: “Hola [NOMBRE],
    usted tiene [EDAD] años de edad.”}

Cree una aplicación web con AngularJS que contenga 4 páginas mínimo y un menú que las
enlaza, cada página deberá contener su respectivo formulario el cual recoge el nombre y la
edad respectivamente, para posteriormente ser enviados al servidor bajo el método indicado
en cada servicio web para su respectivo consumo. Muestre el mensaje que llega en el
servicio web en la misma página del formulario.

### Punto 91

Crear una aplicación web con AngularJS el cual, por medio de un formulario, la directiva ng-
submit y un servicio web tipo RESTful, permita realizar la siguiente validación en el servidor:

1. Si la edad introducida es mayor o igual a 18, entonces guardar el nombre y la edad en
    MongoDB en el documento de mayores de edad.


2. Si la edad introducida es menor que 18, entonces guardar el nombre y la edad en
    MongoDB en el documento de menores de edad.
3. Si la edad introducida es mayor o igual que 65, entonces guardar el nombre y la edad
    en MongoDB en el documento de tercera de edad.

El programa debe de decirme en qué grupo quedó guardada la persona, tenga en cuenta que
el mensaje debe de llegar desde el servidor.

### Punto 92

Volver a realizar el punto 91, solo que ahora va a utilizar Redis en vez de MongoDB.

### Punto 93

Volver a realizar el punto 91, solo que ahora va a utilizar PostgreSQL en vez de MongoDB.

### Punto 94

Realizar una aplicación web con AngularJS y servicios web el cual tenga un CRUD de sobre la
gestión usuarios de un sistema. La gestión deberá ser sobre PostgreSQL con una tabla que
cumpla con los siguientes campos: id, nombre_usuario, contrasena, created_at, updated_at,
deleted_at.

1. created_at deberá ser insertado de forma automática.
2. updated_at deberá ser accionado de forma automática por medio de un
    procedimiento almacenado cuando la tupla sea actualizada.
3. Por medio de deleted_at implementar el borrado físico y el borrado lógico.
4. Cualquier acción que tenga que ver entre el cliente y el servidor, deberá ser
    realizada por medio de servicios web.

### Punto 95

Realizar de nuevo el punto 94 y usar MongoDB en vez de PostgreSQL.

### Punto 96

Realizar de nuevo el punto 94 y usar Redis en vez de PostgreSQL.

### Punto 97

Al punto 94 agregar un sistema de seguridad basado en usuario y contraseña, los datos
deberán salir de la base de datos en PostgreSQL por medio de servicios web.

### Punto 98


Al punto 94 agregar la posibilidad de ver la información en una tabla, la cual deberá estar
paginada en 5 datos por página.

### Punto 99

Al punto 94 agregar la posibilidad de buscar un usuario por medio del campo
nombre_usuario y mostrarlo en una página nueva.

### Punto 100

Crear un chat en tiempo real con AngularJS, notificaciones PUSH y servicios web.

### Punto 101
Crear un sistema de chat en tiempo real con notificaciones PUSH que cumpla con los
siguientes requerimientos:

1. Sistema de usuario y contraseña para acceder al chat
2. La base de datos deberá estar en PostgreSQL.
3. Si al intentar acceder al sistema no estoy registrado como usuario del chat, deberá
    existir la forma de poderme registrar para poder acceder al chat.

### Punto 102

Al punto 101 agregar la posibilidad de subir una foto en el registro de usuario para ser usada
en el chat como avatar.

###Punto 103

Al punto 101 agregar la posibilidad al chat de escoger 3 salas de chat diferentes cuando se
identifica frente al sistema. Sala SENA – CTA, Sala SENA – Departamental, Sala SENA –
Nacional.

### Punto 104

Al punto 101 agregar la posibilidad de usar emoticones en las salas de chat.

### Punto 105

Al punto 101 agregar un usuario administrador con la posibilidad de expulsar a cualquier
usuario de cualquier sala de chat.

### Punto 106


Al punto 101 agregar la posibilidad de que el usuario administrador pueda enviar un mensaje
privado a un usuario en particular y enviar un mensaje a todas las salas de chat.

### Punto 107

Al punto 101 agregar la posibilidad de que el usuario administrador pueda descargar una
copia de seguridad de la base de datos en formato SQL.

### Punto 108

Al punto 101 agregar la posibilidad de que el usuario administrador pueda restaurar una
copia de seguridad de la base de datos en formato SQL.


## ANEXO

### Anexo A: Empresa por aprendiz

```
Alejandra Franco Tobón Metalistería
Alejandro Ramirez Gutiérrez Heladería
Andres Felipe Salazar Vidriería
Cristhian Homen Gomez Artículos para el hogar
Cristian Camilo Caicedo Gil Carpintería
Daniela Gonzalez Ruiz Venta de celulares
Joan Manuel Serna Leiton Comidas rápidas
Jose Julian Parra Villanueva Productos para la cocina
Josefp Ochoa Gonzalez Veterinaria
Juan Camilo Medina Electrodomésticos
Kevin Alexander Osorio Patiño Panadería
Kevin Arley Agudelo Osorio Librería
Kevin Leander Muñoz Moya Pastelería
Luis Felipe Tawil Restaurante
Luis Gustavo Gomez Esteban Papelería
Mónica Usquiano Sánchez Productos para peluquería
Robert Sty Triana Cortes Ferretería
Sebastián Cano Cadavid Insumos para la construcción
Sebastián Vescance Marín Zapatería
Sol Fanny Bejarano Pedraza Equipos médicos
Stiven Ospina Bedoya Frutería
Víctor Hugo Hernandez Peláez Peluquería
Weider Puerta Escobar Agroindustria
Wolfgang Darío Restrepo Vargas Productos de aseo personal
Yenifer Alejandra Valencia Rincón Decoración y fiestas
Yobin Harlinson Moncada Aguirre Distribuidora de desechables
Yojan Andrey Martinez Castrillon Carnicería
```
### Anexo B: Puntos adicionales.................................................................................................

Todo trabajo a realizar en los anexos debe ser bajo normatividad APA y en formato digital
teniendo en cuenta el siguiente documento:
[http://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf](http://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf)


#### Semana 1: 17 de Julio al 22 de Julio

Realizar un trabajo escrito donde responda a los siguientes puntos:

1. ¿Qué es JavaScript?
2. Historia del JavaScript
3. Realizar una infografía con la evolución de JavaScript hasta el 2017.

#### Semana 2: 24 de Julio al 29 de Julio

Realizar un trabajo escrito donde responda a los siguientes puntos:

1. ¿Qué es la computación cuántica?
2. Historia de la computación cuántica.
3. Realizar una infografía de la historia de los procesadores.

#### Semana 3: 31 de Julio al 5 de Agosto

Realizar un trabajo escrito donde responda los siguientes puntos:

1. ¿Qué es una base de datos?
2. ¿Qué son las bases de datos NoSQL?
3. ¿Cuáles son las bases de datos relacionales más famosas?
4. De las bases de datos relacionales cuales son de pago y cuales no son de pago.
5. ¿Cuáles son las bases de datos NoSQL?
6. Pros y Contras entre las bases de datos relacionales y las bases de datos NoSQL.

#### Semana 4: 7 de Agosto al 12 de Agosto

Realizar un trabajo escrito donde responda lo siguiente:

1. ¿Qué es la técnica AJAX?
2. ¿Qué es la técnica PUSH?
3. Infografía con AJAX vs PUSH pro y contras de una técnica y la otra.

#### Semana 5: 14 de Agosto al 19 de Agosto

Realizar un trabajo escrito donde responda lo siguiente:

1. ¿Qué es la programación orientada a objetos?
2. Historia de la programación orientada a objetos
3. Qué son los modificadores de acceso, cuántos existen y explique cada uno.
4. Conceptos fundamentales de la programación orientada a objetos.
5. Cuáles son características de la programación orientada a objetos.


#### Semana 6: 21 de Agosto al 26 de Agosto

Realizar un trabajo escrito respondiendo lo siguiente:

1. ¿Qué es PHP?
2. Historia del PHP
3. Tipos de datos en PHP
4. ¿Cómo se declara una variable en PHP?
5. ¿Cómo se imprime una variable en PHP?
6. ¿Cómo se declara y cómo se usa una función en PHP?
7. ¿Cómo se crea una clase en PHP?
8. ¿Cómo se usa una clase en PHP?
9. ¿Qué son los namesapace y cómo se usan?


