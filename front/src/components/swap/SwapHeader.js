import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const SwapHeader = ({ addBTK, Browny1, myAddress, klayBalance, btkBalance }) => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Add BTK to KAIKAS
        </Tooltip>
    );

    return (
        <>
        <div className='swap-header'>
            SWAP
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <div onClick={addBTK} className='token-add-kaikas'>
                    <FontAwesomeIcon
                        icon={faCirclePlus}
                        className='add-BTK-icon'

                    />
                    <img
                        className='browny-icon'
                        src={Browny1}
                        alt="이미지를 찾을 수 없습니다"
                    />
                </div>
            </OverlayTrigger>
        </div>

        {myAddress &&
            <div className='mywal-info-outer'>
                <div className='mywal-info'>
                    <div className='mywal-header'>보유량</div>
                    <div className='mywal-bal'><b><i>{klayBalance} KLAY</i></b></div>
                    <div className='mywal-bal'><b><i>{btkBalance.slice(0, btkBalance.indexOf('.')+3)} BTK</i></b></div>
                </div>
            </div>
        }
        </>
    )
}

export default SwapHeader