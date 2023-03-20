import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input
        type='number'
        onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        id='budget'
        step="10"
        defaultValue={budget}
        style={{ marginLeft: '2rem' , size: 10}}
            onChange={(event) => {
                if(event.target.value > 20000) {
                    alert("Budget can not exceed 20000");
                    event.target.value = 20000;
                }
                dispatch({type: 'SET_BUDGET', payload: event.target.value});
            }
        }>
        </input></span>
        </div>
        
    );
};
export default Budget;
