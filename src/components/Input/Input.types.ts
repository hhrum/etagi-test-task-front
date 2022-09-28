interface InputProps {
  label?: string
  type?: string

  max?: string
  min?: string

  value: string
  onChange: (value: string) => void
}

export default InputProps;