import NoteInput from "../shared/NoteInput";
import QRToRecieveActions from "./QRToRecieveActions";
import QRToRecieveQRDisplay from "./QRToRecieveQRDisplay";

function QRToRecieveSection() {
  return (
    <div className="max-w-4xl w-full text-black-pearl-700 flex flex-col md:flex-row justify-between items-center gap-8 pb-10 p-6  mx-auto  border-gray-100">
      {/* this is where qr display */}
      <QRToRecieveQRDisplay />

      {/* action section  */}
      <div className="flex flex-col w-full md:w-1/2 gap-5">
        <NoteInput />
        <QRToRecieveActions />
      </div>
    </div>
  );
}

export default QRToRecieveSection;
