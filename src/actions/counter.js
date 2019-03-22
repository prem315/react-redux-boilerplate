export const INC_NUMBER = 'INC_NUMBER';
export const DEC_NUMBER = 'DEC_NUMBER';

export const incNumber = (value) => {
    
    return {
        type: INC_NUMBER,
        payload: value
    }
}

export const decNumber = (value) => {
    
    return {
        type: DEC_NUMBER,
        payload: value
    }
}
