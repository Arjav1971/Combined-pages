import React from 'react'
import Step from '../components/steps'

const Stepper = (props) => {
  return (
    <div className='flex flex-col'>
        <p className='text-lg font-semibold m-[1rem] mt-[2rem]'>You are here</p>
        <Step stepflag = {props.flags} />      
    </div>
  )
}

export default Stepper
