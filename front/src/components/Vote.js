import React,{useState} from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

function Vote() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    // const {checked}

    const radios = [
        { name: '멸종위기 동물 구조단체', value: '1' },
        { name: '기아 구조단체', value: '2' },
        { name: '소수민족', value: '3' },
        { name: '서기영', value: '4' },
    ];


    return (
    <>
        <br />
        <h2> 보내고 싶은 단체를 선책해 주세요</h2>
        {/* <ToggleButton
            className="mb-2"
            id="toggle-check"
            type="checkbox"       
            variant="outline-primary"
            checked={checked}
            value="1"
            onChange={(e) => setChecked(e.currentTarget.checked)}
        >
            선택
        </ToggleButton> */}

        <ButtonGroup className='button-group'>
        {radios.map((radio, idx) => (
            <ToggleButton
                className="ButtonGroup"
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
            {radio.name}
            </ToggleButton>
        ))}
        </ButtonGroup>
        </>
    );
}


export default Vote