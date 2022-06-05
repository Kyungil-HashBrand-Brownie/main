import React from 'react'

const MintCard = () => {
  const onClick = async () => {
    const accounts = await window.klaytn.enable()
    console.log(accounts)
  }
  const onClick2 = async () => {
    await window.caver.klay.sendTransaction({
      type: 'VALUE_TRANSFER',
      from: window.klaytn.selectedAddress,
      to: '0x0000000000000000000000000000000000000000',
      value: window.caver.utils.toPeb('1', 'KLAY'),
      gas: 8000000
    })

    alert("송금 성공")

    // console.log( window.caver.klay.sendTransaction)
  }
  window.klaytn.on('accountsChanged', function(accounts) {
    // Your code
    console.log(accounts)
  })
  return (        
    <div>
      MintCard
      <button onClick={onClick}>버튼</button>
      <button onClick={onClick2}>버튼2</button>
      </div>
  )
}

export default MintCard