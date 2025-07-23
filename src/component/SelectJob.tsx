"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectJob() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] hover:cursor-pointer">
        <SelectValue placeholder="Select Job Type" />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup >
          <SelectLabel>Select</SelectLabel>
          <SelectItem value="itjobs" className="hover:cursor-pointer">IT Jobs</SelectItem>
          <SelectItem value="nonitjobs" className="hover:cursor-pointer">Non-IT Jobs</SelectItem>
          <SelectItem value="govtjobs" className="hover:cursor-pointer">Govt. Jobs</SelectItem>
          <SelectItem value="internship" className="hover:cursor-pointer">Internship</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
