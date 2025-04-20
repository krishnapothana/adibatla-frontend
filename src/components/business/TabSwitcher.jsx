const TabSwitcher = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="flex gap-4 border-b pb-2 mb-4">
      {['Posts', 'Items', 'Reviews'].map((tab) => (
        <button
          key={tab}
          onClick={() => setCurrentTab(tab)}
          className={`px-4 py-1 rounded-t text-sm font-medium ${
            currentTab === tab
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-blue-600'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;
