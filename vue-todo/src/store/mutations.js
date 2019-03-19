
const addOneItem = (state, payload) => {
    const obj = { id: state.todoItems.length, completed: false, item: payload };
    localStorage.setItem(payload, JSON.stringify(obj));
    state.todoItems.push(obj);
};

const removeOneItem = (state, payload) => {
    const { todoItem, index } = payload;
    localStorage.removeItem(todoItem.item);
    state.todoItems.splice(index, 1);
};

const toggleOneItem = (state, payload) => {
    const { todoItem, index } = payload;
    state.todoItems[index].completed = !state.todoItems[index].completed;
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
 };

const clearTodo = (state) => {
    localStorage.clear();
    state.todoItems = [];
 };


export { 
  addOneItem,
  removeOneItem,
  toggleOneItem,
  clearTodo,
};