
import { RouteInterface } from './routes.type';



export type TabContextType = {
  activeTab: number | string;
  setActiveTab: React.Dispatch<React.SetStateAction<number | string>>;
};

export type TabItemProps = {
  id: number | string;
  active?: boolean;
};

export type TabHeaderItemButtonType = {
  active: boolean;
};

export type RouterProps = {
  routes: RouteInterface[];
  base?: string;
};

export type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};
export type SuggestionCompProps = WithChildren<{
  onClick: () => void;
  showSuggestion: boolean;
}>;

export type DropDownData = {
  label: string;
  icon: React.FC;
  onClick?: (d?: Record<string, unknown>) => void;
};
