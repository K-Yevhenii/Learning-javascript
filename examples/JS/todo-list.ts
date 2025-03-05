interface ToDo {
    title: string;
    id: number;
    description: string;
    isDone: boolean;
}
export class TodoList {
    private toDos: ToDo[];
    title: string;
    owner: User;

    constructor(title: string, owner: User) {
        this.title = title;
        this.owner = owner;
        this.toDos = [];
    }

    addTodo(todo: ToDo) {
        this.toDos.push(todo);
    }
    updateToDo(id: number, updatedToDo: ToDo) {
        this.toDos.map((todo) => (id === todo.id ? updatedToDo : todo));
    }
    deleteToDo(id: number) {
        this.toDos.filter(({ id: toDoId }) => id !== toDoId);
    }
    get toDoList() {
        return this.toDos;
    }
}

export class User {}
