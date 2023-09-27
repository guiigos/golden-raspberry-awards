import React from 'react'
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdSkipNext,
  MdSkipPrevious
} from 'react-icons/md'

const SIZE_TOTAL: number = 5
const SIZE_REDUCED: number = 3

interface PaginationProps {
  total?: number
  current?: number
  onPage: (page: number) => void
}

interface PaginationElementProps {
  first?: boolean
  last?: boolean
  current?: boolean
  change: () => void
}

const PaginationElement: React.FC<
  React.PropsWithChildren<PaginationElementProps>
> = ({ current, last, first, change, children }): React.ReactElement => {
  const stitches: React.ReactElement = (
    <span className="select-none px-2">...</span>
  )

  return (
    <>
      {last && stitches}
      <button
        onClick={change}
        className={`flex w-6 cursor-pointer items-center justify-center pt-px hover:bg-blue-200 ${
          current ? 'bg-blue-600 text-white' : 'text-gray-500'
        }`}
      >
        {children}
      </button>
      {first && stitches}
    </>
  )
}

const Pagination: React.FC<PaginationProps> = ({
  total = 0,
  current = 0,
  onPage
}): React.ReactElement => {
  const showPagination = total > SIZE_TOTAL

  const showFirst = current >= SIZE_TOTAL
  const showLast = current <= total - SIZE_TOTAL + 1
  const showPrev = current + 1 > 1
  const showNext = current + 1 < total

  const size = showPagination
    ? showFirst && showLast
      ? SIZE_REDUCED
      : SIZE_TOTAL
    : total

  const numbers = Array.from(new Array(size))
    .map((_, index) => {
      if (current < SIZE_TOTAL) return ++index
      if (current > total - SIZE_TOTAL + 1) return total - index

      return current + index - (size === SIZE_TOTAL ? 2 : 1)
    })
    .sort((a, b) => a - b)

  return (
    <div className="flex justify-center border border-gray-400 bg-gray-100">
      {showPrev && (
        <PaginationElement change={() => onPage(0)}>
          <MdSkipPrevious />
        </PaginationElement>
      )}
      {showPrev && (
        <PaginationElement change={() => onPage(current - 1)}>
          <MdNavigateBefore />
        </PaginationElement>
      )}
      {showFirst && showPagination && (
        <PaginationElement change={() => onPage(0)} first>
          {1}
        </PaginationElement>
      )}

      {numbers.map((value: number) => (
        <PaginationElement
          key={value}
          current={value === current + 1}
          change={() => onPage(value - 1)}
        >
          {value}
        </PaginationElement>
      ))}

      {showLast && showPagination && (
        <PaginationElement change={() => onPage(total - 1)} last>
          {total}
        </PaginationElement>
      )}
      {showNext && (
        <PaginationElement change={() => onPage(current + 1)}>
          <MdNavigateNext />
        </PaginationElement>
      )}
      {showNext && (
        <PaginationElement change={() => onPage(total - 1)}>
          <MdSkipNext />
        </PaginationElement>
      )}
    </div>
  )
}

export default Pagination
