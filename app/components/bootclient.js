'use client'
import React from 'react'

const BootClient = () => {
  
  React.useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])
  
  return null
}

export default BootClient