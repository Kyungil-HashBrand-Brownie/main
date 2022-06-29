import { Form } from 'react-bootstrap';

const Proposal = ({label, index, changeSelected}) => {
    return(
        <Form.Check
            inline
            label={label}
            value={index}
            name="group"
            type="radio"
            // id={`inline-radio-${index}`}
            onChange={changeSelected}
          />
    )
}

export default Proposal;