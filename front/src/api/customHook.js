import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAlert = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [content, setContent] = useState("")

    const onHide = (content) =>{
      setShow(false)
      let location = 'http://localhost:3000/write'
      if (content.includes('성공') && window.location.href === location) navigate('/community')
    }

    const open = (alertContent) => {
        setContent(alertContent)
        setShow(true)
    }

    return {
        show,
        content,
        open,
        onHide
    }
}

const useInput = (defaultValue) => {
    const [value , setValue] = useState(defaultValue)
  
    const onChange = (e) => {
      setValue(e.target.value)
    }
  
    return {
      value,
      onChange
    }
  }

export { 
  useAlert,
  useInput,
}