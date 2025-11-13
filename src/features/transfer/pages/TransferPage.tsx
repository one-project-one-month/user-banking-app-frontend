import  { useEffect} from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Check} from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDummyTransfers } from '../../auth/redux/transferListSlice';
import type { AppDispatch, RootState } from '@/app/store/store';
import useGetUserData from '@/hooks/useGetUserData';
import useNickNameData from '@/hooks/useNicknameData';
import { setFullname, setSelectedNickname, setToAccount, setToAccountId } from '@/features/transfer/redux/accountTransferSlice';
import { useAccountTransferQuery, useNicknameTransferQuery, useTransferValidateMutation } from '@/queries/transfer.query';
import { errorToast } from '@/lib/helper/customToasts';


const TransferPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { info, accountDetail } = useGetUserData();
  const { nicknameList } = useNickNameData();
  // const transferLists = useSelector(getTransferLists);

  const fullname = useSelector((state: RootState) => state.transfer.fullname);
  const toAccount = useSelector((state: RootState) => state.transfer.toAccount)
  const selectedNickname = useSelector((state: RootState) => state.transfer.selectedNickname)
  const toAccountId = useSelector((state: RootState) => state.transfer.toAccountId)
 
  const { data: nicknameData, isFetching: isFetchingNickname } =
    useNicknameTransferQuery(selectedNickname || undefined);
  const { data: accountData, isFetching: isFetchingAccount ,refetch : refetchAccount  } =
    useAccountTransferQuery(toAccount);



  useEffect(() => {
    if (nicknameData?.data) {
      const acc = nicknameData.data.toAccountDetails.accountNumber;
      const name = nicknameData.data.userDetails.fullname;
      const id = nicknameData.data.toAccountDetails.id;
      dispatch(setToAccount(acc));
      dispatch(setFullname(name));
      dispatch(setToAccountId(id));

    }
  }, [nicknameData,dispatch]);

  useEffect(() => {
    if (accountData?.data) {
      const name = accountData.data.userDetails.fullname;
      const id = accountData.data.toAccountDetails.id;
      dispatch(setToAccountId(id));
      dispatch(setFullname(name));
    }
  }, [accountData,dispatch]);

  useEffect(() => {
    dispatch(loadDummyTransfers());
  }, [dispatch]);

  const handleSelect = (value: string) => {
  const selected = nicknameList?.find((n) => n.nickname === value);
  if (selected) dispatch(setSelectedNickname(selected.id));
};
   const isLoadingAccountInfo = isFetchingNickname || isFetchingAccount;
   const isValidate = !fullname ||  !fullname && !selectedNickname 

   const mutation = useTransferValidateMutation();

   const handleSubmit = ()=>{
    if(toAccountId){
      mutation.mutate(toAccountId) // only call api if clicked
    }
     navigate("/transfer/confirmation");
   }

   const selectedNicknameValue = nicknameList?.find(
  (n) => n.id === selectedNickname
)?.nickname;

  const handleCheck = async () => {
  if (!toAccount) {
    return errorToast("Missing account", "Please enter an account number first");
  }

  try {
    const { data } = await refetchAccount(); 

    if (data?.data) {
      const name = data.data.userDetails.fullname;
      const id = data.data.toAccountDetails.id;
      dispatch(setFullname(name));
      dispatch(setToAccountId(id));
    } else {
      errorToast("Account not found", "Please check the account number again");
      dispatch(setFullname(""));
      dispatch(setToAccountId(null));
    }
  } catch (error ) {
    errorToast("Error", error.message);
  }
};



  return (
 
    <div className="w-full ">
      <form className="w-full bg-white p-8">
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

        {/* From Account Info */}
        <div className="flex items-center justify-between rounded-md border p-4 mb-5">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-base font-medium">From :</span>
            <img
              src="/public/360_F_1535955058_LwMFa9B6kPoHXCmCQpB1CwPuUi57TEBJ.webp"
              alt="Sender"
              className="w-12 h-12 rounded-full object-cover border"
            />
          </div>
          <div className="text-right space-y-1">
            <p className="text-lg font-semibold">{info?.fullname}</p>
            <p className="text-sm text-muted-foreground">
              Account No: {accountDetail?.accountNumber}
            </p>
            <p className="text-md font-medium text-yellow-500">
              {info?.currentBalance} mmk
            </p>
          </div>
        </div>

        {/* Nickname List */}
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-2">
            Favorite Nickname Lists
            <span className="text-sm text-gray-600 pl-2">(Optional)</span>
          </label>
          <Select value={selectedNicknameValue} onValueChange={handleSelect}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={isLoadingAccountInfo ? "Loading..." : "Select a nickname"} />
          </SelectTrigger>
          <SelectContent>
            {isFetchingNickname ? (
              <SelectItem value="loading" disabled>
                Loading...
              </SelectItem>
            ) : nicknameList && nicknameList.length > 0 ? (
              nicknameList.map((n) => (
                <SelectItem key={n.id} value={n.nickname}>
                  {n.nickname}
                </SelectItem>
              ))
            ) : (
              <SelectItem value="no-nickname" disabled>
                No nickname found
              </SelectItem>
            )}
          </SelectContent>
        </Select>

        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-base font-medium text-gray-700 mb-1">To :</label>
            <Button onClick={handleCheck} type='button' disabled={!toAccount} className=" text-white hover:text-white">
              <Check size={20} />
            </Button>
          </div>
          <Input
            type="text"
            value={toAccount}
            disabled={isLoadingAccountInfo}
            onChange={(e) => dispatch(setToAccount(e.target.value))}
            placeholder={isLoadingAccountInfo ? "Loading..." : "Account Number"}
          />
        </div>

        <div className="mb-6">
          <label className="block text-base font-medium text-gray-700 mb-2">Full Name :</label>
          <Input type="text" value={fullname} readOnly   placeholder={isLoadingAccountInfo ? "Loading..." : "Full name"} disabled={isLoadingAccountInfo}/>
        </div>

        {/* <div className="mb-6">
          <label className="block text-md font-bold text-gray-700 mb-2">
            Recent Transfer Lists
          </label>
          {transferLists?.map((transfer) => (
            <h1
              key={transfer.user}
              className="text-black hover:bg-blue-900 hover:text-white rounded-xs my-2 pl-3"
            >
              {transfer.user.name}
            </h1>
          ))}
        </div> */}

        <Link to="/transfer/confirmation">
          <Button type="button" onClick={handleSubmit} disabled={isValidate} className="w-full text-white py-2">
            Continue
          </Button>
        </Link>

      </form>
    </div>
  );
};

export default TransferPage;
