import { useGetWallet } from '@hooks/revenue/useGetWallet'
import React from 'react'

function Test() {
    const {walletData} = useGetWallet()
    console.log(walletData)
  return (
    <div>test</div>
  )
}

export default Test