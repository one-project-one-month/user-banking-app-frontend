import { useState, useEffect } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Delete, LockKeyhole } from "lucide-react"

export function PinDialog() {
  const [pin, setPin] = useState("")

  const handleDigitClick = (digit: string) => {
    if (pin.length < 6) {
      setPin((prev) => prev + digit)
    }
  }

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1))
  }

  const handleSubmit = () => {
    console.log("Entered PIN:", pin)
    // You can trigger your own logic here (e.g., API call, close dialog, etc.)
  }

  // Automatically submit when PIN reaches 6 digits
  useEffect(() => {
    if (pin.length === 6) {
      handleSubmit()
    }
  }, [pin])

  // ✅ No "enter" key here
  const keypad = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "x", "0"
  ]

  const handleKeyPress = (key: string) => {
    if (key === "x") return handleBackspace()
    handleDigitClick(key)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Confirm</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-center flex justify-center items-center my-3">
            <LockKeyhole className="bg-blue-900 text-white rounded-md w-12 h-12 p-3" />
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            Enter your PIN to confirm transaction
          </DialogDescription>
        </DialogHeader>

        {/* PIN display */}
        <div className="text-center text-2xl font-mono border p-3 rounded bg-gray-100 dark:bg-gray-800 tracking-widest">
          {pin.padEnd(6, "•")}
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-6 gap-3 mt-4">
          {keypad.slice(0, 9).map((key) => (
            <Button
              key={key}
              variant="ghost"
              onClick={() => handleKeyPress(key)}
              className={`col-span-2 text-lg py-6 rounded-full 
                ${key === "x"
                  ? "bg-red-100 hover:bg-red-200 text-red-500"
                  : "bg-gray-200 hover:bg-gray-300 text-blue-950"}`}
            >
              {key === "x" ? <Delete className="w-8 h-8" /> : key}
            </Button>
          ))}

          <Button
            key="x"
            variant="ghost"
            onClick={() => handleKeyPress("x")}
            className="col-span-2 col-start-2 text-lg py-6 rounded-full bg-red-100 hover:bg-red-200 text-red-900"
          >
            <Delete className="w-8 h-8" />
          </Button>

          <Button
            key="0"
            variant="ghost"
            onClick={() => handleKeyPress("0")}
            className="col-span-2 col-start-4 text-lg py-6 rounded-full bg-gray-200 hover:bg-gray-300 text-blue-950"
          >
            0
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
