import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className='container bg-sky-200 mx-auto border border-sky-200 shadow-2xl rounded-3xl my-5 p-10'>
      {children}
    </div>
  )
}

export default Container