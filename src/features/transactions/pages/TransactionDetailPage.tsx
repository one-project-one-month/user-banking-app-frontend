import MobileHeader from '@/components/core/MobileHeader'
import TransactionDetail from '../components/TransactionDetail'

const TransactionDetailPage = () => {
  return (
    <>
      <MobileHeader backTo="/" title="Transaction Detail" />
      <TransactionDetail/>
    </>
  )
}

export default TransactionDetailPage