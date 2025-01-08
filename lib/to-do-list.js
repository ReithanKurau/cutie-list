import { createApp } from "vue";

createApp({
  data() {
    return {
      todos: [
        { title: "Code a to-do list", done: false },
        { title: "Eat breakfast", done: false },
        { title: "Do some exercise", done: false },
        { title: "Water the plants", done: false }
      ],
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push({ title: this.newTodo, done: false });
        this.newTodo = "";
      }
    },
    deleteTodo(index){
      this.todos.splice(index, 1);
    }
  }
}).mount('#todosContainer');
