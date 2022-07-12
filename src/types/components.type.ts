import { InputHTMLAttributes, SelectHTMLAttributes, Attributes } from 'react';
import { Theme, Font } from './theme.type';


export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'text' | 'outlined';
  background?: keyof Theme | Omit<string, keyof Theme>;
  color?: keyof Theme | Omit<string, keyof Theme>;
  size?: string;
}
export type AvatarProps = {
  size?: number;
};

export type ChipProps = {
  children: React.ReactNode;
  type?: 'round';
  background: string;
  color: string;
};

export type BaseFlexProps = {
  ref?: React.Ref<HTMLDivElement> | undefined | null;
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
  width?: string;
  margin?: string;
  padding?: string;
  height?: string;
  gap?: number;
  flex?: number;
  key?: Attributes['key'];
  wrap?: "wrap"| "nowrap"
};

export type TextProps = {
  color?: keyof Theme | Omit<string, keyof Theme>;
  weight?: keyof Font['weights'];
  size?: keyof Font["sizes"];
  align?: 'left' | 'center' | 'right';
  margin?: string;
  width?: string;
  overflow?: 'hidden' | 'ellipsis';
};

export type LabelTextProps = {
  color?: keyof Theme | Omit<string, keyof Theme>;
  weight?: keyof Font['weights'] | number;
  size?: keyof Font["sizes"];
  align?: 'left' | 'center' | 'right';
};

export type CardProps = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  color?: string;
  boxShadow?: string;
  padding?: string;
  align?: string;
  radius?: string;
  display?: string;
  justify?: string;
  overflow?: string;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  children?: React.ReactNode;
}

export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  children?: React.ReactNode;
}


export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children?: React.ReactNode;
  radius?: string;
  background?: string;
  color?: string;
  weight?: keyof Font['weights'] | number;
  width?: string;

}

export type TableColumn<T extends Record<string, unknown>> = {
  title: string;
  dataIndex: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

export type PaginationType = {
  page: number;
  size: number;
  total: number;
};

export type TableProps<T extends Record<string, unknown>> = {
  data: T[];
  columns: Array<TableColumn<T>>;
  pagination?: PaginationType;
  handleGoToPage?: (page: number) => void;
  [key: string]: any;
};

export type PaginationCompProps = {
  pagination: PaginationType;
  handleGoToPage?: (page: number) => void;
};