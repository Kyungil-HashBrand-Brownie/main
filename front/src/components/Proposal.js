import { Form } from 'react-bootstrap';

const Proposal = ({label, index, onChange}) => {
    return(
        <Form.Check
            inline
            label={label}
            value={index}
            name="group"
            type="radio"
            // id={`inline-radio-${index}`}
            onChange={onChange}
            style={{marginLeft: '20px'}}
          />
    )
}

export default Proposal;