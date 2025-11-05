import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input"
import { ArrowLeft, Check } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransferLists, loadDummyTransfers } from '../../auth/redux/transferListSlice';
// import { fetchTransferLists } from '../../auth/redux/transfer/
import type { AppDispatch } from '@/app/store/store';

const TransferPage =() => {
  const [fromAccount, setFromAccount] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()
  const transferLists =  useSelector(getTransferLists)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleSelect = (nicknameId :string)=>{
    
  }
  useEffect(()=>{
    dispatch(loadDummyTransfers())
  },[dispatch])
  console.log(transferLists);

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white p-8"
      >
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

        <h2 className="text-2xl font-semibold mb-6 text-center">Transfer</h2>

          <div className="flex items-center justify-between rounded-md border p-4 mb-5 transition-colors">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-base  font-medium">From : </span>
              <img
                src="/public/360_F_1535955058_LwMFa9B6kPoHXCmCQpB1CwPuUi57TEBJ.webp"
                alt="Sender"
                className="w-12 h-12 rounded-full object-cover border"
              />
            </div>
            <div className="text-right space-y-1">
              <p className="text-lg font-semibold leading-none">John Doe</p>
              <p className="text-sm text-muted-foreground">Account No: 1234567890</p>
              <p className="text-md font-medium text-yellow-500">12,500.00 Ks</p>
            </div>
          </div>

        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-2">Favorite Nickname Lists 
            <span className='text-sm text-gray-600 pl-2'>(Optional)</span>
          </label>
          <Select value={fromAccount} onValueChange={setFromAccount}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select From Account" />
            </SelectTrigger>
            <SelectContent>
              {transferLists.map((transfer) => (
                <SelectItem key={transfer.user.id} value={transfer.user.name}>
                  {transfer.user.name}
                </SelectItem>
              ))}
            </SelectContent> 
          </Select>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
              <label className="block text-base font-medium text-gray-700 mb-1">To : </label>
          <Button  className='bg-gray-300 text-black hover:text-white'><Check size={20}/></Button>
          </div>
          <Input type="text" placeholder='Account number'/>
        </div>
        <div className="mb-6">
          <label className="block text-base font-medium text-gray-700 mb-2">Full Name : </label>
          <Input type="text" placeholder='Account number'/>
        </div>
        <div className="mb-6">
          <label className="block text-md font-bold text-gray-700 mb-2">Recent Transfer Lists </label>
          {
            transferLists.map((transfer)=>(
              <h1 className='text-black hover:bg-blue-900 hover:text-white rounded-xs my-2 pl-3'>{transfer.user.name}</h1>
            ))
          }
        </div>
        <Link to="/transfer/confirmation">
        <Button type="submit" className="w-full text-white py-2">
          Continue
        </Button>
        </Link>
      </form>
    </div>
  );
}

export default TransferPage;
