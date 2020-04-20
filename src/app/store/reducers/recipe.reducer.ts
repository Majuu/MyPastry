import {recipeActions} from '../actions/recipe.actions';

// ToDo continue injecting list
const initialState = [
    {
        title: 'Muffin',
        category: 'muffins',
        time: '00:30:00',
        isFavourite: false,
        ingredients: {
            flour: 500,
            eggs: 3,
            milk: 300
        },

    },
]

const recipeReducer = (state = initialState, action) => {
    switch (action) {
        case recipeActions.GET_ALL_RECIPES:
        case recipeActions.GET_USER_RECIPES:
        default:
            return {...state};
    }
};

export default {recipeReducer, initialState};
