
// clase que se crea al crar una nueva tarea
export class Todo {

    static fromJson( {id,tarea,completado,creado} ){

        const temTodo = new Todo( tarea );

        temTodo.id           =id;
        temTodo.completado   =completado;
        temTodo.creado       =creado;

        return temTodo;
    }


    constructor( tarea ) {

        this.tarea      = tarea; // da nombre a la tarea

        this.id         = new Date().getTime(); // la da un numero identificador
        this.completado = false; // como essta recien creada parte en falso
        this.creado     = new Date(); // le da una fecha de creacion
    };

};

