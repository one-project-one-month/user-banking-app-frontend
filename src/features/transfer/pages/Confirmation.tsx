import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {  useNavigate } from "react-router-dom";
import { ArrowLeft, MoveDown } from "lucide-react";
import { PinDialog } from "../components/PinDialog";
import { Textarea } from "@/components/ui/textarea";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className=" mx-8 mt-10 space-y-6">
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
              <p className="text-lg font-semibold leading-none">John Doe</p>
              <p className="text-sm text-muted-foreground">Account No: 1234567890</p>
              <p className="text-md font-medium text-yellow-500">12,500.00 Ks</p>
            </div>
          </div>
                      <MoveDown size={24} className="ml-2 text-yellow-500" />
          <div className="flex items-center justify-between rounded-md  mb-5  transition-colors">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-md  font-medium">To : </span>
              <img
                src="/public/360_F_1535955058_LwMFa9B6kPoHXCmCQpB1CwPuUi57TEBJ.webp"
                alt="Sender"
                className="w-12 h-12 rounded-full object-cover border"
              />
            </div>
            <div className="text-right space-y-1">
              <p className="text-lg font-semibold leading-none">Ma Ma</p>
              <p className="text-sm text-muted-foreground">Account No: 1234567890</p>
            </div>
          </div>

      <div>
        <div className="mb-6">
          <h1>Amount (Ks) </h1>
          <Input placeholder="enter your amount" />
        </div>
        <div className="">
          <h1>Note</h1>
          <Textarea placeholder="enter your note" />
        </div>
      </div>
      <div className="w-full">
<PinDialog/>
      </div>
      
    </div>
  );
};

export default Confirmation;
