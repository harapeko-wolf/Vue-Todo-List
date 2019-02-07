import "./styles.css";

const app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: []
  },
  methods: {
    addItem: function(e) {
      if (this.newItem == "") return;
      const todo = {
        item: this.newItem,
        isDone: false
      };
      this.todos.push(todo);
      this.newItem = "";
    },
    deleteItem: function(index) {
      // alert(index);
      this.todos.splice(index, 1);
    }
  }
});
