import {INC_NUMBER, DEC_NUMBER} from '../actions/counter';

const initialState = {
    counterData: 0
};

export default function(state= initialState, action) {
    switch (action.type) {
        case INC_NUMBER:
        return {
          ...state,
          counterData: action.payload + 1
        }

        case DEC_NUMBER:
        return {
          ...state,
          counterData: action.payload - 1
        }
  
      default:
        return state;
    }
  }
  
