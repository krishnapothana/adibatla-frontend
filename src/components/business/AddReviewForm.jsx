const AddReviewForm = ({ newReview, setNewReview, onSubmit }) => (
    <div className="border-t pt-4">
      <h3 className="text-lg font-semibold mb-2">Add a Review</h3>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          value={newReview.user}
          onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
          className="border p-2 w-full rounded"
        />
        <select
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
          className="border p-2 w-full rounded"
        >
          <option value={0}>Select Rating</option>
          <option value={5}>5 - Excellent</option>
          <option value={4}>4 - Good</option>
          <option value={3}>3 - Average</option>
          <option value={2}>2 - Poor</option>
          <option value={1}>1 - Bad</option>
        </select>
        <textarea
          rows={3}
          placeholder="Your review"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          className="border p-2 w-full rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit Review
        </button>
      </form>
    </div>
  );
  
  export default AddReviewForm;
  