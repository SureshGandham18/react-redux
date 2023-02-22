import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { destinationClicked } from '../redux/slice/destinationSlice';
export default function Destination() {
  const destination = useSelector(
    (state) => state.destinationStore.destinations
  );
  const dispatch = useDispatch();
  return destination.map((dest, index) => {
    return (
      <div key={index}>
        <br />
        {dest.name}
        <button onClick={() => dispatch(destinationClicked(dest))}>
          details
        </button>
      </div>
    );
  });
}
