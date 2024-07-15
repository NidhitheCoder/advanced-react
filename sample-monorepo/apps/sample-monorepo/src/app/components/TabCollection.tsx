import { useState } from 'react';
import Button from './Button';

interface TabItem {
  title: string;
  component?: React.ReactNode;
}

interface TabCollectionProps {
  items: TabItem[];
}

const TabCollection = ({ items }: TabCollectionProps) => {
  const [selectedItem, setSelectedItem] = useState<TabItem>(items[0]);

  const currentComponent = items.find(
    (item) => item.title === selectedItem.title
  )?.component;

  return (
    <div>
      <div className="w-full flex flex-row">
        {items.map((item) => (
          <Button
            label={item.title}
            onClick={() => setSelectedItem(item)}
            className={`flex-1 p-2 rounded-tl-md border-b-2 border-solid ${
              item.title === selectedItem.title
                ? 'bg-gray-50 border-red-400'
                : 'bg-transparent border-transparent'
            }`}
          />
        ))}
      </div>
      {currentComponent && <div className="p-4">{currentComponent}</div>}
    </div>
  );
};

export default TabCollection;
