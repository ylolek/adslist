export type TSortKeys = string;
export type TSortOrder = string;

export interface ISort {
  readonly key: TSortKeys;
  readonly order: TSortOrder;
}

export interface ISortOption {
  readonly field: string;
  readonly value: string;
  readonly title: string
}

export interface ISortOptionsData {
  readonly adsSort: ISortOption[];
}