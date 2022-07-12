import React, { useEffect } from 'react';
import { Column } from 'src/components';
import { BaseFlexProps, TabContextType, TabItemProps } from 'src/types';
import { TabHeaderBase, TabHeaderItemButton } from './styled';

export const TabContext = React.createContext<TabContextType>(
  {} as TabContextType,
);

export const Tabs: React.FC<{
  children: React.ReactNode;
  [key: string]: any;
}> = ({ children, ...rest }) => {
  const [activeTab, setActiveTab] = React.useState<number | string>(0);
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <Column gap={1} {...{ ...rest }}>
        {children}
      </Column>
    </TabContext.Provider>
  );
};
export const TabContent = ({
  children,
}: {
  children: (
    activeTab: number | string,
    setActiveTab: React.Dispatch<React.SetStateAction<string | number>>,
  ) => React.ReactNode;
}) => {
  const { activeTab, setActiveTab } = React.useContext(TabContext);
  return <>{children(activeTab, setActiveTab)}</>;
};

export const TabContentItem: React.FC<TabItemProps> = ({ id, children }) => {
  const { activeTab } = React.useContext(TabContext);
  return activeTab === id ? <>{children}</> : null;
};

export const TabHeaders: React.FC<{
  config?: BaseFlexProps;
}> = ({
  children,
  config = {
    align: 'center',
    width: '100%',
    justify: 'center',
  },
}) => {
  const { setActiveTab } = React.useContext(TabContext);

  useEffect(() => {
    const first = React.Children.toArray(children)[0] as React.ReactElement<
      TabItemProps
    >;
    if (first && first?.props?.id) setActiveTab(first.props.id);
  }, [children, setActiveTab]);

  return <TabHeaderBase {...{ ...config }}>{children}</TabHeaderBase>;
};

export const TabHeaderItem: React.FC<TabItemProps> = ({ id, children }) => {
  const { activeTab, setActiveTab } = React.useContext<TabContextType>(
    TabContext,
  );
  return (
    <TabHeaderItemButton
      active={activeTab === id}
      onClick={() => setActiveTab(id)}
    >
      {React.Children.map(children, (item) => {
        const child = item as React.ReactElement;
        if (typeof child === 'string') {
          return child;
        }
        return React.cloneElement(child, {
          active: activeTab === id,
        });
      })}
    </TabHeaderItemButton>
  );
};
