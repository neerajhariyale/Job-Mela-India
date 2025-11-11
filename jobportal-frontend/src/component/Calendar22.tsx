"use client"

// import * as React from "react" 
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";

interface Calendar22Props {
  label: string
  selected: Date | undefined
  onSelect: (date: Date | undefined) => void
}

export function Calendar22({ label, selected, onSelect }: Calendar22Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <label className="px-1 font-medium">{label}</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between font-normal"
          >
            {selected ? selected.toLocaleDateString() : "Select date"}
            <ChevronDownIcon className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selected}
            captionLayout="dropdown"
            onSelect={(date) => {
              onSelect(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
