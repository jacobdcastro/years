import React from 'react';

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
      <label className='text-white mb-3 text-2xl'>
        How old are you? (sorry for asking)
      </label>
      <input
        type='text'
        className='bg-transparent text-white text-3xl p-3 border border-white rounded-md w-16 text-center'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
