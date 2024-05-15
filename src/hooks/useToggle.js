import { useState } from 'react';

const useToggle = () => {
  const [show, setShow] = useState(true)
  const handleToggle = () => {
    setShow(!show)
  }


  return {
    show,
    handleToggle
  }
}

export default useToggle
