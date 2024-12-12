import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <>
        <footer className='w-full bg-light text-center footer'>
            <p>© {year} | Tushar Sarode | Portfolio </p>
        </footer> 
    </>
  )

}
export default Footer
