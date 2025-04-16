import { Link } from 'react-router-dom';

const BusinessCard = ({ business }) => (
  <Link to={`/business/${business.id}`}>
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{business.name}</h3>
      <p className="text-gray-600">{business.type}</p>
      <p className="text-sm text-gray-500">{business.address}</p>
    </div>
  </Link>
);

export default BusinessCard;
