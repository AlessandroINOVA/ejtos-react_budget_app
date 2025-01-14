import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const { dispatch, currency } = useContext(AppContext);

  const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
  }

  return (
        <div className='alert alert-secondary'> Currency: <br></br>{
      <select defaultValue={currency} style={{ backgroundColor: 'rgba(232,234,246,1.0)', height: '40px' }} name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option value="£">£ Pound</option>
        <option value="₹">₹ Ruppee</option>
        <option value="€">€ Euro</option>
        <option value="$">$ Dollar</option>
      </select>	
      }	
    </div>
    );
};

export default Location;