export class ToDoList {
    constructor(title) {
        this.title = title;
        this.isCompleted = false;
        this.toDos = [];
    }

    addToDo(todo) {
        this.toDos.push({ id: Math.random(), isDone: false, ...todo });
    }

    updateToDo(id, updatedToDo) {
        this.toDos.map((toDo) => (id === toDo.id ? { id, ...updatedToDo } : toDo));
    }

    deleteToDo(id) {
        this.toDos.filter(({ id: toDoId }) => id !== toDoId);
    }

    // TODO: add logic for completion one 1. toDo, 2. all toDos
    // TODO: add function for sorting by date, title and completion status

    get toDoList() {
        return this.toDos;
    }
}
