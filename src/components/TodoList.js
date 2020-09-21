import React, {useCallback} from 'react';
import { List } from 'react-virtualized'
import TodoListItem from "./TodoListItem";
import './TodoList.scss'

const TodoList = ({ todos, onRemove, onToggle }) => {
    const rowRendere = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style}/>
            )
        }
    )
    return (
        <List className="TodoList" width={512} height={513} rowCount={todos.length} rowHeight={57} rowRenderer={rowRendere} list={todos} style={{ outline:'none' }} />
    );
};

export default React.memo(TodoList);