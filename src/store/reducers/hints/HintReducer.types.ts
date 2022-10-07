
interface IHint {
  name: string
  completed: boolean
}

interface IHintsSlice {
  data: IHint[]
}

export default IHintsSlice;
export type {
  IHint
};