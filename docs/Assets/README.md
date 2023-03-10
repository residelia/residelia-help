# Activos

## [Listado](/Assets/Listado)
<aside>
ℹ️ Es posible mostrar u ocultar columnas del listado de activos. En la parte derecha, en la cabecera de las columnas, pulsar en el icono: **|||**

</aside>

En el listado de activos de una cartera, es posible realizar las siguientes acciones:

- Vista Grupos *(Más Info en 🏢 Grupos)*
- Vista Mapa
- Editar → Realizar acciones sobre el listado como formar grupos, archivar, etc…
- Exportar Excel → Exportación de todos los datos de todos los activos de la cartera
- Crear activo
    - Individual → Creación de un activo nuevo a la cartera a través del formulario
    - Masivo → Creación de activos de forma masiva a través del DT *(Más Info en 🏪 Carteras)*

![Untitled](/images/Assets/Untitled.png)

![Untitled](/images/Assets/Untitled%201.png)

## [Grupos](/Assets/Groups)

### **Creación Grupos**

Los grupos de activos pueden formarse tanto de forma automática como de forma manual:

1. Al crear la cartera de activos, en el último paso del formulario de creación, existe una opción para seleccionar la agrupación por defecto:
    
    ![Untitled](/images/Groups/Untitled.png)
    
2. En el listado de activos, con la opción de Editar el listado, se pueden formar manualmente grupos o añadir activos a grupos existentes:
    
    ![Untitled](/images/Groups/Untitled%201.png)
    

### **Vista Grupos**

En el listado de activos, existe la opción de visualizar el listado de grupos:

![Untitled](/images/Groups/Untitled%202.png)

![Untitled](/images/Groups/Untitled%203.png)

O bien desde el listado de activos, se muestra una columna para saber a qué agrupación pertenece el activo:

![Captura de Pantalla 2022-09-14 a las 10.04.55.png](/images/Groups/Captura_de_Pantalla_2022-09-14_a_las_10.04.55.png)

Y seleccionando un grupo en particular, podemos ver los activos pertenecientes a esta agrupación:

![Untitled](/images/Groups/Untitled%204.png)

Si todos los activos del grupo pertenecen a la misma Finca Catastral, la vista del grupo cambiará para ser lo más similar posible a un activo unitario y poder valorar de forma masiva:

## [Agrupación Finca Catastral](/Assets/CadastralGroup)

Cuando todos los activos de una agrupación pertenecen a la misma Finca Catastral, ésta se visualizará como si de un activo individual se tratase (con algunas diferencias) con el objetivo de que pueda valorarse de forma conjunta de una forma rápida y ágil.

Cualquier cambio realizado a la agrupación, se extrapolará de forma automática a cada uno de los activos individuales que pertenecen al grupo.

La edición individual de un activo que pertenece a una de estas agrupaciones es posible y puede realizarse la edición de cualquiera de las dos formas. Si la plataforma, al editar una agrupación, detecta que un activo ha sido editado individualmente, avisará al usuario para que tenga en cuenta que el cambio puede sobreescribir información existente.

### **Info**

![Untitled](/images/CadastralGroup/Untitled.png)

### **Activos**

![Untitled](/images/CadastralGroup/Untitled%201.png)

### **Valoración**

Para poder valorar los activos de la agrupación, es necesario que éstos estén correctamente distribuidos en subagrupaciones.

[¿Por qué son necesarias las subagrupaciones?](/Faqs/#%C2%BFpor-que-son-necesarias-las-subagrupaciones)

En la sección de Valoración, aparecen las subagrupaciones creadas donde podremos editar los comparables y el valor unitario de cada una de ellas.

Esta edición se extrapolará automáticamente a todos los activos pertenecientes a la subagrupación modificada y el valor unitario se multiplicará por la superficie de cada activo.

![Captura de Pantalla 2022-09-14 a las 16.18.08.png](/images/CadastralGroup/Captura_de_Pantalla_2022-09-14_a_las_16.18.08.png)
## Vista del Activo

### Secciones

<aside>
👉🏼 Para editar la información, hay que pulsar en el icono 📝 de la esquina superior derecha para establecer el modo de edición. En este modo, el icono será azul y podrás guardar los cambios pulsando en el icono 💾

</aside>

## [Info](/Assets/Info)


Sección para editar la información de localización, características, comentarios, superficies, etc…relacionada al activo.

![Untitled](/images/Info/Untitled.png)

**********************Superficies**********************

El icono ⭐ en el listado de superficies indica únicamente cuál es la superficie principal del activo, seleccionada de forma automática al crear el activo o de forma manual por el usuario. 

Esta superficie principal **no afecta a la superficie escogida en la valoración**, ya que esta es independiente para minimizar errores de valoración al editar cualquier superficie del activo.

************************Imagen principal************************

Por defecto, la imagen principal es la foto de la fachada de Catastro. Al subir nuevas imágenes, en la galería, el icono ⭐ permite establecer cualquier otra imagen principal.

**********Anejos**********

Dentro de las características del activo, los anejos están en forma de icono con tres estados (Sí / No / Desconocido ❓)

**********Impuestos**********

La estimación del IBI anual se realiza multiplicando el valor catastral del inmueble por el coeficiente de Hacienda del municipio

**********************Comentarios**********************

Se pueden realizar distintos tipos de comentario, para ello habría que pulsar en el icono y seleccionar el tipo más adecuado: *Información, Bandera Roja, Visita y Área*

![Captura de Pantalla 2022-10-20 a las 9.21.44.png](/images/Info/Captura_de_Pantalla_2022-10-20_a_las_9.21.44.png)

## [Valoración](/Assets/Valuation)

### Tipos de Valoración

1. AVM → Valoración Automática AVM
2. AVMPro → AVM supervisado con al menos una edición manual
3. Desktop → Valoración manual sin visita
4. Drive-By → Valoración con visita exterior
5. Drive-In → Valoración con visita interior

### Valoración Automática AVM

En primer lugar, después de obtener la información más completa posible del activo, la plataforma, a través del algoritmo, realiza una valoración en AVM de cada activo de forma individual.

Esta valoración AVM es una primera estimación del valor del activo. Es el primer paso entre distintos tipos de valoración, pudiendo afinar mucho más la valoración trabajando el activo de forma manual.

[¿Cómo funciona el Algoritmo de Valoración AVM?](/Faqs/#%C2%BFcomo-funciona-el-algoritmo-de-valoracion-avm)

### Valoración Manual

La valoración manual por el método de comparables está disponible para todas las tipologías de activos. Así mismo, puedes realizar una valoración de Venta y/o Alquiler.

Para realizar una valoración, desde la vista del activo, podemos entrar en modo edición y realizar cualquier cambio en las siguientes secciones: Info, Valoración y/o Docs.

![Captura de Pantalla 2022-09-12 a las 12.50.36.png](/images/Valuation/Captura_de_Pantalla_2022-09-12_a_las_12.50.36.png)

[¿Cómo se realiza una valoración manual?](/Faqs/ManualValuation/)

### Histórico de Valores

Por un lado, el **histórico de valoraciones** detallan todas las valoraciones realizadas en la plataforma con su diferente tipología, valor o fecha.

Los **valores de referencia**, son aquellos valores que pueden obtenerse externamente y que son útiles para tenerlos de referencia de cara a la valoración: Vendedor, Tasación, Real Estate, Broker, Deuda pendiente y Valor UW.

Todos estos valores, tanto las valoraciones internas como los valores de referencia, pueden importarse directamente al crear la cartera a través del DT en la pestaña *Valuations* de la plantilla Excel.

![Captura de Pantalla 2022-10-07 a las 9.32.56.png](/images/Valuation/Captura_de_Pantalla_2022-10-07_a_las_9.32.56.png)

### Exportación del Informe de Valoración PDF

En todo momento, con la información disponible del activo y su valoración, podemos exportar un PDF, con la opción de “Generar Informe” en la sección “Docs”:

![Untitled](/images/Valuation/Untitled.png)

Al seleccionar la opción, se despliega un formulario para personalizar el informe:

- Idioma
- Imágenes
- Anexos PDF

![Untitled](/images/Valuation/Untitled%201.png)

## [Docs](/Assets/Docs)

En la sección Docs podremos almacenar y gestionar la documentación asociada al activo. Es posible importar o descargar ficheros relacionados al activo, pudiendo etiquetar los archivos.

![Captura de pantalla 2023-01-12 a las 13.13.26.png](/images/Docs/Captura_de_pantalla_2023-01-12_a_las_13.13.26.png)

![Captura de pantalla 2023-01-12 a las 13.14.54.png](/images/Docs/Captura_de_pantalla_2023-01-12_a_las_13.14.54.png)

### Exportación del Informe de Valoración PDF

En todo momento, con la información disponible del activo y su valoración, podemos exportar un PDF, con la opción de “Generar Informe”:

![Untitled](/images/Docs/Untitled.png)

Al seleccionar la opción, se despliega un formulario para personalizar el informe:

- Idioma
- Imágenes
- Anexos PDF

![Untitled](/images/Docs/Untitled%201.png)

## [Historial](/Assets/History)

En la sección del Historial se recogen todos los cambios realizados sobre el activo indicando el responsable del cambio con la fecha y hora.

![Captura de pantalla 2023-01-12 a las 13.17.11.png](/images/History/Captura_de_pantalla_2023-01-12_a_las_13.17.11.png)