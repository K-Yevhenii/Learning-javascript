interface IToDoList {
    title: string;
    owner: User;
    addToDo: (todo: ToDoUpdateOrCreate) => void;
    updateToDo: (id: number, updatedToDo: ToDoUpdateOrCreate) => void;
    deleteToDo: (id: number) => void;
    toDoList: ToDo[];
}

interface ToDo {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
}

type ToDoUpdateOrCreate = Pick<ToDo, 'title' | 'description'>;

export class ToDoList implements IToDoList {
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

export class User {
    private toDoLists: ToDoList[];
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value: string) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get uncompletedToDos(): ToDo[] {
        return this.toDoLists.reduce<ToDo[]>((acc, toDoList) => {
            const { toDoList: todos } = toDoList;
            const result = todos.filter(({ isDone }) => !isDone);
            return [...acc, ...result];
        }, []);
    }
}
