import { useState } from "react";

const useAlert = () => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState("")

    const onHide = () => setShow(false)

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

export { useAlert }