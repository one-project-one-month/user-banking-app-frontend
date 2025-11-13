    import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

const NicknameDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>

    <div className="flex flex-col items-center justify-center space-y-3">
    <Button className="bg-white rounded-full  w-18 h-18 flex items-center justify-center shadow-lg border border-gray-200 hover:bg-gray-100 p-0 m-0">
        <Plus className="text-yellow-600 w-32 h-32 flex-shrink-0" />
    </Button>
    <p className="text-gray-600 text-base font-semibold mt-2">Set Up Nickname</p>
</div>
        
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Nickname (if any)</DialogTitle>
          <DialogDescription>
            Give nickname for this account.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              placeholder="Enter your favorite nickname"
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="default">
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}

export default NicknameDialog