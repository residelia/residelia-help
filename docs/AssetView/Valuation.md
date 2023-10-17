---
title: Valoración
---
# Valoración

## Tipos de Valoración

1. AVM → Valoración Automática AVM
2. AVMPro → AVM supervisado con al menos una edición manual
3. Desktop → Valoración manual sin visita
4. Drive-By → Valoración con visita exterior
5. Drive-In → Valoración con visita interior

## Valoración Automática AVM

En primer lugar, después de obtener la información más completa posible del activo, la plataforma, a través del algoritmo, realiza una valoración en AVM de cada activo de forma individual.

Esta valoración AVM es una primera estimación del valor del activo. Es el primer paso entre distintos tipos de valoración, pudiendo afinar mucho más la valoración trabajando el activo de forma manual.

[¿Cómo funciona el Algoritmo de Valoración AVM?](/Faqs/Valuation/ValuationAlgorithm.md)

## Valoración Manual

La valoración manual por el método de comparables está disponible para todas las tipologías de activos. Así mismo, puedes realizar una valoración de Venta y/o Alquiler.

![Untitled](/images/AssetView/Valuation/Main.png)

Si la plataforma ha realizado una valoración automática AVM, el listado de comparables estará completo con los candidatos más similares realizados por el algoritmo de valoración AVM.

En este listado de comparables, se pueden eliminar, seleccionar/deseleccionar, editar y añadir los comparables necesarios de cara a la valoración.

Así mismo, existen dos columnas adicionales en cada comparable:

* Porcentaje de Negociación → Descuento del valor unitario del comparable.
* Coeficiente de Homogeneización → Coeficiente para aplicar distintas ponderaciones a los comparables. Se aplica en el valor unitario del comparable.

El valor unitario de la valoración corresponde a la media de los valores unitarios de los testigos seleccionados. Es posible editar tanto el valor como el valor unitario manualmente y durante la valoración, no se realizará ningún cálculo adicional para re-calcular el valor.

El valor de venta rápida, se puede establecer manualmente con el valor definido o con un porcentaje de descuento sobre el valor.

El tipo de valoración es editable según la consideración del usuario:

![Untitled](/images/AssetView/Valuation/Types.png)

### CAPEX

Existe la posibilidad de adjuntar un listado de partidas de CAPEX (o incluir únicamente el total) para posteriormente decidir si descontar este CAPEX a la valoración.

![Untitled](/images/AssetView/Valuation/CAPEX.png)

### ¿Cómo se añaden comparables a la valoración?

**Mapa / Listado**

Seleccionando la [capa de datos](/Assets/Map.html#capas-de-datos) deseada, todos los resultados aparecen en el mapa pero también en la pestaña de “Comparables”.

Al pulsar en el POI del mapa o en el icono de detalle de los resultados:

![Untitled](/images/AssetView/Valuation/Detail_Comparable_Button.png)

Podemos añadir el comparable o bien desde el icono del listado o desde el detalle del comparable:

| Oferta                                                             | Cierres                                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| ![Untitled](/images/AssetView/Valuation/Detail_Comparable_Add.png) | ![Untitled](/images/AssetView/Valuation/Detail_Comparable_Add_2.png) |

**Formulario**

En el listado de testigos, seleccionando la opción de “Nuevo Comparable”, se despliega un formulario donde podremos incluir manualmente la información del comparable.

![Untitled](/images/AssetView/Valuation/New_Manual_Comparable.png)

![Untitled](/images/AssetView/Valuation/New_Manual_Comparable_2.png)

### Capa con tus activos

Además de las capas de Oferta y Cierres, puedes acceder a todos los activos de tu organización para poder visualizarlos en el mapa cuando estás realizando un análisis de un activo en concreto. Es posible añadir otro activo de tu organización como comparable del activo que estás editando.

Así mismo, también puedes copiar la información de otro activo de tu organización al activo que estás editando. De esta forma se sobreescribirá la información de:

* Info: Análisis de área, Información adicional, Tipo comunidad y Comentarios (con el autor y fecha del cambio, no del origen)
* Valoración: Todos los comparables en el tipo de operación elegido (Venta, Alquiler o Ambas)

### ¿Qué es una valoración firmada?

> La firma de una valoración tiene que realizarse como último paso antes de guardar la valoración.

El principal objetivo de una valoración firmada es que el usuario, marcando esta opción, confirma el valor, y de esta forma, diferencia esta valoración frente al histórico de valoraciones restante.

Si tu organización tiene una integración con RESIDELIA, esta opción desencadenaría el traspaso de información (Datos e Informe PDF) de forma automática a los sistemas de tu organización para evitar duplicar el trabajo en el otro sistema.

![Untitled](/images/AssetView/Valuation/Signed_Valuation_Icon.png)

![Untitled](/images/AssetView/Valuation/Signed_Valuation_History.png)

## Histórico de Valores

Por un lado, el **histórico de valoraciones** detallan todas las valoraciones realizadas en la plataforma con su diferente tipología, valor o fecha.

Los **valores de referencia**, son aquellos valores que pueden obtenerse externamente y que son útiles para tenerlos de referencia de cara a la valoración: Vendedor, Tasación, Business Plan, Broker, Deuda pendiente y Valor UW.

Todos estos valores, tanto las valoraciones internas como los valores de referencia, pueden importarse directamente al crear la cartera a través del DT en la pestaña *Valuations* de la plantilla Excel.

![Untitled](/images/AssetView/Valuation/Valuations_History.png)