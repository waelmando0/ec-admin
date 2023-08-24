interface HeadingProps {
  title: string
  description: string
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight ">
        {title}
      </h1>
      <p>{description}</p>
    </div>
  )
}
