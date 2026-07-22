interface ModuleHeadingProps {
  heading: string
  description: string
  children?: React.ReactNode
}

function ModuleHeader({ heading, description, children }: ModuleHeadingProps) {
  return (
    <div className="flex justify-between gap-4 border-b pb-4">
      <div>
        <h1 className="display-lg">{heading}</h1>
        <span className="font-medium text-gray-500">{description}</span>
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  )
}

export default ModuleHeader
