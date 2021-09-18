export interface Action<T> {
  type: string;
  payload?: T;
}

export interface InterfaceContentCard {
  id: number | string;
  name: string;
  src: string;
  description: string;
  checkbox: boolean;
  type: string;
  dimension: string;
  size: string;
  link?: string
}

export type Dispatch<A> = (value: A) => void;