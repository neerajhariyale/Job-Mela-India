"use client"

import { useState } from "react"
import { toast } from "sonner"
import { SelectJob } from "./SelectJob"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import CalendarDemo from "./CalendarDemo"
import { RainbowButtonDemo } from "./RainbowButtonDemo"
import { Link } from "react-router-dom"
import { TypingAnimationDemo } from "./TypingAnimationDemo"
import axios from "axios"
import { Editor } from "./Editor"

function JobPostForm() {

  const [formData, setFormData] = useState({
    jobType: "",
    company: "",
    role: "",
    experience: "",
    requirements: "",
    apply: "",
    about: "",
    website: "",
    applylink: "",
    imagelink: "",
    location: "",
    startDate: null as Date | null,
    endDate: null as Date | null,
    about20Words: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleAboutChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    const words = inputValue.trim().split(/\s+/).filter(Boolean);
  
    // Limit to first 20 words only
    const limitedWords = words.slice(0, 20).join(" ");
  
    setFormData((prev) => ({ ...prev, about20Words: limitedWords }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      formData.startDate &&
      formData.endDate &&
      formData.startDate > formData.endDate
    ) {
      toast.error("End date should be after the start date.")
      return
    }

    try {
      const response = await axios.post("http://localhost:5000/api/jobs", {
        ...formData,
        startDate: formData.startDate ? formData.startDate.toISOString() : "",
        endDate: formData.endDate ? formData.endDate.toISOString() : "",
      })
      toast.success("🎉 Job added successfully!")

      // Optional: log returned jobId
      console.log("Job ID:", response.data.jobId)

      // Clear form
      setFormData({
        jobType: "",
        company: "",
        role: "",
        experience: "",
        requirements: "",
        apply: "",
        about: "",
        website: "",
        applylink: "",
        imagelink: "",
        location: "",
        startDate: null,
        endDate: null,
        about20Words: "",
      })
    } catch (error) {
      console.error("❌ Error submitting form:", error)
      toast.error("Failed to submit job. Please try again.")
    }
  }

  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-xl border-2 mt-6">
        <TypingAnimationDemo>Post a Job</TypingAnimationDemo>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Select Job Type */}
          <div className="flex flex-col gap-2">
            <Label>Select Job Type</Label>
            <SelectJob value={formData.jobType}
              onChange={(selectedJobType) =>
                setFormData((prev) => ({ ...prev, jobType: selectedJobType }))
              } />
          </div>

          <InputBlock
            id="company"
            label="Enter Company Name"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. TCS, Infosys"
          />

          <InputBlock
            id="role"
            label="Enter Position/Role"
            value={formData.role}
            onChange={handleChange}
            placeholder="e.g. Software Engineer"
          />

          <InputBlock
            id="experience"
            label="Enter Years of Experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="e.g. 0-2 years"
          />

          <CalendarDemo
            id="startDate"
            label="Start Date of Application"
            value={formData.startDate}
            onChange={(date) =>
              setFormData((prev) => ({ ...prev, startDate: date }))
            }
            placeholder="🗓️"
          />


          <CalendarDemo
            id="endDate"
            label="Last Date of Application"
            value={formData.endDate}
            onChange={(date) =>
              setFormData((prev) => ({ ...prev, endDate: date }))
            }
            placeholder="🗓️"
            
          />


          {/* <InputBlock
            id="startDate"
            label="Start Date of Application"
            value={formData.startDate}
            onChange={handleChange}
            placeholder="e.g. 15/August/1947"
          /> */}

          {/* <InputBlock
            id="endDate"
            label="Last Date of Application"
            value={formData.endDate}
            onChange={handleChange}
            placeholder="🗓️"
          /> */}

          {/* <CalendarDemo
          label="Start Date of Application"
          selected={formData.startDate}
          onSelect={(date: Date | undefined) => setFormData((prev) => ({ ...prev, startDate: date }))}
        />

        <Calendar22
          label="Last Date of Application"
          selected={formData.endDate}
          onSelect={(date) =>
            setFormData((prev) => ({ ...prev, endDate: date }))
          }
        /> */}

          <Label htmlFor="about20Words" className="block mb-1 font-lg">
            Enter Job Details <span className="text-xs font-xs text-gray-600 ">(approx. 20 words)</span>
          </Label>
          <Textarea
            id="about20Words"
            name="about20Words"
            value={formData.about20Words}
            onChange={handleAboutChange}
            placeholder="Briefly describe the job in around 20 words"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring"
          />


          <InputBlock
            id="location"
            label="Enter Location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Delhi, Mumbai, etc."
          />

          <Editor
            // id="requirements"
            label="Requirements"
            value={formData.requirements}
            onChange={(html) =>
              setFormData((prev) => ({ ...prev, requirements: html }))
            }
            placeholder="Enter job requirements"
          />

          <Editor
            // id="apply"
            label="How do you apply?"
            value={formData.apply}
            onChange={(html) =>
              setFormData((prev) => ({ ...prev, apply: html }))
            }
            placeholder="Describe the application process"
          />

          <Editor
            // id="about"
            label="About Company"
            value={formData.about}
            onChange={(html) =>
              setFormData((prev) => ({ ...prev, about: html }))
            }
            placeholder="Enter brief about the company"
          />

          <InputBlock
            id="website"
            label="Company Website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://company.com"
          />

          <InputBlock
            id="applylink"
            label="Apply Link"
            type="url"
            value={formData.applylink}
            onChange={handleChange}
            placeholder="https://apply.here"
          />

          <InputBlock
            id="imagelink"
            label="Company Image Link"
            type="url"
            value={formData.imagelink}
            onChange={handleChange}
            placeholder="https://company.com/logo.png"
          />

          <Button type="submit" className="w-full">
            Submit Job Posting
          </Button>
        </form>
      </div>

      <div className="flex justify-center items-center gap-4 mt-4 mb-4 w-full h-full">
        <Link to="/admin-dashboard">
          <RainbowButtonDemo>Go to Dashboard 📊</RainbowButtonDemo>
        </Link>
      </div>
    </>
  )
}

export default JobPostForm

// Reusable components for cleaner code
function InputBlock({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  id: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="shadow-none focus-visible:ring-1 focus-visible:outline-none outline-none"
      />
    </div>
  )
}

// function TextareaBlock({
//   id,
//   label,
//   value,
//   onChange,
//   placeholder,
// }: {
//   id: string
//   label: string
//   value: string
//   onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
//   placeholder: string
// }) {
//   return (
//     <div className="flex flex-col gap-2">
//       <Label htmlFor={id}>{label}</Label>
//       <Textarea
//         id={id}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         required
//         className="shadow-none focus-visible:ring-1 focus-visible:outline-none outline-none"
//       />
//     </div>
//   )
// }
