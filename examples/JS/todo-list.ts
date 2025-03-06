interface ToDo {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
}

type ToDoUpdateOrCreate = Pick<ToDo, 'title' | 'description'>;

export class ToDoList {
    private toDos: ToDo[];
    title: string;
    owner: User;

    constructor(title: string, owner: User) {
        this.title = title;
        this.owner = owner;
        this.toDos = [];
    }

    addToDo(todo: ToDoUpdateOrCreate) {
        this.toDos.push({ id: Math.random(), isDone: false, ...todo });
    }

    updateToDo(id: number, updatedToDo: ToDoUpdateOrCreate) {
        this.toDos.map((toDo) => (id === toDo.id ? { id, ...updatedToDo } : toDo));
    }

    deleteToDo(id: number) {
        this.toDos.filter(({ id: toDoId }) => id !== toDoId);
    }

    get toDoList() {
        return this.toDos;
    }
}

export class User {}
