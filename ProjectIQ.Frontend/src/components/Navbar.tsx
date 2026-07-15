import Logo from "./Logo"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  BellDotIcon,
  UserCircleIcon,
  Search02Icon,
} from "@hugeicons/core-free-icons"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

type ActivePage = "Home" | "Projects" | "Team"
const pages: ActivePage[] = ["Home", "Projects", "Team"]

type NavigationProps = {
  page: ActivePage
}

function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex h-(--pq-navbar-height) w-full items-center justify-between gap-36 bg-(--pq-inverse-surface-container) px-8">
      <div className="flex items-center">
        <Title />
        <Navigation page="Home" />
      </div>
      <SearchInput />
      <Actions />
    </nav>
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
  return (
    <div className="flex items-center gap-9 text-base font-medium text-(--pq-inverse-on-surface)">
      {pages.map((p) => (
        <span
          key={p}
          className={
            p === page
              ? "underline decoration-(--pq-primary) decoration-2 underline-offset-9"
              : "text-(--pq-inverse-on-surface)/70"
          }
        >
          {p}
        </span>
      ))}
    </div>
  )
}

function SearchInput() {
  return (
    <InputGroup className="rounded-none border-none bg-(--pq-inverse-surface)">
      <InputGroupInput
        placeholder="Search resources, files, or commands..."
        className="text-sm text-(--pq-inverse-on-surface) placeholder:text-(--pq-inverse-on-surface)/50"
      />
      <InputGroupAddon>
        <HugeiconsIcon
          icon={Search02Icon}
          className="text-(--pq-inverse-on-surface)/50"
        />
      </InputGroupAddon>
    </InputGroup>
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
