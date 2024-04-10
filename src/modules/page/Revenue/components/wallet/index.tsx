import { useGetWallet } from "@hooks/revenue/useGetWallet"
import ReuseableWalletCard from "shared/ReusableWalletCard"



const Wallet = () => {
    const{walletData} = useGetWallet()
    
  return (
    <div className="grid gap-y-4">
      <ReuseableWalletCard
        title="Ledger Balance"
        amount={walletData?.ledger_balance}
      />
      <ReuseableWalletCard
        title="Total Payout"
        amount={walletData?.total_payout}
      />
      <ReuseableWalletCard
        title="Total Revenue"
        amount={walletData?.total_revenue}
      />
      <ReuseableWalletCard
        title="Pending Payout"
        amount={walletData?.pending_payout}
      />
    </div>
  );
}

export default Wallet