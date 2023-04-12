
# Grupos

## **Creación Grupos**

Los grupos de activos pueden formarse tanto de forma automática como de forma manual:

1. Al crear la cartera de activos, en el último paso del formulario de creación, existe una opción para seleccionar la agrupación por defecto:
    
    ![Untitled](/images/Groups/Untitled.png)
    
2. En el listado de activos, con la opción de Editar el listado, se pueden formar manualmente grupos o añadir activos a grupos existentes:
    
    ![Untitled](/images/Groups/Untitled%201.png)
## **Vista Grupos**

En el listado de activos, existe la opción de visualizar el listado de grupos:

![Untitled](/images/Groups/Untitled%202.png)

![Untitled](/images/Groups/Untitled%203.png)

O bien desde el listado de activos, se muestra una columna para saber a qué agrupación pertenece el activo:

![Captura de Pantalla 2022-09-14 a las 10.04.55.png](/images/Groups/Captura_de_Pantalla_2022-09-14_a_las_10.04.55.png)

Y seleccionando un grupo en particular, podemos ver los activos pertenecientes a esta agrupación:

![Untitled](/images/Groups/Untitled%204.png)

Si todos los activos del grupo pertenecen a la misma Finca Catastral, la vista del grupo cambiará para ser lo más similar posible a un activo unitario y poder valorar de forma masiva:

## Agrupación Finca Catastral

Cuando todos los activos de una agrupación pertenecen a la misma Finca Catastral, ésta se visualizará como si de un activo individual se tratase (con algunas diferencias) con el objetivo de que pueda valorarse de forma conjunta de una forma rápida y ágil.

Cualquier cambio realizado a la agrupación, se extrapolará de forma automática a cada uno de los activos individuales que pertenecen al grupo.

La edición individual de un activo que pertenece a una de estas agrupaciones es posible y puede realizarse la edición de cualquiera de las dos formas. Si la plataforma, al editar una agrupación, detecta que un activo ha sido editado individualmente, avisará al usuario para que tenga en cuenta que el cambio puede sobreescribir información existente.

### **Info**

![Untitled](/images/CadastralGroup/Untitled.png)

### **Activos**

![Untitled](/images/CadastralGroup/Untitled%201.png)

### **Valoración**

Para poder valorar los activos de la agrupación, es necesario que éstos estén correctamente distribuidos en subagrupaciones.

En la sección de Valoración, aparecen las subagrupaciones creadas donde podremos editar los comparables y el valor unitario de cada una de ellas.

Esta edición se extrapolará automáticamente a todos los activos pertenecientes a la subagrupación modificada y el valor unitario se multiplicará por la superficie de cada activo.

![Captura de Pantalla 2022-09-14 a las 16.18.08.png](/images/CadastralGroup/Captura_de_Pantalla_2022-09-14_a_las_16.18.08.png)

## ¿Qué características se enriquecen de forma automática?

Con la información disponible de Catastro, la plataforma puede interpretar ciertas características como primera estimación de forma automática.

Toda esta información automática se puede editar manualmente a posteriori para que los datos del inmueble sean lo más precisos posible.

**Habitaciones**

Con la superficie exclusivamente de la Vivienda, realizamos una estimación del número de habitaciones.

- Para edificaciones anteriores al año 2000:
    - Hasta 30 m² → Estudio
    - De 30 a 50 m² → 1 habitación
    - De 50 a 80 m² → 2 habitaciones
    - De 80 a 100 m² → 3 habitaciones
    - A partir 100 m² → 4 habitaciones
- Para edificaciones posteriores al año 2000:
    - Hasta 40 m² → Estudio
    - De 40 a 65 m² → 1 habitación
    - De 65 a 95 m² → 2 habitaciones
    - De 95 a 130 m² → 3 habitaciones
    - A partir de 130 m² → 4 habitaciones

**Ascensor**

Estimamos de forma automática si una vivienda plurifamiliar tiene ascensor si el edificio se ha construido posteriormente al año 1974 y cuenta con más de 4 alturas.

**Otros Anejos**

Con los elementos constructivos tanto del inmueble como de la finca catastral, podemos estimar si la vivienda tiene los anejos de: Garaje, Trastero, Terraza, Jardín, Piscina e Instalaciones Deportivas.

**Tipología**

En los inmuebles de uso catastral “Almacén -Estacionamiento”, podemos discernir con los elementos constructivos si se trata de un Garaje o Trastero.

**Calidad Inmueble**

Catastro cuenta con un parámetro de calidad del inmueble que nos ayuda a estimar un valor inicial de la calidad constructiva:

![Untitled](/images/Assets/caracteristicasautom.png)
