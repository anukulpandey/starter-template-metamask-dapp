import { useState } from 'react'
import './App.css'
import {Contract,providers} from 'ethers'
import { useEffect } from 'react';

function App() {

  //state hooks
  const [isWalletInstalled,setWalletInstalled] = useState(false);
  const [account,setAccount] = useState(null);

  //helper functions
  const connectWallet = async()=>{
    if(!window.ethereum){
      alert("Kindly install Metamask");
      return;
    }
    try{
      const allAccounts = await window.ethereum.request({
        method:"eth_requestAccounts",
      })
      setAccount(allAccounts[0]);
      if(!account)return;
      console.log("Account set to :",account)
    }catch(err){
      alert("An error encountered kindly create an account on Metamask")
      console.error(err)
    }
  }

  useEffect(() => {
    if(window.ethereum){
      setWalletInstalled(true);
    }
  }, [])
  


  return (
    <div className="App">
      {account == null?
      <button onClick={connectWallet}>
        Connect metamask 🦊
      </button>:
      <div>
        
        <input type="text" value={`👾${account}`} className="addressField" disabled/>
        <br /> <br /> 
    <button disabled>
    Connected 😼
  </button>
      </div>
    }
    </div>
  )
}

export default App
