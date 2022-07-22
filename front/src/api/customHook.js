import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAlert = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [content, setContent] = useState("")
    console.log(window.location.pathname)
    const onHide = (content) =>{
      setShow(false)
      if (content.includes('성공') && 
        (window.location.pathname === '/write'
          || window.location.pathname === '/community/read/vote')) navigate('/community')
      else if (content === '안건이 승인되었습니다!'|| content === '투표가 종료되었습니다!' ) {
        navigate('/community')
      }
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