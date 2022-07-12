import { tokenAddr } from "configs"

const addBTK = ()=> {
    if(window.klaytn){
      window.klaytn.sendAsync(
        {
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddr, // The address that the token is at.
              symbol: "BTK", // A ticker symbol or shorthand, up to 5 chars.
              decimals: 18, // The number of decimals in the token
              image: "http://34.64.165.60/static/media/browny1.0ee2fcfb4be163dac170.png" // A string url of the token logo
            }
          },
          id: Math.round(Math.random() * 100000)
        },
        (err, result) => console.log(err, result)
      )
    }
}

const enableKaikas = (customAlert) => {
    if(window.klaytn){
        window.klaytn.enable()
    }
    else {
        customAlert.open(<a href="https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi?hl=ko" target="blank">카이카스 설치 필요</ a>)
    }
}

export {
  addBTK,
  enableKaikas,
}