import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Download01Icon,
  CopyIcon,
  Forward01Icon,
  Refresh01Icon,
  ContentWritingIcon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function ExecutiveSummary() {
  return (
    <div>
      <Heading />
      <SummaryLayout />
    </div>
  )
}

function Heading() {
  return (
    <div className="flex gap-4 border-b pb-4">
      <div>
        <h1 className="display-lg">Executive Summary</h1>
        <span className="font-medium text-gray-500">
          High-level synthesis of the project goals, scope, stakeholders, and
          key insights derived from the source documentation
        </span>
      </div>
      <div className="flex items-center gap-2">
        <PageActions />
      </div>
    </div>
  )
}

function PageActions() {
  return (
    <>
      <Button className="rounded-sm p-4">
        <HugeiconsIcon icon={Forward01Icon} strokeWidth={2.0} />
        Run Analysis
      </Button>
      <Button className="rounded-sm p-4" variant="outline">
        <HugeiconsIcon icon={Refresh01Icon} strokeWidth={2.0} />
        Regenerate
      </Button>
      <Button className="rounded-sm" variant="outline">
        <HugeiconsIcon icon={Download01Icon} strokeWidth={2.0} />
      </Button>
      <Button className="rounded-sm" variant="outline">
        <HugeiconsIcon icon={CopyIcon} strokeWidth={2.0} />
      </Button>
    </>
  )
}

function ProjectOverview({ overview }: { overview: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-white p-4 shadow-sm inset-shadow-2xs">
      <div className="flex items-center gap-3">
        <HugeiconsIcon
          icon={ContentWritingIcon}
          className="size-5 text-(--pq-primary)"
          strokeWidth={2}
        />
        <h2 className="text-lg font-semibold">Project Overview</h2>
      </div>

      <span className="text-sm font-medium">{overview}</span>
    </div>
  )
}

type DocumentStatus = "draft" | "reviewed" | "approved"

type ProjectMeta = {
  projectName: string
  client: string
  lastUpdated: string
  status: DocumentStatus
}

function ProjectMetadata(props: ProjectMeta) {
  return (
    <div className="flex flex-1 flex-col gap-2 rounded-md bg-white p-4 shadow-sm inset-shadow-2xs">
      <div className="flex items-center gap-3">
        <HugeiconsIcon
          icon={InformationCircleIcon}
          className="size-4 text-gray-600"
          strokeWidth={2}
        />
        <h2 className="text-base font-semibold text-gray-900">
          Project Metadata
        </h2>
      </div>
      <div className="flex flex-col gap-2 text-xs font-medium">
        <div className="flex justify-between">
          <span className="text-gray-600">Project Name</span>
          <span>{props.projectName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Client</span>
          <span>{props.client}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Last Updated</span>
          <span>{props.lastUpdated}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Document Stauts</span>
          <span>{props.status}</span>
        </div>
      </div>
    </div>
  )
}

function KeyObjectivesCard({ objectives }: { objectives: string[] }) {
  return (
    <Card className="flex-2">
      <CardHeader>
        <CardTitle>Key Objectives</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

function ProjectStatisticsCard() {
  return (
    <div className="flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Project Statistics</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

function TargetUsersCard() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Target Users</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

function ConstraintsAssumptionsScopeCard() {
  return (
    <div className="flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Constraints, Assumptions & Out of Scope</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

function StakeholderSummaryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stakeholder Summary</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

function ProjectDeliverablesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Deliverables</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

function MajorFunctionalAreasCard() {
  return (
    <div className="flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Project Deliverables</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

function TopRisksCard() {
  return (
    <div className="flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Top Risks</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

function SummaryLayout() {
  const objectives = [
    "Achieve sub-50ms response times for 95th percentile API requests",
    "Implement blue-green deployment strategies across all Tier-1 services",
    "Reduce AWS infrastructure spend by 15% through aggressive auto-scaling policies.",
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="mt-4 flex gap-6">
        <div className="flex flex-2 flex-col gap-4">
          <ProjectOverview overview="The Apollo Infrastructre initiative modernizes the core data processing pipeline by migrating from a monolithic legacy system to a distributed microservices architecture on AWS. The strategic shift aims to reduce latency by 40%, improve horizontal scalability during peak loads, and establish a robust foundation for future machine model integrations." />
          <div className="flex gap-3">
            <KeyObjectivesCard objectives={objectives} />
            <ProjectStatisticsCard />
          </div>
          <StakeholderSummaryCard />
          <div className="flex gap-3">
            <TopRisksCard />
            <MajorFunctionalAreasCard />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-3">
          <ProjectMetadata
            projectName="Apollo Infrastructure"
            client="Apollo Enterprises"
            lastUpdated="Oct 24, 2024"
            status="draft"
          />
          <ProjectDeliverablesCard />
          <TargetUsersCard />
        </div>
      </div>
      <ConstraintsAssumptionsScopeCard />
    </div>
  )
}

export default ExecutiveSummary
