# FAQS

## ¿Por qué son necesarias las subagrupaciones?

Para poder valorar de forma masiva todos los activos de la agrupación, es necesario establecer correctamente unas subagrupaciones de cara a estructurar los activos por tipología u otro parámetro y que las valoraciones masivas se extrapolen al conjunto de activos deseado.

**De forma automática**

Estas subagrupaciones pueden crearse automáticamente al subir la cartera a la plataforma si el usuario selecciona la opción de Finca Catastral:

![Untitled](/images/NeedToGroup/Untitled.png)

Y por defecto se formarían:

- En las Viviendas, se diferenciaría por número de habitaciones: “2 habs., 3 habs., etc…”
- En las demás tipologías, se diferenciaría por tipología: “Garajes, Trasteros, Comercios, etc…”

**De forma manual**

En la tabla de Activos de la agrupación, en modo edición, están disponibles opciones para crear subagrupación, añadir a una subagrupación existente y eliminar subagrupación.

![Untitled](/images/NeedToGroup/Untitled%201.png)

## ¿Cómo funciona el Algoritmo de Valoración AVM?

El algoritmo de valoración AVM por el método de comparables, trata de obtener los mejores candidatos de comparables de mercado para que sirvan de base en la valoración del inmueble.

En base a unos parámetros definidos, la plataforma realiza la búsqueda en la zona de todos los comparables de mercado disponibles. 

A todos estos comparables se les asigna un porcentaje de similaridad, por el que ordenando todos los resultados por este valor, **seleccionamos los 20 primeros comparables y los 8 primeros testigos con el porcentaje de similaridad más alto**.

## ¿Cómo se determina el porcentaje de similaridad?

Para determinar el porcentaje de similaridad de cada uno de los comparables, ponderamos distintos parámetros para obtener un valor numérico con el que podamos únicamente ordenar el total de resultados.

Estos parámetros, ordenados por peso de ponderación, serían los siguientes:

### **Ubicación**

Para la ponderación de la similaridad en concepto de la ubicación del inmueble, se tienen en cuenta estos dos parámetros: 

- **Renta Media Hogar**: Tenemos en cuenta las distintas secciones censales con la renta media del hogar para comparar zonas similares en concepto de renta. Ésto es debido a que en algunas ubicaciones, hay zonas muy próximas en distancia pero muy dispares en renta media del hogar.
- **Radio**: La búsqueda de comparables se realiza en un radio máximo de un kilómetro del inmueble a valorar.

### Características

La búsqueda de comparables se realiza en el mismo **Estado** y **Tipología** del inmueble a valorar, que tienen que ser coincidentes.

Para la ponderación de la similaridad en concepto de las características del inmueble, se tienen en cuenta, ordenados por peso de ponderación, los siguientes parámetros:

- **Superficie**: Con un límite de diferencia del 50% respecto al inmueble a valorar
- **Habitaciones**: Con un límite de diferencia de +- 2 respecto al inmueble a valorar
- **Baños**: Con un límite de diferencia de +- 2 respecto al inmueble a valorar
- **Otras**: Otras características como ascensor, garaje, trastero, piscina, terraza y jardín se tienen en cuenta para ponderar el comparable en el caso que dispongan de esta característica.

### Histórico

La plataforma cuenta con varios años de histórico de comparables, pero la búsqueda de comparables se realiza con una antiguedad máxima de un año.

La ponderación de la similaridad es mayor cuánto más reciente sea el comparable.

## ¿Cómo es el cálculo del valor?

ℹ️ Una vez que editas cualquier testigo manualmente, automáticamente el cálculo del valor unitario es la media del valor unitario de los testigos seleccionados.

Para realizar el cálculo del valor unitario del activo, únicamente tenemos en cuenta los testigos seleccionados y no todos los comparables.

Dependiendo de la tipología del inmueble a valorar, se hace el cálculo más conveniente:

- En la tipología Casas (viviendas unifamiliares), es la media del valor total de los testigos.
- En el resto de las tipologías, es la media del valor unitario de los testigos multiplicado por la superficie del inmueble a valorar.

## ¿Cómo es el proceso de identificación de anuncios duplicados?

Con el fin de aportar la máxima transparencia a la oferta inmobiliaria, nuestro objetivo es identificar con el mayor grado de precisión los anuncios duplicados que existen entre los diferentes portales inmobiliarios, ya que representan en torno al 40-50% del total de la oferta inmobiliaria.

Actualmente, estamos utilizando un algoritmo que a través de la localización y características de los inmuebles, es capaz de identificar en un gran porcentaje los anuncios duplicados, en el mismo portal o entre distintos portales, aglutinando todos estos anuncios en un registro único y pudiendo visualizar en el detalle del anuncio, la lista de comercializadores y el link a los portales.

Para no tener falsos positivos en esta detección, el algoritmo está diseñado de una manera flexible para que aunque tengamos casos de duplicados sin identificar, exista el menor porcentaje posible de falsos positivos.

En nuestro *Roadmap* está la mejora de esta detección para alcanzar el mayor grado de precisión posible utilizando técnicas de *Machine Learning* y reconocimento automático de imágenes.

## ¿Por qué veo características erróneas en los inmuebles?

Aunque hagamos un pre-filtrado para evitar tener anuncios erróneos en la plataforma, es inevitable que si, por ejemplo, el vendedor publica su vivienda sin ascensor aunque realmente la tenga, en la plataforma se mostrará que el inmueble no tiene ascensor, ya que actualmente no podemos validar la veracidad de todas las características del inmueble.