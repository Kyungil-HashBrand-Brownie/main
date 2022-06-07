import React from 'react'

const MintCard = () => {
  const onClick = async () => {
    const accounts = await window.klaytn.enable()
    console.log(accounts)
  }
  const onClick2 = async () => {
    // await window.caver.klay.sendTransaction({
    //   type: 'VALUE_TRANSFER',
    //   from: window.klaytn.selectedAddress,
    //   to: '0x0000000000000000000000000000000000000000',
    //   value: window.caver.utils.toPeb('1', 'KLAY'),
    //   gas: 8000000
    // })

    const myContract = new window.caver.contract([{"inputs":[],"name":"getNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"0x85C6289b67E5E242fDB4546569C6FADc2b7F6222")
    console.log(await myContract.methods.getNum().call())

    // alert("송금 성공")
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