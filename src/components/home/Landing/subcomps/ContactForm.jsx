import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzbnbowb");
  



  return (
      <form onSubmit={handleSubmit} className='w-full flex flex-col h-full lg:pr-8 xl:pr-8'>
        <label htmlFor='nombre' className='w-full mt-6 mb-1 font-bold text-lg'>
            Nombre
        </label>
        <input
        id='nombre'
        type='text'
        name='nombre'
        className='w-full h-[3em] p-2 text-black'
        placeholder='Su nombre.'
        />
      <label htmlFor="email" className='w-full mt-6 mb-1 font-bold text-lg'>
        Email / Correo
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className='w-full h-[3em] p-2 text-black'
        placeholder='Su correo electronico.'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor='message' className='w-full mt-6 mb-1 font-bold text-lg'>
        Mensaje
      </label>
      <textarea
        id="message"
        name="message"
        className='w-full h-[10em] text-black p-2'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='w-full font-bold text-lg border-2 shadow-md mt-4 rounded-sm hover:bg-slate-100 hover:text-black duration-150 transition items-center content-center'>
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;