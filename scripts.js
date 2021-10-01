var todos = []

const todosApp = {

    data() {
        return {
            todos: window.todos,
            newTodo : {
                done: false
            }
        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodo.text) {
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
                localStorage.setItem("todos", JSON.stringify(this.todos))
            } else {
                alert("tous les champs doivent être remplis")
            }
        },
        clearTodoList: function() {
            this.todos = []
        },
    },
    created() {
        this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos
    },
    //Permet de mettre à jour la donnée dans le local storage
    updated() {
        localStorage.setItem("todos", JSON.stringify(this.todos))
    }
};

Vue.createApp(todosApp).mount('#app');