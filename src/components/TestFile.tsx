

// import {ReactComponent as Hakeem }from '@assets/svg/Icons.svg'
import { useGetWallet } from '@hooks/revenue/useGetWallet'


const TestFile = () => {
    const {walletData} = useGetWallet()
    console.log(walletData)
  return (
    <div>
        {/* <Hakeem/> */}
    </div>
  )
}

export default TestFile