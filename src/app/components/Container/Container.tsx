import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className='container mx-auto p-10 border'>
      {children}
    </div>
  )
}

export default Container