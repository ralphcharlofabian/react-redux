//reducer
export function ActiveUserReducer(state = null, action) {
    switch (action.type) {
        case 'userSelected':
            {
                return action.payload;
                break;
            }
        case 'addTask':
            {
                console.log(state);
                return state = {

                    ...state,
                    taskToDo: [...state.taskToDo, {
                        taskId: state.taskToDo.length + 1,
                        isCompleted: false,
                        task: action.payload
                    }],
                };
                break;
            }
        case 'toggleIsCompleted':
            {
                return state = {
                    ...state,
                    taskToDo: state.taskToDo.map((x) => {
                        return x.taskId === action.payload ?
                            Object.assign({}, x, { isCompleted: !x.isCompleted }) : x})
                }
                break;
            }
        case 'deleteTask':
            {
                return state={
                    ...state,
                    taskToDo: state.taskToDo.filter((x) => {
                          return x.taskId !== action.payload})
                }
                break;
            }
            case 'editTask':
            {
                 return state = { 
                     ...state,
                    taskToDo: state.taskToDo.map((x) => {              
                        return x.taskId === action.taskId ?
                            Object.assign({}, x, { task: action.payload }) : x})
                }
            }
        default:
            return state
    }
    return state;
}

//action
export function addTask(task) {
    console.log(task, 'action');
    return {
        type: 'addTask',
        payload: task
    }
};
export function editTask(task,taskId) {
    console.log(task, 'action',taskId,'id');
    return {
        type: 'editTask',
        payload: task,
        taskId: taskId
        
    }
};
export function toggleIsCompleted(taskId) {
    console.log(taskId, 'action');
    return {
        type: 'toggleIsCompleted',
        payload: taskId
    }
};

export function deleteTask(taskId) {
    return {
        type: 'deleteTask',
        payload: taskId
    }
};