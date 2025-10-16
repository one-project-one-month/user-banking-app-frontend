import { useState } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

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
  }

  const keypad = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "x", "0", "enter"
  ]

  const handleKeyPress = (key: string) => {
    if (key === "x") return handleBackspace()
    if (key === "enter") return handleSubmit()
    handleDigitClick(key)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">confirm</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-center my-3">Enter Your PIN</DialogTitle>
        </DialogHeader>

        <div className="text-center text-2xl font-mono border p-3 rounded bg-gray-100 dark:bg-gray-800 tracking-widest">
          {pin || "• • • • • •"}
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">
          {keypad.map((key) => (
            <Button
              key={key}
              variant={key === "enter" ? "default" : "outline"}
              className="text-lg py-6"
              onClick={() => handleKeyPress(key)}
            >
              {key === "x" ? "back" : key === "enter" ? "Enter" : key}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
