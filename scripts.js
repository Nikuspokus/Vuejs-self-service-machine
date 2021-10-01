var todos = []

const todosApp = {

    data() {
        return {
            todos: window.todos,
            newTodo : ""
        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodo) {
                this.todos.push(this.newTodo);
                this.newTodo = "";
            } else {
                alert("tous les champs doivent être remplis")
            }
        },
        clearTodoList: function() {
            this.todos = []
        }
    }

};

Vue.createApp(todosApp).mount('#app');
