import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationDemo({
  totalJobs,
  currentPage = 1,
  jobsPerPage = 20,
}: {
  totalJobs: number
  currentPage: number
  jobsPerPage: number
}) {
  const totalPages = Math.ceil(totalJobs / jobsPerPage)

  const windowSize = 3
  const halfWindow = Math.floor(windowSize / 2)

  let startPage = Math.max(1, currentPage - halfWindow)
  let endPage = Math.min(totalPages, startPage + windowSize - 1)

  if (endPage - startPage + 1 < windowSize) {
    startPage = Math.max(1, endPage - windowSize + 1)
  }

  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  )

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`/admin-view-all-jobs/page-no/${currentPage - 1}`} />
          </PaginationItem>
        )}

        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`/admin-view-all-jobs/page-no/${page}`}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={`/admin-view-all-jobs/page-no/${currentPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
