---
title: Faqs Home
---
# FAQS

## ¿Cómo se realiza una valoración manual?

El entorno para realizar la valoración manual tiene una serie de apartados diseñados para aglutinar la información más útil de cara a realizar la valoración.

![Untitled](/images/ManualValuation/Untitled.png)

En la sección de Valoración, podemos realizar una valoración manual por el método de los comparables. En el encabezado superior, podemos seleccionar si la valoración es Venta o Alquiler.

Si la plataforma ha realizado una valoración automática AVM, el listado de comparables estará completo con los candidatos más similares realizados por el algoritmo de valoración AVM.

[¿Cómo funciona el Algoritmo de Valoración AVM?](/Faqs/#%C2%BFcomo-funciona-el-algoritmo-de-valoracion-avm)

En este listado de comparables, se pueden eliminar, seleccionar/deseleccionar, editar y añadir los comparables necesarios de cara a la valoración.

[¿Cómo se añaden comparables a la valoración?](/Faqs/#%C2%BFcomo-se-anaden-comparables-a-la-valoracion)

Así mismo, existen dos columnas adicionales en cada comparable:

* Porcentaje de Negociación → Descuento del valor unitario del comparable.
* Coeficiente de Homogeneización → Coeficiente para aplicar distintas ponderaciones a los comparables. Se aplica en el valor unitario del comparable.

El valor unitario de la valoración corresponde a la media de los valores unitarios de los testigos seleccionados. Es posible editar tanto el valor como el valor unitario manualmente y durante la valoración, no se realizará ningún cálculo adicional para re-calcular el valor.

El valor de venta rápida, se puede establecer manualmente con el valor definido o con un porcentaje de descuento sobre el valor.

El tipo de valoración es editable según la consideración del usuario:

![Captura de pantalla 2023-01-13 a las 16.39.24.png](/images/ManualValuation/Captura_de_pantalla_2023-01-13_a_las_16.39.24.png)

**[¿Qué es una valoración firmada?](/Faqs/#%C2%BFque-es-una-valoracion-firmada)**

**CAPEX**

Existe la posibilidad de adjuntar un listado de partidas de CAPEX (o incluir únicamente el total) para posteriormente decidir si descontar este CAPEX a la valoración.

![Untitled](/images/ManualValuation/Untitled%201.png)

**Histórico de Valores**

Por un lado, el **histórico de valoraciones** detallan todas las valoraciones realizadas en la plataforma con su diferente tipología, valor o fecha.

Los **valores de referencia**, son aquellos valores que pueden obtenerse externamente y que son útiles para tenerlos de referencia de cara a la valoración: Vendedor, Tasación, Real Estate, Broker Deuda pendiente y Valor UW.

Todos estos valores, tanto las valoraciones internas como los valores de referencia, pueden importarse directamente al crear la cartera a través del DT en la pestaña *Valuations* de la plantilla Excel.

![Captura de Pantalla 2022-10-07 a las 9.32.56.png](/images/ManualValuation/Captura_de_Pantalla_2022-10-07_a_las_9.32.56.png)

# Barra lateral

La barra lateral derecha contiene estadísticas de mercado, socio-demográficas e ingresos de la zona del activo a valorar.

![Untitled](/images/ManualValuation/Untitled%202.png)

![Untitled](/images/ManualValuation/Untitled%203.png)

![Untitled](/images/ManualValuation/Untitled%204.png)

Así mismo esta barra, puede contener la información de los mapas, capas, filtros y POIs, pulsando en el mapa las opciones: 

[¿Existe un pre-filtro?](/Faqs/#%C2%BFexiste-un-pre-filtro)

![Untitled](/images/ManualValuation/Untitled%205.png)

![Untitled](/images/ManualValuation/Untitled%206.png)

![Untitled](/images/ManualValuation/Untitled%207.png)

![Untitled](/images/ManualValuation/Untitled%208.png)

![Untitled](/images/ManualValuation/Untitled%209.png)

## ¿Cómo se añaden comparables a la valoración?

### Mapa / Listado

Seleccionando la capa de datos deseada:

![Untitled](/images/AddComparables/Untitled.png)

Todos los resultados aparecen en el mapa pero también en la pestaña de “Comparables”.

Al pulsar en el POI del mapa o en el icono de detalle de los resultados:

![Captura de Pantalla 2022-07-27 a las 17.04.25.png](/images/AddComparables/Captura_de_Pantalla_2022-07-27_a_las_17.04.25.png)

Podemos añadir el comparable o bien desde el icono del listado o desde el detalle del comparable:

![Untitled](/images/AddComparables/Untitled%201.png)

![Untitled](/images/AddComparables/Untitled%202.png)

### Formulario

En el listado de testigos, seleccionando la opción de “Nuevo Comparable”, se despliega un formulario donde podremos incluir manualmente la información del comparable.

![Untitled](/images/AddComparables/Untitled%203.png)

![Untitled](/images/AddComparables/Untitled%204.png)

## ¿Cómo se determina la localización?

Disponemos de dos fuentes para determinar la localización del activo: Catastro y Google Maps.

1. Si el activo cuenta con una Referencia Catastral correcta, utilizamos esta fuente para obtener la dirección completa (con bloque y planta en el caso de Pisos), las coordenadas geográficas y la foto de la fachada de Catastro.
2. Si el activo no dispone de una Referencia Catastral, a través de Google Maps, primeramente con las coordenadas geográficas, o en su defecto con la dirección en formato texto, localizamos el inmueble en la ubicación más precisa posible.

Una vez el inmueble está correctamente localizado, enriquecemos la información con su correspondencia con el municipio INE, sección censal, código postal, etc…con el objetivo de obtener la información estadística de la zona.

## ¿Cómo se determina la superficie?

De cara a ofrecer la mejor valoración del inmueble, el parámetro más determinante es la superficie de éste. Es por ello que hacemos un análisis específico para determinar cuál es la superficie más adecuada para el inmueble.

Cuando tenemos más de una superficie, normalmente la introducida por el usuario (o datatape) y las proporcionadas por Catastro, tenemos que decidir cuál de ellas tiene preferencia. 

* En el caso de que el inmueble sea una **vivienda unifamiliar**, la superficie catastral que tenemos en cuenta es la **superficie construida total**.
* En el caso de **viviendas plurifamiliares**, dependiendo de la superficie de **elementos comunes asociada (límite 13%)**, tenemos en cuenta la **superficie de la vivienda más la superficie de comunes de forma completa o parcial**.

La superficie catastral elegida dependiendo de la tipología, se compara con la introducida por el usuario (o datatape):

* Diferencia mayor del 15% → Se escoge la Catastral para evitar que el dato introducido pudiera ser erróneo.

    ℹ️ En estos casos, en el listado de activos, se marca un *Warning* ⚠️ para tenerlo en cuenta y que en la valoración del activo manual pueda elegirse la superficie deseada.
* Diferencia menor del 15% → Se escoge la introducida por el usuario (o datatape), ya que habitualmente esta superficie puede venir de Registro o de una medición manual más precisa.

## ¿Qué características se enriquecen de forma automática?

Con la información disponible de Catastro, la plataforma puede interpretar ciertas características como primera estimación de forma automática.

Toda esta información automática se puede editar manualmente a posteriori para que los datos del inmueble sean lo más precisos posible.

**Habitaciones**

Con la superficie exclusivamente de la Vivienda, realizamos una estimación del número de habitaciones.

* Para edificaciones anteriores al año 2000:

  * Hasta 30 m² → Estudio
  * De 30 a 50 m² → 1 habitación
  * De 50 a 80 m² → 2 habitaciones
  * De 80 a 100 m² → 3 habitaciones
  * A partir 100 m² → 4 habitaciones
* Para edificaciones posteriores al año 2000:

  * Hasta 40 m² → Estudio
  * De 40 a 65 m² → 1 habitación
  * De 65 a 95 m² → 2 habitaciones
  * De 95 a 130 m² → 3 habitaciones
  * A partir de 130 m² → 4 habitaciones

**Ascensor**

Estimamos de forma automática si una vivienda plurifamiliar tiene ascensor si el edificio se ha construido posteriormente al año 1974 y cuenta con más de 4 alturas.

**Otros Anejos**

Con los elementos constructivos tanto del inmueble como de la finca catastral, podemos estimar si la vivienda tiene los anejos de: Garaje, Trastero, Terraza, Jardín, Piscina e Instalaciones Deportivas.

**Tipología**

En los inmuebles de uso catastral “Almacén -Estacionamiento”, podemos discernir con los elementos constructivos si se trata de un Garaje o Trastero.

**Calidad Inmueble**

Catastro cuenta con un parámetro de calidad del inmueble que nos ayuda a estimar un valor inicial de la calidad constructiva:

![Untitled](/images/AutoEnrichment/Untitled.png)

## ¿Se priorizan los datos de Catastro frente a los que introduzco manualmente?

En general, ante una discrepancia entre los datos introducidos por el usuario y Catastro, prevalecerán los datos catastrales del inmueble ante los datos introducidos manualmente para evitar posibles errores, ya que normalmente los datos catastrales suelen ser fidedignos.

En la valoración manual del activo, el usuario puede manualmente editar cualquier dato sin que la plataforma realice ninguna comprobación y que prevalezca el dato del usuario.

## ¿Cómo funciona el Algoritmo de Valoración AVM?

El algoritmo de valoración AVM por el método de comparables, trata de obtener los mejores candidatos de comparables de mercado para que sirvan de base en la valoración del inmueble.

En base a unos parámetros definidos, la plataforma realiza la búsqueda en la zona de todos los comparables de mercado disponibles. 

A todos estos comparables se les asigna un porcentaje de similaridad, por el que ordenando todos los resultados por este valor, **seleccionamos los 20 primeros comparables y los 8 primeros testigos con el porcentaje de similaridad más alto**.

## ¿Por qué son necesarias las subagrupaciones?

Para poder valorar de forma masiva todos los activos de la agrupación, es necesario establecer correctamente unas subagrupaciones de cara a estructurar los activos por tipología u otro parámetro y que las valoraciones masivas se extrapolen al conjunto de activos deseado.

**De forma automática**

Estas subagrupaciones pueden crearse automáticamente al subir la cartera a la plataforma si el usuario selecciona la opción de Finca Catastral:

![Untitled](/images/NeedToGroup/Untitled.png)

Y por defecto se formarían:

* En las Viviendas, se diferenciaría por número de habitaciones: “2 habs., 3 habs., etc…”
* En las demás tipologías, se diferenciaría por tipología: “Garajes, Trasteros, Comercios, etc…”

**De forma manual**

En la tabla de Activos de la agrupación, en modo edición, están disponibles opciones para crear subagrupación, añadir a una subagrupación existente y eliminar subagrupación.

![Untitled](/images/NeedToGroup/Untitled%201.png)

## ¿Qué es una valoración firmada?

<aside>

ℹ️ La firma de una valoración tiene que realizarse como último paso antes de guardar la valoración.

</aside>

El principal objetivo de una valoración firmada es que el usuario, marcando esta opción, confirma el valor, y de esta forma, diferencia esta valoración frente al histórico de valoraciones restante.

Si tu organización tiene una integración con RESIDELIA, esta opción desencadenaría el traspaso de información (Datos e Informe PDF) de forma automática a los sistemas de tu organización para evitar duplicar el trabajo en el otro sistema.

![Captura de pantalla 2023-01-13 a las 16.36.00.png](/images/SignedValuation/Captura_de_pantalla_2023-01-13_a_las_16.36.00.png)

![Untitled](/images/SignedValuation/Untitled.png)

## ¿Cómo se determina el porcentaje de similaridad?

Para determinar el porcentaje de similaridad de cada uno de los comparables, ponderamos distintos parámetros para obtener un valor numérico con el que podamos únicamente ordenar el total de resultados.

Estos parámetros, ordenados por peso de ponderación, serían los siguientes:

### **Ubicación**

Para la ponderación de la similaridad en concepto de la ubicación del inmueble, se tienen en cuenta estos dos parámetros: 

* **Renta Media Hogar**: Tenemos en cuenta las distintas secciones censales con la renta media del hogar para comparar zonas similares en concepto de renta. Ésto es debido a que en algunas ubicaciones, hay zonas muy próximas en distancia pero muy dispares en renta media del hogar.
* **Radio**: La búsqueda de comparables se realiza en un radio máximo de un kilómetro del inmueble a valorar.

### Características

La búsqueda de comparables se realiza en el mismo **Estado** y **Tipología** del inmueble a valorar, que tienen que ser coincidentes.

Para la ponderación de la similaridad en concepto de las características del inmueble, se tienen en cuenta, ordenados por peso de ponderación, los siguientes parámetros:

* **Superficie**: Con un límite de diferencia del 50% respecto al inmueble a valorar
* **Habitaciones**: Con un límite de diferencia de +- 2 respecto al inmueble a valorar
* **Baños**: Con un límite de diferencia de +- 2 respecto al inmueble a valorar
* **Otras**: Otras características como ascensor, garaje, trastero, piscina, terraza y jardín se tienen en cuenta para ponderar el comparable en el caso que dispongan de esta característica.

### Histórico

La plataforma cuenta con varios años de histórico de comparables, pero la búsqueda de comparables se realiza con una antiguedad máxima de un año.

La ponderación de la similaridad es mayor cuánto más reciente sea el comparable.

## ¿Cómo es el cálculo del valor?

ℹ️ Una vez que editas cualquier testigo manualmente, automáticamente el cálculo del valor unitario es la media del valor unitario de los testigos seleccionados.

Para realizar el cálculo del valor unitario del activo, únicamente tenemos en cuenta los testigos seleccionados y no todos los comparables.

Dependiendo de la tipología del inmueble a valorar, se hace el cálculo más conveniente:

* En la tipología Casas (viviendas unifamiliares), es la media del valor total de los testigos.
* En el resto de las tipologías, es la media del valor unitario de los testigos multiplicado por la superficie del inmueble a valorar.

## ¿Cómo es el proceso de identificación de anuncios duplicados?

Con el fin de aportar la máxima transparencia a la oferta inmobiliaria, nuestro objetivo es identificar con el mayor grado de precisión los anuncios duplicados que existen entre los diferentes portales inmobiliarios, ya que representan en torno al 40-50% del total de la oferta inmobiliaria.

Actualmente, estamos utilizando un algoritmo que a través de la localización y características de los inmuebles, es capaz de identificar en un gran porcentaje los anuncios duplicados, en el mismo portal o entre distintos portales, aglutinando todos estos anuncios en un registro único y pudiendo visualizar en el detalle del anuncio, la lista de comercializadores y el link a los portales.

Para no tener falsos positivos en esta detección, el algoritmo está diseñado de una manera flexible para que aunque tengamos casos de duplicados sin identificar, exista el menor porcentaje posible de falsos positivos.

En nuestro *Roadmap* está la mejora de esta detección para alcanzar el mayor grado de precisión posible utilizando técnicas de *Machine Learning* y reconocimento automático de imágenes.

## ¿Por qué veo características erróneas en los inmuebles?

Aunque hagamos un pre-filtrado para evitar tener anuncios erróneos en la plataforma, es inevitable que si, por ejemplo, el vendedor publica su vivienda sin ascensor aunque realmente la tenga, en la plataforma se mostrará que el inmueble no tiene ascensor, ya que actualmente no podemos validar la veracidad de todas las características del inmueble.

## ¿Existe un pre-filtro?

Sí, al seleccionar las capas de Oferta o Cierres, de manera automática se establece un pre-filtro (indicador azul en el icono) como apoyo para no tener que realizar el filtro de forma manual en todas las valraciones.

De todas formas, de forma manual, el usuario puede activar o desactivar los filtros deseados en todo momento.

### Pre-filtros

* **Oferta**: Anuncios activos, ±~25% superficie y coincidente en habitaciones.
* **Cierres**: Misma tipología y los tres últimos años.