---
title: Enriquecimiento del activo
---
# Enriquecimiento del activo

Una vez recibida toda la información de los activos de la cartera, la plataforma realiza una serie de operaciones con el objetivo de enriquecer la información con las diversas fuentes disponibles en la herramienta: Catastro, Google Maps, Google Street View, INE, Fomento, Agencia Tributaria, etc…

A partir de la información disponible de cada activo, la aplicación empleará diferentes automatismos para tratar de determinar, con la mayor precisión posible, las características del inmueble.

## ¿Cómo se determina la localización?

Disponemos de dos fuentes para determinar la localización del activo: Catastro y Google Maps.

1. Si el activo cuenta con una Referencia Catastral correcta, utilizamos esta fuente para obtener la dirección completa (con bloque y planta en el caso de vivienda multifamiliar), las coordenadas geográficas y la foto de la fachada de Catastro.

2. Si el activo no dispone de una Referencia Catastral, a través de Google Maps, primeramente con las coordenadas geográficas, o en su defecto con la dirección en formato texto, localizamos el inmueble en la ubicación más precisa posible.

Una vez el inmueble está correctamente localizado, enriquecemos la información con su correspondencia con el municipio INE, sección censal, código postal, etc…con el objetivo de obtener la información estadística de la zona.

## ¿Cómo se determina la superficie?

De cara a ofrecer la mejor valoración del inmueble, el parámetro más determinante es la superficie de éste. Es por ello que hacemos un análisis específico para determinar cuál es la superficie más adecuada para el inmueble.

Cuando tenemos más de una superficie, normalmente la introducida por el usuario (o datatape) y las proporcionadas por Catastro, tenemos que decidir cuál de ellas tiene preferencia. 

* En el caso de que el inmueble sea una **vivienda unifamiliar**, la superficie catastral que tenemos en cuenta es la **superficie construida total**.
* En el caso de **viviendas multifamiliar**, dependiendo de la superficie de **elementos comunes asociada (límite 13%)**, tenemos en cuenta la **superficie de la vivienda más la superficie de comunes de forma completa o parcial**.

La superficie catastral elegida dependiendo de la tipología, se compara con la introducida por el usuario (o datatape):

* Diferencia mayor del 15% → Se escoge la Catastral para evitar que el dato introducido pudiera ser erróneo.
    
    > En estos casos, en el listado de activos, se marca un *Warning* ⚠️ para tenerlo en cuenta y que en la valoración manual del activo pueda elegirse la superficie deseada.

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

*TBD*

**Calidad Inmueble**

Catastro cuenta con un parámetro de calidad del inmueble que nos ayuda a estimar un valor inicial de la calidad constructiva:

![Untitled](/images/AssetView/Asset_Analisis.png)
