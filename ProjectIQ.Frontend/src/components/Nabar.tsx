import Logo from "./Logo"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  BellDotIcon,
  UserCircleIcon,
  Search02Icon,
} from "@hugeicons/core-free-icons"

type ActivePage = "Home" | "Projects" | "Team"
type NavigationProps = {
  page: ActivePage
}

function Navbar() {
  return (
    <div className="flex h-(--pq-navbar-height) w-full items-center justify-between gap-36 bg-(--pq-inverse-surface) px-8">
      <div className="flex items-center">
        <Title />
        <Navigation page="Home" />
      </div>
      <SearchInput />
      <Actions />
    </div>
  )
}

function Title() {
  return (
    <div className="mr-10 flex items-center gap-1">
      <Logo />
      <span className="headline-md text-(--pq-inverse-on-surface)">
        Project<span className="text-(--pq-primary)">IQ</span>
      </span>
    </div>
  )
}

function Navigation({ page }: NavigationProps) {
  const pages: ActivePage[] = ["Home", "Projects", "Team"]

  return (
    <div className="flex items-center gap-9 text-base font-medium text-(--pq-inverse-on-surface)">
      {pages.map((p) =>
        p == page ? (
          <span
            key={p}
            className="underline decoration-(--pq-primary) decoration-2 underline-offset-9"
          >
            {p}
          </span>
        ) : (
          <span key={p} className="text-sm text-(--pq-inverse-on-surface)/70">
            {p}
          </span>
        )
      )}
    </div>
  )
}

function SearchInput() {
  return (
    <input
      type="text"
      placeholder="Search resources, files, or commands..."
      className="w-full bg-white px-4 py-1 text-xs"
    />
  )
}

function Actions() {
  return (
    <div className="flex items-center gap-8">
      <HugeiconsIcon
        icon={BellDotIcon}
        className="size-6 text-(--pq-inverse-on-surface)"
      />
      <HugeiconsIcon
        icon={UserCircleIcon}
        className="size-6 text-(--pq-inverse-on-surface)"
      />
    </div>
  )
}

export default Navbar
