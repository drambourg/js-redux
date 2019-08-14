// Actions Redux
const incrementCounter = {
    type: 'INCREMENT',
};

const decrementCounter = {
    type: 'DECREMENT',
};

const incrementCounter10 = {
    type: 'INCREMENT_10',
};

const decrementCounter10 = {
    type: 'DECREMENT_10',
};

const resetCounter = {
    type: 'RESET',
};

// Reducers Redux
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENT_10':
            return state + 10;
        case 'DECREMENT_10':
            return state - 10;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

// Store Redux
const { createStore } = Redux;
const store = createStore(counterReducer);


// MAIN
const renderStore = document.getElementById('render-store');
const render = () => {
    renderStore.innerHTML = store.getState();
}

store.subscribe(render);
render();

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    store.dispatch(resetCounter)
});

const increment = document.getElementById('increment1');
increment.addEventListener('click', () => {
    store.dispatch(incrementCounter)
});

const decrement = document.getElementById('decrement1');
decrement.addEventListener('click', () => {
    store.dispatch(decrementCounter)
});

const increment10 = document.getElementById('increment10');
increment10.addEventListener('click', () => {
    store.dispatch(incrementCounter10)
});

const decrement10 = document.getElementById('decrement10');
decrement10.addEventListener('click', () => {
    store.dispatch(decrementCounter10)
});