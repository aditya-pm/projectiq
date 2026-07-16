import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Download01Icon,
  CopyIcon,
  Forward01Icon,
  Refresh01Icon,
  ContentWritingIcon,
  InformationCircleIcon,
  CheckmarkCircle02Icon,
  ArrowRight01Icon,
  Target01Icon,
  StationeryIcon,
  UserGroupIcon,
  ContainerTruckIcon,
  Tick01Icon,
  UserGroup02Icon,
  UserIcon,
  BadgeAlertIcon,
  JusticeScale02Icon,
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
import { Separator } from "@/components/ui/separator"

interface CardProps {
  className?: string
}

function ExecutiveSummary() {
  return (
    <div>
      <Heading />
      <SummaryLayout />
    </div>
  )
}

type badgeVariant = "low" | "medium" | "high"
type badgeProp = { variant: badgeVariant | RiskSeverity }
function Badge({ variant }: badgeProp) {
  switch (variant) {
    case "low":
      return (
        <span className="rounded-md bg-green-100 p-1 font-semibold text-green-500">
          Low
        </span>
      )
    case "medium":
      return (
        <span className="rounded-md bg-yellow-100 p-1 font-semibold text-yellow-500">
          Medium
        </span>
      )
    case "high":
      return (
        <span className="rounded-md bg-red-100 p-1 font-semibold text-red-500">
          High
        </span>
      )
  }
}

function Heading() {
  return (
    <div className="flex justify-between gap-4 border-b pb-4">
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

interface ProjectMetadataCardProps {
  projectName: string
  client: string
  lastUpdated: string
  status: DocumentStatus
  className?: string
}

function ProjectMetadataCard({
  projectName,
  client,
  lastUpdated,
  status,
  className = "",
}: ProjectMetadataCardProps) {
  return (
    <Card className={`${className} shadow-sm ring-0 inset-shadow-2xs`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HugeiconsIcon
            icon={InformationCircleIcon}
            className="size-4 text-gray-600"
            strokeWidth={2}
          />
          Project Metadata
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 text-xs font-medium">
          <div className="flex justify-between">
            <span className="text-gray-600">Project Name</span>
            <span>{projectName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Client</span>
            <span>{client}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Last Updated</span>
            <span>{lastUpdated}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Document Status</span>
            <span className="rounded-lg bg-gray-300 px-2 py-1 text-gray-700 capitalize">
              {status}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function KeyObjectivesCard({
  objectives,
  className = "",
}: {
  objectives: string[]
  className?: string
}) {
  return (
    <Card className={`${className} shadow-sm ring-0 inset-shadow-2xs`}>
      <CardHeader className="flex items-center gap-2">
        <HugeiconsIcon
          icon={Target01Icon}
          className="size-5 text-(--pq-primary)"
          strokeWidth={2.0}
        />
        <CardTitle className="text-lg font-semibold">Key Objectives</CardTitle>
      </CardHeader>

      <div className="px-4">
        <Separator className="bg-gray-200" />
      </div>

      <CardContent>
        <ul>
          {objectives.map((o) => (
            <li key={o} className="flex gap-2 text-sm">
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                className="mt-1 size-5 shrink-0 text-(--pq-primary)"
                strokeWidth={1.75}
              />
              {o}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto">
        <Button
          variant="outline"
          className="flex w-full justify-between rounded-sm border-gray-200 p-5 font-bold"
        >
          <span>View All Objectives</span>
          <span>
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2.0} />
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}

interface ProjectStatisticsCardProps {
  functionalRequirements: number
  nonFunctionalRequirements: number
  constraints: number
  assumptions: number
  outOfScope: number
  className?: string
}

function ProjectStatisticsCard({
  functionalRequirements,
  nonFunctionalRequirements,
  constraints,
  assumptions,
  outOfScope,
  className = "",
}: ProjectStatisticsCardProps) {
  return (
    <Card className={`${className} shadow-sm ring-0 inset-shadow-2xs`}>
      <CardHeader className="flex items-center gap-2">
        <HugeiconsIcon
          icon={StationeryIcon}
          className="size-5 text-(--pq-primary)"
          strokeWidth={2.0}
        />
        <CardTitle className="text-lg font-semibold">
          Project Statistics
        </CardTitle>
      </CardHeader>

      <div className="px-4">
        <Separator className="bg-gray-200" />
      </div>

      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Functional Requirements
            </span>
            <span className="font-semibold">{functionalRequirements}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Non-Functional Requirements
            </span>
            <span className="font-semibold">{nonFunctionalRequirements}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Constraints</span>
            <span className="font-semibold">{constraints}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Assumptions</span>
            <span className="font-semibold">{assumptions}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Out of Scope</span>
            <span className="font-semibold">{outOfScope}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="mt-auto">
        <Button
          variant="outline"
          className="flex w-full justify-between rounded-sm border-gray-200 p-5 font-bold"
        >
          <span>View All Requirements</span>
          <span>
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2.0} />
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}

function TargetUsersCard({
  users,
  className = "",
}: {
  users: string[]
  className?: string
}) {
  return (
    <Card className={`${className} shadow-sm ring-0 inset-shadow-2xs`}>
      <CardHeader className="flex items-center gap-2">
        <HugeiconsIcon
          icon={UserGroup02Icon}
          className="size-5 text-(--pq-primary)"
          strokeWidth={2.0}
        />
        <CardTitle className="text-lg font-semibold">Target Users</CardTitle>
      </CardHeader>

      <div className="px-4">
        <Separator className="bg-gray-200" />
      </div>

      <CardContent>
        <ul>
          {users.map((u) => (
            <li key={u} className="flex items-center gap-2 text-sm">
              <HugeiconsIcon
                icon={UserIcon}
                className="size-4 shrink-0 text-(--pq-primary)"
                strokeWidth={1.75}
              />
              {u}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

type ConstraintsAssumptionsScopeCardProps = {
  constraints: string[]
  assumptions: string[]
  outOfScope: string[]
  className?: string
}

function ConstraintsAssumptionsScopeCard({
  constraints,
  assumptions,
  outOfScope,
  className,
}: ConstraintsAssumptionsScopeCardProps) {
  return (
    <Card className={`${className} shadow-sm ring-0 inset-shadow-2xs`}>
      <CardHeader className="flex items-center gap-2">
        <HugeiconsIcon
          icon={JusticeScale02Icon}
          className="size-5 text-(--pq-primary)"
        />
        <CardTitle className="text-lg font-semibold">
          Constraints, Assumptions & Out of Scope
        </CardTitle>
      </CardHeader>

      <div className="px-4">
        <Separator className="bg-gray-200" />
      </div>

      <CardContent className="flex justify-between">
        <div>
          <span className="font-semibold">Constraints</span>
          <ul className="list-disc space-y-1 pl-4">
            {constraints.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <span className="font-semibold">Assumptions</span>
          <ul className="list-disc space-y-1 pl-4">
            {assumptions.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div>
          <span className="font-semibold">Out Of Scope</span>
          <ul className="list-disc space-y-1 pl-4">
            {outOfScope.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

interface Stakeholder {
  name: string
  role: string
  influence: "low" | "medium" | "high"
  interest: "low" | "medium" | "high"
}

interface StakeholderSummaryCardProps {
  stakeholders: Stakeholder[]
  className?: string
}

function StakeholderSummaryCard({
  stakeholders,
  className = "",
}: StakeholderSummaryCardProps) {
  return (
    <Card className={`${className} shadow-sm ring-0 inset-shadow-2xs`}>
      <CardHeader className="flex items-center gap-2">
        <HugeiconsIcon
          icon={UserGroupIcon}
          className="size-5 text-(--pq-primary)"
          strokeWidth={2.0}
        />
        <CardTitle className="text-lg font-semibold">
          Stakeholder Summary
        </CardTitle>
      </CardHeader>

      <CardContent>
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th className="border-b border-gray-200 pb-2 text-left text-xs font-semibold text-gray-500">
                Stakeholder
              </th>
              <th className="border-b border-gray-200 pb-2 text-left text-xs font-semibold text-gray-500">
                Role
              </th>
              <th className="border-b border-gray-200 pb-2 text-left text-xs font-semibold text-gray-500">
                Influence
              </th>
              <th className="border-b border-gray-200 pb-2 text-left text-xs font-semibold text-gray-500">
                Interest
              </th>
            </tr>
          </thead>
          <tbody>
            {stakeholders.map((stakeholder) => (
              <tr key={stakeholder.name} className="py-1">
                <td className="font-medium">{stakeholder.name}</td>
                <td className="text-gray-700">{stakeholder.role}</td>
                <td>
                  <Badge variant={stakeholder.influence} />
                </td>
                <td>
                  <Badge variant={stakeholder.interest} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>

      <CardFooter className="mt-auto">
        <Button
          variant="outline"
          className="flex w-full justify-between rounded-sm border-gray-200 p-5 font-bold"
        >
          <span>View Full Stakeholder Matrix</span>
          <span>
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2.0} />
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}

function ProjectDeliverablesCard({
  deliverables,
  className = "",
}: {
  deliverables: string[]
  className?: string
}) {
  return (
    <Card className={`${className} shadow-sm ring-0 inset-shadow-2xs`}>
      <CardHeader className="flex items-center gap-2">
        <HugeiconsIcon
          icon={ContainerTruckIcon}
          className="size-5 text-(--pq-primary)"
          strokeWidth={2.0}
        />
        <CardTitle className="text-lg font-semibold">
          Project Deliverables
        </CardTitle>
      </CardHeader>

      <div className="px-4">
        <Separator className="bg-gray-200" />
      </div>

      <CardContent>
        <ul>
          {deliverables.map((d) => (
            <li key={d} className="flex items-center gap-2 text-sm font-medium">
              <HugeiconsIcon
                icon={Tick01Icon}
                className="size-4 shrink-0 text-(--pq-primary)"
                strokeWidth={2}
              />
              {d}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function MajorFunctionalAreasCard({ className }: CardProps) {
  return (
    <Card className={`${className} shadow-sm ring-0 inset-shadow-2xs`}>
      <CardHeader>
        <CardTitle>Major Functional Areas</CardTitle>
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

type RiskSeverity = "low" | "medium" | "high"
type Risk = { title: string; description: string; severity: RiskSeverity }

function TopRisksCard({
  risks,
  className = "",
}: {
  risks: Risk[]
  className: string
}) {
  return (
    <Card className={`${className} shadow-sm ring-0 inset-shadow-2xs`}>
      <CardHeader className="flex items-center gap-2">
        <HugeiconsIcon
          icon={BadgeAlertIcon}
          className="size-5 text-(--pq-primary)"
          strokeWidth={2.0}
        />
        <CardTitle className="text-lg font-semibold">Top Risks</CardTitle>
      </CardHeader>

      <div className="px-4">
        <Separator className="bg-gray-200" />
      </div>

      <CardContent>
        <ul>
          {risks.map((risk) => (
            <li key={risk.title} className="flex gap-1 p-1">
              <div className="flex items-center gap-2">
                <div className="flex flex-col">
                  <span className="font-bold">{risk.title}</span>
                  <span className="text-gray-500">{risk.description}</span>
                </div>
                <span>
                  <Badge variant={risk.severity} />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto">
        <Button
          variant="outline"
          className="flex w-full justify-between rounded-sm border-gray-200 p-5 font-bold"
        >
          <span>View All Risks</span>
          <span>
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2.0} />
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}

function SummaryLayout() {
  const objectives = [
    "Achieve sub-50ms response times for 95th percentile API requests",
    "Implement blue-green deployment strategies across all Tier-1 services",
    "Reduce AWS infrastructure spend by 15% through aggressive auto-scaling policies.",
  ]

  const deliverables = [
    "Staff Web Dashboard",
    "Customer-Facing Storefront",
    "Warehouse Mobile Scanner App",
    "Backend APIs",
  ]

  const stakeholders: Stakeholder[] = [
    { name: "John Mitchell", role: "CTO", influence: "high", interest: "high" },
    {
      name: "Sarah Chen",
      role: "Engineering Lead",
      influence: "high",
      interest: "high",
    },
    {
      name: "Michael Rodriguez",
      role: "Data Engineering Manager",
      influence: "medium",
      interest: "high",
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      influence: "medium",
      interest: "low",
    },
  ]

  const users = [
    "Customer",
    "Store Staff",
    "Warehouse Operator",
    "Inventory Manager",
    "Administrator",
  ]

  const risks: Risk[] = [
    {
      title: "Payment Gateway Downtime",
      description:
        "Payment outages could temporarily prevent users from completing transactions.",
      severity: "high",
    },
    {
      title: "Inventory Synchronization",
      description: "Concurrent orders may result in inaccurate stock levels.",
      severity: "medium",
    },
    {
      title: "Vendor Adoption",
      description:
        "Vendors may require time to adapt to the new digital workflow.",
      severity: "medium",
    },
    {
      title: "Scope Expansion",
      description:
        "Unplanned feature requests could delay the project timeline.",
      severity: "low",
    },
  ]

  const constraints = [
    "Must comply with AWS Well-Architected Framework",
    "Data Residency: US-East-1 region only",
    "Integratoinw ith existing SAP environment",
  ]

  const assumptions = [
    "Legacy data will be accessible during migration",
    "Team has required AWS and Kubernetes skills",
    "Third-party APIs will remain stable",
  ]

  const outOfScope = [
    "Frontend user inteface development",
    "On-premise infrastructure migration",
    "Historical data re-processing",
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="mt-4 flex gap-6">
        <div className="flex flex-2 flex-col gap-4">
          <ProjectOverview overview="The Apollo Infrastructre initiative modernizes the core data processing pipeline by migrating from a monolithic legacy system to a distributed microservices architecture on AWS. The strategic shift aims to reduce latency by 40%, improve horizontal scalability during peak loads, and establish a robust foundation for future machine model integrations." />
          <div className="flex gap-3">
            <KeyObjectivesCard objectives={objectives} className="flex-1" />
            <ProjectStatisticsCard
              className="flex-1"
              functionalRequirements={142}
              nonFunctionalRequirements={28}
              constraints={12}
              assumptions={9}
              outOfScope={14}
            />
          </div>
          <StakeholderSummaryCard stakeholders={stakeholders} />

          <MajorFunctionalAreasCard className="flex-1" />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-7">
          <ProjectMetadataCard
            projectName="Apollo Infrastructure"
            client="Apollo Enterprises"
            lastUpdated="Oct 24, 2024"
            status="draft"
          />
          <ProjectDeliverablesCard deliverables={deliverables} />
          <TargetUsersCard users={users} />
          <TopRisksCard className="flex-1" risks={risks} />
        </div>
      </div>
      <ConstraintsAssumptionsScopeCard
        constraints={constraints}
        assumptions={assumptions}
        outOfScope={outOfScope}
      />
    </div>
  )
}

export default ExecutiveSummary
