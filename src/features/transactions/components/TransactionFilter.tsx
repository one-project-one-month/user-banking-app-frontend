import { FilterIcon } from "lucide-react";
import DatePicker from "./DatePicker";
import Tab from "./Tab";

interface TransactionFilterProps {
  onChange: (value: string) => void;
  currentFilter: string;
}

const FilterValues = {
  time: [
    {
      title: "Yesterday",
      id: "yesterday"
    },
    {
      title: "Last Week",
      id: "last-week"
    },
    {
      title: "Last Month",
      id: "last-month"
    }
  ],
  flow: [
    {
      title: "All",
      id: "all"
    },
    {
      title: "In Flow",
      id: "in-flow"
    },
    {
      title: "Outflow",
      id: "out-flow"
    }
  ]
}

const TransactionFilter = ({onChange, currentFilter}: TransactionFilterProps) => {
  const handleClick = ()=>{}
  return (
    <>
      <div className="py-[20px] px-[32px]">
        <div className="flex justify-between mb-[15px]">
          <h1 className="text-black-pearl-700 font-semibold text-lg leading-7 tracking-normal font-sans">All Transactions</h1>
          <div className="flex items-center gap-[12px]">
            <FilterIcon size={20}/>
            <DatePicker/>
          </div>
        </div>
        <ul className="flex gap-2">
          {
            FilterValues.time.map(t=><Tab key={t.id} title={t.title} handleClick={handleClick} />)
          }
        </ul>
      </div>
      <div className="pt-[11px] pb-[9px] bg-surface-default px-[32px]">
        <ul className="flex gap-2 ml-auto w-fit">
          {
            FilterValues.flow.map(t=><Tab key={t.id} title={t.title} handleClick={handleClick} className="bg-black-pearl-500 text-caption border-0" />)
          }
        </ul>
      </div>
    </>
  )
}

export default TransactionFilter