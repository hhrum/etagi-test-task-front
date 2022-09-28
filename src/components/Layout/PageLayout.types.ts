interface PageLayoutProps {
  className?: string
  headerClassName?: string
  contentClassName?: string
  toolsClassName?: string

  header?: JSX.Element
  children?: JSX.Element|JSX.Element[]
  tools?: JSX.Element
}

export default PageLayoutProps;