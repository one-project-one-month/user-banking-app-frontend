import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {  useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PinDialog } from "../components/PinDialog";
import { Textarea } from "@/components/ui/textarea";

const Confirmation = () => {
  const navigate = useNavigate();

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
      <h1 className="text-2xl font-bold">Confirmation</h1>

      <div>
        <label className="block text-sm font-medium">From Account</label>
        <Input value="2323121414" disabled />
      </div>

 
      <div>
        <label className="block text-sm font-medium">To Account</label>
        <Input value="KoKo" disabled />
      </div>

      <div>
        <div className="mb-6">
          <h1>Amount</h1>
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
