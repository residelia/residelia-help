---
title: Portales Inmobiliarios
---
## Portales Inmobiliarios (Oferta)

> ℹ️ La plataforma extrae la información de **Oferta** de los principales portales inmobiliarios *(Idealista, Fotocasa y pisos.com)* con una **actualización diaria** de las siguientes tipologías: Viviendas, Garajes, Trasteros, Comercial, Industrial y Oficinas.

La plataforma almacena el gran volumen de registros (~20M) con todo el histórico de anuncios de los últimos años y el histórico de cambios (por ej. de precio) que ha sufrido un anuncio antes de retirarse del mercado. Por lo que, desde la plataforma, aunque el anuncio esté retirado del mercado, es posible acceder a todo el detalle de la información.

Para aportar la máxima transparencia, en el detalle de cualquier anuncio, se aporta la información del anunciante y el link al anuncio original del portal.

Así mismo, con el objetivo de que la información de mercado esté lo menos distorsionada posible, se realiza un procesamiento de estos datos para tratar de eliminar anuncios erróneos e identificar anuncios duplicados entre los distintos portales.

## ¿Por qué veo características erróneas en los inmuebles?

Aunque hagamos un pre-filtrado para evitar tener anuncios erróneos en la plataforma, es inevitable que si, por ejemplo, el vendedor publica su vivienda sin ascensor aunque realmente la tenga, en la plataforma se mostrará que el inmueble no tiene ascensor, ya que actualmente no podemos validar la veracidad de todas las características del inmueble.

## ¿Cómo es el proceso de identificación de anuncios duplicados?

Con el fin de aportar la máxima transparencia a la oferta inmobiliaria, nuestro objetivo es identificar con el mayor grado de precisión los anuncios duplicados que existen entre los diferentes portales inmobiliarios, ya que representan en torno al 40-50% del total de la oferta inmobiliaria.

Actualmente, estamos utilizando un algoritmo que a través de la localización y características de los inmuebles, es capaz de identificar en un gran porcentaje los anuncios duplicados, en el mismo portal o entre distintos portales, aglutinando todos estos anuncios en un registro único y pudiendo visualizar en el detalle del anuncio, la lista de comercializadores y el link a los portales.

Para no tener falsos positivos en esta detección, el algoritmo está diseñado de una manera flexible para que aunque tengamos casos de duplicados sin identificar, exista el menor porcentaje posible de falsos positivos.

En nuestro *Roadmap* está la mejora de esta detección para alcanzar el mayor grado de precisión posible utilizando técnicas de *Machine Learning* y reconocimento automático de imágenes.
