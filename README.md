# 💱 Prueba - Conversor de Monedas JavaScript

Este proyecto corresponde a la **Prueba - Conversor de Monedas**, donde se practica el consumo de una API usando el método fetch, el manejo de errores con try y catch, la manipulación del DOM y la creación de gráficos con JavaScript.

---

## 🚀 Vista del proyecto

La página permite convertir un monto en pesos chilenos y realizar las siguientes acciones:

- Ingresar una cantidad de pesos chilenos.
- Seleccionar la moneda que se desea consultar.
- Convertir pesos chilenos a dólar, euro o UF.
- Mostrar el resultado de la conversión en la página.
- Consultar los valores desde la API de mindicador.cl.
- Ver un gráfico con el historial de los últimos 10 días.
- Mostrar un mensaje de error si la consulta no puede realizarse.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- Chart.js
- Git
- GitHub Pages

---

## 📁 Estructura del proyecto

```text
prueba-conversor-de-monedas-js/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧩 Funciones realizadas

### 1. Consultar los tipos de cambio

Archivo:

```text
script.js
```

Al presionar el botón **Buscar**, se utiliza el método fetch para consultar la moneda seleccionada en la API de mindicador.cl.

### 2. Convertir pesos chilenos

Archivos:

```text
index.html
script.js
```

El monto ingresado en pesos chilenos se divide por el valor actual de la moneda y el resultado se muestra automáticamente en la página.

### 3. Seleccionar diferentes monedas

Archivo:

```text
index.html
```

El select permite elegir entre dólar, euro y UF para realizar diferentes conversiones.

### 4. Manejar posibles errores

Archivo:

```text
script.js
```

La consulta se realiza dentro de try y catch. Si ocurre un problema con la API, se muestra un mensaje de error en el DOM.

### 5. Mostrar el historial

Archivos:

```text
index.html
script.js
```

Se utiliza Chart.js para crear un gráfico con los valores de la moneda seleccionada durante los últimos 10 días.

### 6. Diseño adaptable

Archivo:

```text
style.css
```

La distribución se adapta para que el conversor también pueda utilizarse desde pantallas más pequeñas.

---

## 🌐 GitHub Pages

Puedes ver el proyecto publicado aquí:

🔗 [Ver proyecto](https://cadina-sandy.github.io/prueba-conversor-de-monedas-js/) | 🔗 [Ver repositorio](https://github.com/cadina-sandy/prueba-conversor-de-monedas-js)

---

## 👩‍💻 Autora

Hecho con dedicación por **Sandy Cadin Azocar**.

---

## ✨ Gracias por visitar este proyecto

Esta prueba fue realizada como práctica del método fetch, consumo de APIs, manejo de errores y creación de gráficos con JavaScript.
