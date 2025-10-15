const DUMMY_TRANSACTION_DETAIL = [
  {
    title: "Transaction Time",
    content: "25/09/2025 20:22:12",
  },
  {
    title: "Transaction No",
    content: "123456678",
  },
  {
    title: "Transaction Type",
    content: "Transfer",
  },
  {
    title: "Transfer To",
    content: "Aung Phyoe",
  },
  {
    title: "Amount",
    content: "-50000 MMK",
  },
  {
    title: "Notes",
    content: "cash",
  },
]

const TransactionDetail = () => {
  return (
    <div className="flex flex-col items-center bg-white h-full py-[34px]">
      <figure className="w-[50px] h-auto aspect-square mb-[5px]">
        <img 
          width={50} 
          height={50} 
          alt="Coin icon with dollar sign" 
          className="w-full h-full object-contain" 
          src="/img/features/transaction/icon_dollar.svg"
        />
      </figure>
      <h1 className="text-lg font-semibold leading-7 tracking-normal text-center text-title mb-[44px]">Transaction Successful</h1>
      <ul className="w-full px-[32px]">
        {DUMMY_TRANSACTION_DETAIL.map(t=><li key={t.title} className="flex justify-between mb-[8px]">
          <span className="text-sm font-light leading-5 tracking-normal text-body">{t.title}</span>
          <span className="text-sm font-light leading-5 tracking-normal text-body">{t.content}</span>
        </li>)}
      </ul>
    </div>
  )
}

export default TransactionDetail