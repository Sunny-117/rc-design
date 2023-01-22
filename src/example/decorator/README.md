# 数据操作

1. todoData []
2. 方法 -> 操作数据
   增加数据 -> addTodo(todo) { id, content, completed }
   删除数据 -> removeTodo(id) -> todoData -> {id}
   改变状态 -> changeCompleted(id) -> todoData -> {id} -> completed

# DOM 操作

1. 方法 -> 操作 DOM
   增加项 -> todo 模板 -> todo -> todoItem -> oTodoList
   删除项 -> id -> todoItems {id} -> item -> remove
   改变状态 -> id -> todoItems {id} -> item -> content -> 中横线

# 设计方式

DOM 操作 -> 数据操作 -> app.ts -> 执行数据操作方法 -> 实现功能
@装饰器 -> DOM 操作 -> app.ts -> 执行 DOM 操作方法 -> 实现功能
