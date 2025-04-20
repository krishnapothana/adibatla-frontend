import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import businesses from '../data/businessList';
import posts from '../data/mockPosts';
import reviewsData from '../data/mockReviews';

import BusinessInfo from '../components/business/BusinessInfo';
import BusinessPosts from '../components/business/BusinessPosts';
import BusinessReviews from '../components/business/BusinessReviews';
import AddReviewForm from '../components/business/AddReviewForm';
import TabSwitcher from '../components/business/TabSwitcher';
import BusinessItems from '../components/business/BusinessItems'; // ✅ new import

const BusinessDetail = () => {
  const { id } = useParams();
  const businessId = parseInt(id);

  const business = businesses.find(b => b.id === businessId);
  const businessPosts = posts.filter(p => p.businessId === businessId);
  const initialReviews = reviewsData.filter(r => r.businessId === businessId);

  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ user: '', rating: 0, comment: '' });
  const [currentTab, setCurrentTab] = useState('Posts');

  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 'No ratings yet';

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.user && newReview.rating > 0 && newReview.comment) {
      const updated = [
        ...reviews,
        { id: reviews.length + 1, businessId, ...newReview }
      ];
      setReviews(updated);
      setNewReview({ user: '', rating: 0, comment: '' });
    }
  };

  if (!business) return <div className="p-4">Business not found</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow p-4 w-full max-w-3xl mx-auto space-y-6">
        <BusinessInfo business={business} avgRating={avgRating} />
        <TabSwitcher currentTab={currentTab} setCurrentTab={setCurrentTab} />

        <div className="w-full min-h-[500px]">
          {currentTab === 'Posts' && <BusinessPosts posts={businessPosts} />}

          {currentTab === 'Items' && (
            <BusinessItems items={business.items} />
          )}

          {currentTab === 'Reviews' && (
            <div className="space-y-6">
              <AddReviewForm
                newReview={newReview}
                setNewReview={setNewReview}
                onSubmit={handleReviewSubmit}
              />
              <BusinessReviews reviews={reviews} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessDetail;
