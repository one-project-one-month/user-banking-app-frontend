import { months } from "@/app/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterDropdownProps {
  onChange: (value: string) => void;
  currentFilter: string;
}

const FilterDropdown = ({onChange, currentFilter}: FilterDropdownProps) => {
  const todayDate = new Date();

  // DUMMY options
  const monthOptions = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(todayDate.getFullYear(), todayDate.getMonth() - i, 1);
    return {
      value: `${date.getFullYear()}-${date.getMonth()}`, // safe unique value
      label: `${months[date.getMonth()]} ${date.getFullYear()}`
    };
  });
  // DUMMY options

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={currentFilter} />
      </SelectTrigger>
      <SelectContent>
        {
          monthOptions.map((option) => (
            <SelectItem key={option.value} value={option.value} onClick={()=>onChange(option.value)}>
              {option.label}
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}

export default FilterDropdown