const readline = require("node:readline");

// Todoリストの配列（アプリの状態）
const todoList = [];

// readline は1回だけ作る
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function showMenu() {
    console.log("== Todo List Menu ==");
    console.log("1. Add Todo");
    console.log("2. List Todo");
    console.log("3. Remove Todo");
    console.log("4. Exit");
}

function listTodo() {
    console.log("== Todo List ==");
    if (todoList.length === 0) {
        console.log("No todos yet!");
        return;
    }
    for (let i = 0; i < todoList.length; i++) {
        console.log(`${i + 1}. ${todoList[i]}`);
    }
}

// done(): 次の command> を出すためのコールバック
function addTodo(done) {
    rl.question("Enter todo title: ", (title) => {
        const trimmed = title.trim();
        if (trimmed.length === 0) {
            console.log("Title is empty. Canceled.");
            done();
            return;
        }

        todoList.push(trimmed);
        console.log(`Added: ${trimmed}`);
        done();
    });
}

function removeTodo(done) {
    if (todoList.length === 0) {
        console.log("No todos to remove.");
        done();
        return;
    }

    listTodo();
    rl.question("Enter todo number to remove: ", (input) => {
        const index = Number(input) - 1; // 表示は1始まり、配列は0始まり
        if (!Number.isInteger(index) || index < 0 || index >= todoList.length) {
            console.log("Invalid number!");
            done();
            return;
        }

        const removed = todoList.splice(index, 1)[0];
        console.log(`Removed: ${removed}`);
        done();
    });
}

function promptCommand() {
    showMenu();
    rl.question("command> ", (cmd) => {
        switch (cmd.trim()) {
            case "1":
                addTodo(promptCommand);
                break;
            case "2":
                listTodo();
                promptCommand();
                break;
            case "3":
                removeTodo(promptCommand);
                break;
            case "4":
                rl.close();
                break;
            default:
                console.log("Invalid command!");
                promptCommand();
        }
    });
}

rl.on("close", () => {
    console.log("Bye!");
});

promptCommand();
