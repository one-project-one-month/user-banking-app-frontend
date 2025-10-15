import { Button } from "@/components/ui/button";
import type { ButtonHTMLAttributes } from "react";

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  handleClick: ()=>void,
  className?: string;
}
const Tab = ({title, handleClick, className, ...props }:TabProps) => {
  return (
    <Button
      type='button' 
      onClick={handleClick} 
      className={`text-sm leading-5 font-medium py-[5px] px-[8.5px] border-b-2 border-black-pearl-100 rounded-sm text-body bg-surface-default min-w-[50px] ${className}`}
      {...props}>
      {title}
    </Button>
  )
}

export default Tab