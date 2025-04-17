const BusinessInfo = ({ business, avgRating }) => (
    <div className="border-b pb-4">
      <h2 className="text-2xl font-bold">{business.name}</h2>
      <p className="text-gray-600">{business.type}</p>
      <p className="my-2">{business.description}</p>
      <p><strong>Address:</strong> {business.address}</p>
      <p><strong>Contact:</strong> {business.contact}</p>
      <p className="mt-2 text-yellow-600 font-semibold">⭐ Rating: {avgRating} / 5</p>
    </div>
  );
  
  export default BusinessInfo;
  