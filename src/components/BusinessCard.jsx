import { Link } from 'react-router-dom';

const BusinessCard = ({ business, matchedItem }) => (
  <Link to={`/business/${business.id}`}>
    <div className="border p-4 rounded shadow hover:shadow-md transition space-y-1">
      <h3 className="text-lg font-semibold">{business.name}</h3>
      <p className="text-gray-600">{business.type}</p>
      <p className="text-sm text-gray-500">{business.address}</p>
      {matchedItem && (
        <p className="text-sm text-green-600 italic">Matched item: {matchedItem}</p>
      )}
    </div>
  </Link>
);

export default BusinessCard;
