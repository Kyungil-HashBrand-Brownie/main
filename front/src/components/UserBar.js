import React from 'react'
import { PFPContainer, StyledInfo } from './module'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const UserBar = ({ showInfo, myAddress, modalState, isWhite,
    nickname, changeNickname, klayBalance, btkBalance }) => {
        
    return (
        <div className="info-box">
            <PFPContainer
                onClick={showInfo}
            >
                {myAddress.slice(0, 7) + '...' + myAddress.slice(-7)}
            </PFPContainer>
            {modalState &&
                <StyledInfo>
                    <div className='header-white'>
                        {isWhite ? 'WHITE' : 'NORMAL'}
                    </div>
                    <div className='header-line'>
                        {nickname}
                        <FontAwesomeIcon
                            shake
                            icon={faPenToSquare}
                            className='change-nickname-icon'
                            onClick={() => changeNickname.open()}
                        />
                    </div>
                    <div className='header-line'>{klayBalance + " KLAY"}</div>
                    <div className='header-line'>{btkBalance + " BTK"}</div>
                </StyledInfo>
            }
        </div>
    )
}

export default UserBar