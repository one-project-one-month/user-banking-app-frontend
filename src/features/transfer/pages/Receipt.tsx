import type { RootState } from '@/app/store/store'
import { Button } from '@/components/ui/button'
import useGetUserData from '@/hooks/useGetUserData'
import useNickNameData from '@/hooks/useNicknameData'
import { ArrowLeft, MoveDown, Plus } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Receipt = () => {
  const navigate = useNavigate();
  
    const { info, accountDetail } = useGetUserData();
      const { nicknameList } = useNickNameData();
    const fullname = useSelector((state: RootState) => state.transfer.fullname);
    const toAccount = useSelector((state: RootState) => state.transfer.toAccount);
     const selectedNickname = useSelector((state: RootState) => state.transfer.selectedNickname)
  
    const amount = useSelector((state: RootState) => state.transfer.amount);
    const note = useSelector((state: RootState) => state.transfer.note);
    const selectedNicknameValue = nicknameList?.find(
  (n) => n.id === selectedNickname
)?.nickname;
  
  return (
     <div className=" mx-8 mt-10 space-y-6">
      <div className="mb-4">
        <Button
          type="button"
          variant="ghost"
          onClick={() => navigate("/transfer")}
          className="flex items-center gap-2 text-gray-700 hover:text-black"
        >
          <ArrowLeft size={18} />
          Back
        </Button>
      </div>
      <h1 className="text-2xl font-bold">Confirmation</h1>

      <div className="flex items-center justify-between rounded-md   mb-5  transition-colors">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-md  font-medium">From : </span>
          <img
            src="/public/360_F_1535955058_LwMFa9B6kPoHXCmCQpB1CwPuUi57TEBJ.webp"
            alt="Sender"
            className="w-12 h-12 rounded-full object-cover border"
          />
        </div>
        <div className="text-right space-y-1">
          <p className="text-lg font-semibold leading-none">{info?.fullname}</p>
          <p className="text-sm text-muted-foreground">
            Account No : {accountDetail?.accountNumber}
          </p>
          <p className="text-md font-medium text-yellow-500">
            {info?.currentBalance} mmk
          </p>
        </div>
      </div>
      <MoveDown size={24} className="ml-2 text-yellow-500" />
      <div className="flex items-center justify-between  pb-7  border-b-3 border-yellow-300 transition-colors">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-md  font-medium">To : </span>
          <img
            src="/public/360_F_1535955058_LwMFa9B6kPoHXCmCQpB1CwPuUi57TEBJ.webp"
            alt="Sender"
            className="w-12 h-12 rounded-full object-cover border"
          />
        </div>
        <div className="text-right space-y-1">
          <p className="text-lg font-semibold leading-none">{selectedNicknameValue ? selectedNicknameValue : fullname}</p>
          <p className="text-sm text-muted-foreground">
            Account No: {toAccount}
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <p className='text-lg text-gray-600'>Amount (Ks) :</p>
          <p className='text-xl text-gray-700'>{amount}102340 <span className='text-base text-gray-500'>Ks</span></p>
        </div>
        <div className="flex items-center justify-between">
          <p className='text-lg text-gray-500'>Note :</p>
          <p className='text-lg text-gray-700'>Testing {note} </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 mb-30">
        <div className=""><Plus size={60} className='border-2 border-gray-300 text-yellow-600 rounded-full p-3'/></div>
        <p>Set Up Nickname</p>
      </div>
      <Link to="/">
          <Button type="button"  className="w-full text-white py-2">
            Save Receipt
          </Button>
        </Link>
    </div>
  )
}

export default Receipt