import React, { useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // icon

interface Account {
  id: string;
  name: string;
}

const accounts: Account[] = [
  { id: 'acc1', name: 'Savings Account' },
  { id: 'acc2', name: 'Checking Account' },
  { id: 'acc3', name: 'Business Account' },
];

const TransferPage =() => {
  const [fromAccount, setFromAccount] = useState('');
  const [otherAccount, setOtherAccount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fromAccount || !otherAccount) {
      alert('Please select both accounts.');
      return;
    }

    if (fromAccount === otherAccount) {
      alert('Cannot transfer between the same account.');
      return;
    }

    console.log('Transfer from', fromAccount, 'to', otherAccount);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-md shadow-md w-full max-w-lg"
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

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">From Account</label>
          <Select value={fromAccount} onValueChange={setFromAccount}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select From Account" />
            </SelectTrigger>
            <SelectContent>
              {accounts.map((account) => (
                <SelectItem key={account.id} value={account.id}>
                  {account.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Other Account</label>
          <Select value={otherAccount} onValueChange={setOtherAccount}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Other Account" />
            </SelectTrigger>
            <SelectContent>
              {accounts
                .filter((acc) => acc.id !== fromAccount)
                .map((account) => (
                  <SelectItem key={account.id} value={account.id}>
                    {account.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <Link to="/transfer/recipient">
        <Button type="submit" className="w-full text-white py-2">
          Continue
        </Button>
        </Link>
      </form>
    </div>
  );
}

export default TransferPage;
