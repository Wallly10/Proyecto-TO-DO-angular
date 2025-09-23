📋 Lista de Tareas - Angular

Este proyecto es una aplicación web de lista de tareas (To-Do List) desarrollada con Angular, usando TypeScript, HTML y CSS.
El objetivo principal es demostrar los conocimientos adquiridos en la materia de Programación Web en la Universidad Nacional de La Matanza (UNLaM).

🚀 Tecnologías utilizadas

Angular 20 – Framework principal

TypeScript 5.9.2 – Tipado estático y programación orientada a objetos

HTML5 – Estructura semántica de la aplicación

CSS3 – Estilos y diseño responsivo

RxJS 7.8.2 – Manejo de eventos y flujos de datos reactivos

Angular CLI 20.2.2 – Creación, compilación y ejecución del proyecto

📦 Dependencias y versiones
Paquete	Versión
@angular-devkit/architect	0.2002.2
@angular-devkit/core	20.2.2
@angular-devkit/schematics	20.2.2
@angular/build	20.2.2
@angular/cli	20.2.2
@angular/ssr	20.2.2
@schematics/angular	20.2.2
rxjs	7.8.2
typescript	5.9.2
zone.js	0.15.1
📚 Conceptos de Angular aplicados

En este proyecto se implementaron los siguientes conceptos:

Componentes
Creación de componentes modulares para dividir la aplicación en partes reutilizables:

app-add-task: Componente para agregar tareas

app-list-task: Componente para listar y mostrar las tareas

app-task: Componente individual para cada tarea

Directivas
Uso de directivas estructurales (*ngFor, *ngIf) y directivas de atributos ([ngClass], [ngStyle]).

Data Binding

Property Binding: Pasar datos de padre a hijo con @Input()

Event Binding: Captura de eventos con @Output() y EventEmitter

Two-Way Binding: Sincronización de datos con [(ngModel)]

Servicios e Inyección de Dependencias
Creación de un servicio para la gestión centralizada de las tareas, utilizando @Injectable() y Subject de RxJS para emitir cambios.

Ruteo
Implementación de RouterModule para navegar entre vistas (por ejemplo, tareas activas / completadas).

Estilos

Uso de CSS modularizado por componente

Diseño responsive con Flexbox

Clases condicionales según el estado de la tarea


⚙️ Instalación y ejecución

Sigue estos pasos para ejecutar el proyecto en tu máquina:

# Clonar el repositorio
git clone https://github.com/Wallly10/Proyecto-TO-DO-angular.git

# Entrar en el proyecto
cd nombre-del-repo

# Instalar dependencias
npm install

# Ejecutar la aplicación
ng serve


Luego, abre http://localhost:4200
 en tu navegador para ver la app en funcionamiento.

🧩 Funcionalidades principales

✅ Agregar nuevas tareas
✅ Marcar tareas como completadas
✅ Eliminar tareas
✅ Filtrar tareas por estado (todas, activas, completadas)
✅ Contador de tareas en tiempo real
✅ Interfaz responsive

📖 Autor

👨‍💻 Walter Rodríguez
📚 Proyecto desarrollado para la UNLaM como práctica de Angular.
