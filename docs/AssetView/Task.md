---
title: Tareas
---
## Tareas y notificaciones

> El interfaz visual de las tareas y notificaciones es temporal y cambiará en siguientes versiones para acomodarse al aspecto global de la aplicación. **Actualmente solo aplica a Saneamiento.**

RESIDELIA Asset Management permite la definición flujos de tareas que se pueden enlazar al ciclo de vida de la gestión de un activo.

Estos procesos son configurables y se pueden definir en función de parámetros cambiantes o tareas finalizadas. Las siguientes tareas en el workflow definido se lanzan automáticamente cuando un parámetro toma un determinado valor o bien cuando la tarea anterior se da por finalizada.

La definición de un workflow específico debe ser realizada por el equipo de RESIDELIA, así como la definición de nuevos tipos de tarea que se puedan generar manualmente.

La pestaña de TAREAS muestra la información de las tareas que se han lanzado y acometido dentro del workflow del saneamiento de un activo.

## Tareas

![user-tasks-view.png](/images/AssetView/Management/user-tasks-view.png)

En la sección de tareas se muestran las tareas asociadas al activo, tanto las que están por completar como las completadas.

Las tareas, se crean automáticamente en función del estado de saneamiento en el que se encuentra el activo, aunque también pueden crearse manualmente y siempre están asociadas a un activo concreto.

![captura-de-pantalla-2023-07-06-a-las-13.02.08.png](/images/AssetView/Management/captura-de-pantalla-2023-07-06-a-las-13.02.08.png)

La información que muestra cada tarea es la siguiente:

* Tipo de Tarea → se trata del tipo de tarea y que define qué acción hay que realizar a continuación sobre el activo.
* Parámetros Generales → se dividen por pestañas: DESCRIPCIÓN, ACTUACIONES y ARCHIVOS.

### Descripción

Contiene toda la información relacionada con la descripción propia de la tarea:

* **Descripción** → La descripción es editable individualmente.
* **Estado de la tarea** → Los estados de una tarea son: ‘Pendiente de asignación’, ‘En progreso’, ‘Finalizada’. Cuando una tarea se pasa a finalizada, automáticamente se genera(n) la(s) tarea(s) que sigue en el flujo de trabajo.
* **Activo** → activo relacionado con la tarea. Cada tarea estará relacionada a un único activo.
* **Fecha límite de ejecución de la tarea** → en función del tipo de tarea, se definen límites en la ejecución
* **Fecha de asignación de la tarea** → fecha en la que e asigna la tarea a un usuario.
* **Fecha de finalización** → fecha en la que la tarea se pasa a FINALIZADA
* **Departamento asignado para la ejecución de la tarea** → nombre del departamento responsable de la tarea. Disponible si se ha realizado una configuración previa para la empresa
* **Usuario asignado** → Usuario del departamento responsable encargado de la tarea.

> 💡 Cuando una tarea está asignada a un usuario, sólo se muestra a dicho usuario. Cuando una  tarea no se encuentra asignada, dicha tarea se muestra a todos los usuarios que son candidatos a ejecutar la tarea para informar que existe una tarea por hacer.

## Notificaciones

En la página principal de la información del activo se muestran las notificaciones referentes al propio activo:

![Captura de Pantalla 2022-05-30 a las 11.33.00.png](/images/AssetView/Management/captura-de-pantalla-2023-07-06-a-las-13.25.58.png)

Dichas notificaciones son configurable y se puede definir bajo qué condiciones de información de una activo lanzarlas. Esta configuración es necesario realizarla con el equipo de RESIDELIA para ajustarla a la necesidad concreta de cada cliente.

Las notificaciones tienen dos estados:

* PENDIENTE → La notificación se ha lanzado pero aún no ha sido procesada por ningún usuario
* PROCESADA → La notificación ha sido procesada por un usuario. Las notificaciones se procesan automáticamente cuando se seleccionan para ver el detalle.


Además del estado las notificaciones contienen la siguiente información:

* Fecha de lanzamiento de la notificación → Fecha y hora en la que se genera la notificación
* Activo al que afecta la notificación
* Usuario que ha procesado la notificación
* Fecha de procesamiento → Fecha de asignación automática cuando el estado de una notificación se pasa PROCESADA manualmente por un usuario.

**Activo y Tipo de notificación son dos parámetros que no se deben modificar puesto que son automáticos.**

Las notificaciones se asignan por defecto al departamento afectado por lo que pueden ser vistas por todos los integrantes de dicho departamento.

Las notificaciones poseen un tipo definido y son configurables, tanto el tipo de notificación como cuándo han de lanzarse.

![notification-detail.png](/images/AssetView/Management/notification-detail.png)

## Tareas y notificaciones del usuario

### Tareas del usuario

En el menú de la barra lateral, seleccionamos **TAREAS** para mostrar todas las tareas de todos los activos en las que el usuario actual bien está asignado, bien es candidato para la asignación.

![Captura de Pantalla 2022-07-21 a las 8.42.50.png](/images/AssetView/Management/Captura_de_Pantalla_2022-07-21_a_las_8.42.50.png)

![user-tasks-view.png](/images/AssetView/Management/user-tasks-view.png)

> 💡 Tareas en las que se es candidato pero finalmente no se asigna desaparecen de la vista del usuario actual.

A partir de ésta vista, el usuario empezará a trabajar en el trabajo que requiere su atención sin necesidad de tener que acceder a cada activo individualmente para conocer las acciones inmediatas que éste requiere.

### Notificaciones del usuario

En el menú de la barra lateral, seleccionamos NOTIFICACIONES para visualizar todas las notificaciones que afectan a todos los activos.

![captura-de-pantalla-2023-07-06-a-las-13.25.58.png](/images/AssetView/Management/captura-de-pantalla-2023-07-06-a-las-13.25.58.png)