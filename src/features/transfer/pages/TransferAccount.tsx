import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"


const recentTransfers = [
  { id: '1', to: 'Alice', amount: '$200' },
  { id: '2', to: 'Bob', amount: '$500' },
  { id: '3', to: 'Charlie', amount: '$300' }
]

const TransferAccount = () => {
  const [search, setSearch] = useState('')
    const navigate = useNavigate();

  const filteredTransfers = recentTransfers.filter((transfer) =>
    transfer.to.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <div className="mb-4">
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <ArrowLeft size={18} />
            Back
          </Button>
        </div>
      <h1 className="text-2xl font-bold">Transfer Money</h1>

      <div>
        <label className="block text-sm font-medium">From Account</label>
        <Input value="2323121414" disabled />
      </div>

      <div>
        <label className="block text-sm font-medium">To Account</label>
        <Input
          placeholder="Enter recipient account"
          // onChange={(e : E) => setToAccount(e.target.value)}
        />
      </div>

      <div>
  <label className="block text-sm font-medium mb-1">Recent Transfers</label>

  <div className="relative mb-4">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
      </svg>
    </span>
    <Input
      placeholder="Search recent transfers..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="pl-10" 
    />
  </div>

  <ul className="space-y-2">
    {filteredTransfers.map((transfer) => (
      <li  className="flex items-center space-x-3 p-2 rounded-md border">
        <img
          alt={transfer.to}
          className="w-6 h-6 rounded-full bg-black object-cover"
        />
        <div className="font-semibold">{transfer.to}</div>
      </li>
    ))}

    {filteredTransfers.length === 0 && (
      <li className="text-sm text-gray-400">No transfers found.</li>
    )}
  </ul>
</div>
<Link to="/transfer/confirmation">
        <Button type="submit" className="w-full text-white py-2">
          Continue
        </Button>
        </Link>
    </div>
  )
}

export default TransferAccount
