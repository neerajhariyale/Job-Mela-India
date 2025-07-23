import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useParams } from "react-router-dom"
import { PaginationDemo } from "./PaginationDemo"

export function AdminCardDemo1() {
  const { page } = useParams()
  const currentPage = Number(page) || 1

  const totalJobs = 200
  const jobsPerPage = 20

  const [jobs, setJobs] = useState<
    Array<{
      id: number
      title: string
      lastDate: string
      description: string
    }>
  >([])

  useEffect(() => {
    const newJobs = Array.from({ length: jobsPerPage }, (_, i) => ({
      id: i + 1 + (currentPage - 1) * jobsPerPage,
      title: "Software Engineer",
      lastDate: "30 July 2025",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quisquam. Voluptatem dolorum iusto nisi fugit minima harum unde impedit sint?",
    }))
    setJobs(newJobs)
  }, [currentPage])

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {jobs.map((job) => (
          <Card key={job.id} className="w-full max-w-sm border-2 shadow-lg h-full">
            <img
              src="https://media.glassdoor.com/lst2x/1c/36/74/a1/tcs-siruseri-campus.jpg?signature=5d138bdb75a50b261e94df99b23843dc589ba6d74fddaf9ed900c819cae64862"
              alt="Job Image"
              width={400}
              height={200}
              className="rounded-xl object-cover p-2"
            />
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>Last Date to Apply: {job.lastDate}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col w-full gap-3">
              <Button className="w-full bg-blue-400 text-white hover:bg-blue-600">
                View Job Details
              </Button>
              <div className="flex w-full gap-2">
                <Button className="w-1/2 bg-[#A9A9A9] hover:bg-[#928E85] text-white">
                  Edit Post
                </Button>
                <Button variant="destructive" className="w-1/2 hover:bg-red-700">
                  Delete Post
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <PaginationDemo
        totalJobs={totalJobs}
        currentPage={currentPage}
        jobsPerPage={jobsPerPage}
      />
    </div>
  )
}
