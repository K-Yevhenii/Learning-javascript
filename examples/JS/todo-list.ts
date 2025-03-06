interface ToDo {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
}

type ToDoUpdateOrCreate = Omit<ToDo, 'id'>;


export class TodoList {
    private toDos: ToDo[];
    title: string;
    owner: User;

    constructor(title: string, owner: User) {
        this.title = title;
        this.owner = owner;
        this.toDos = [];
    }

    addTodo(todo: ToDoUpdateOrCreate) {
        this.toDos.push({ id: Math.random(), ...todo });
    }

    updateToDo(id: number, updatedToDo: ToDoUpdateOrCreate) {
        this.toDos.map((todo) => (id === todo.id ? { id, ...updatedToDo } : todo));
    }

    deleteToDo(id: number) {
        this.toDos.filter(({ id: toDoId }) => id !== toDoId);
    }

    get toDoList() {
        return this.toDos;
    }
}

export class User {}
