import React from 'react'
import { PFPContainer, StyledInfo } from './module'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Klaytn from '../img/swap/klaytn.png';
import Browny1 from '../img/swap/browny1.png';

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
                    <div className='header-line thick'><i><img className='header-klay' style={{width: '25px'}} src={Klaytn} alt='klaytn'/>&nbsp;{klayBalance}</i></div>
                    <div className='header-line thick'><i><img style={{width: '30px'}} src={Browny1} alt='btk'/>&nbsp;{btkBalance.split('.')[0]+'.'+btkBalance.split('.')[1].slice(0,2)}</i></div>
                </StyledInfo>
            }
        </div>
    )
}

export default UserBar