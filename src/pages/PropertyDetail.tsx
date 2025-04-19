
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

// Sample property data (in a real app, this would come from an API)
const propertyData = {
  id: 1,
  title: "Oceanfront Villa",
  description: "This extraordinary oceanfront villa offers the ultimate luxury lifestyle in Malibu. Perched on a bluff with panoramic views of the Pacific Ocean, this architectural masterpiece combines timeless elegance with contemporary design. Experience indoor-outdoor living at its finest with expansive terraces, an infinity pool that appears to merge with the horizon, and direct beach access.\n\nThe interior features soaring ceilings, walls of glass that showcase the breathtaking views, and bespoke finishes sourced from around the world. The gourmet kitchen is equipped with top-of-the-line appliances and opens to a spacious living area perfect for entertaining. The primary suite offers a private terrace, dual walk-in closets, and a spa-like bathroom with ocean views.\n\nThis exceptional property includes a wine cellar, home theater, fitness center, and separate guest house. Smart home technology, a sophisticated security system, and a 4-car garage complete this rare offering.",
  price: "$12,500,000",
  location: "Malibu, California",
  address: "27908 Pacific Coast Highway, Malibu, CA 90265",
  bedrooms: 6,
  bathrooms: 8,
  sqft: 7500,
  yearBuilt: 2018,
  lotSize: "1.2 acres",
  parkingSpaces: 4,
  amenities: [
    "Infinity Pool",
    "Wine Cellar",
    "Home Theater",
    "Fitness Center",
    "Ocean Views",
    "Beach Access",
    "Guest House",
    "Smart Home Technology",
    "Outdoor Kitchen",
    "Garden",
    "Fireplace",
    "Central Air"
  ],
  images: [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1602343168117-bb8a12d7c180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  ],
  agent: {
    name: "Victoria Montgomery",
    phone: "+1 (310) 555-6789",
    email: "victoria@avantelite.com",
    image: "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80"
  },
  similarProperties: [
    {
      id: 2,
      title: "Modern Penthouse",
      location: "Manhattan, New York",
      price: "$8,900,000",
      bedrooms: 4,
      bathrooms: 5,
      sqft: 4200,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    },
    {
      id: 3,
      title: "Mediterranean Estate",
      location: "Palm Beach, Florida",
      price: "$15,750,000",
      bedrooms: 7,
      bathrooms: 9,
      sqft: 10200,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    }
  ]
};

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImage, setCurrentImage] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // In a real app, you would fetch the property data based on the ID
  // For now, we'll use the sample data
  const property = propertyData;

  // Functions for gallery navigation
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="pt-20 pb-16">
      {/* Property Gallery */}
      <section className="relative">
        {/* Main Image Display */}
        <div className="relative h-[70vh] overflow-hidden bg-gray-100">
          <img
            src={property.images[currentImage]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          
          {/* Gallery Navigation */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={prevImage}
              className="w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={nextImage}
              className="w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Expand Gallery Button */}
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="absolute bottom-4 right-4 bg-white/80 hover:bg-white px-4 py-2 rounded-sm flex items-center transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            View All Photos
          </button>
        </div>
        
        {/* Thumbnail Navigation */}
        <div className="container mx-auto px-4 md:px-6 -mt-16 relative z-10">
          <div className="bg-white p-4 shadow-lg overflow-x-auto">
            <div className="flex space-x-4">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-shrink-0 w-24 h-16 overflow-hidden ${
                    index === currentImage ? "ring-2 ring-amber-600" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Property view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Fullscreen Gallery Modal */}
        {isGalleryOpen && (
          <div className="fixed inset-0 bg-black z-50 flex flex-col">
            <div className="flex justify-between items-center p-4 text-white">
              <h3 className="text-xl font-semibold">{property.title} - Gallery</h3>
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-grow flex items-center justify-center relative">
              <img
                src={property.images[currentImage]}
                alt={property.title}
                className="max-h-full max-w-full object-contain"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="bg-black/50 p-4">
              <div className="flex space-x-4 overflow-x-auto py-2">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-24 h-16 overflow-hidden ${
                      index === currentImage ? "ring-2 ring-amber-600" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Property view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="text-white text-center mt-2">
                {currentImage + 1} / {property.images.length}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Property Details */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-2">
                  {property.title}
                </h1>
                <p className="text-gray-600 text-lg">{property.location}</p>
              </div>
              <div className="bg-amber-600 text-white px-6 py-3 text-xl font-medium">
                {property.price}
              </div>
            </div>
            
            {/* Key Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-b border-gray-200 pb-8">
              <div>
                <h3 className="text-gray-500 text-sm">Bedrooms</h3>
                <p className="text-lg font-medium">{property.bedrooms}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">Bathrooms</h3>
                <p className="text-lg font-medium">{property.bathrooms}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">Square Footage</h3>
                <p className="text-lg font-medium">{property.sqft.toLocaleString()} sq ft</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">Year Built</h3>
                <p className="text-lg font-medium">{property.yearBuilt}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">Lot Size</h3>
                <p className="text-lg font-medium">{property.lotSize}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">Parking</h3>
                <p className="text-lg font-medium">{property.parkingSpaces} spaces</p>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-semibold mb-4">Description</h2>
              <div className="prose prose-lg max-w-none">
                {property.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Amenities */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Location */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-semibold mb-4">Location</h2>
              <p className="text-gray-700 mb-4">{property.address}</p>
              <div className="h-96 bg-gray-200 rounded-sm">
                {/* Google Maps would be integrated here in a real application */}
                <div className="h-full w-full flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-500">Map loading...</p>
                    <p className="text-gray-400 text-sm mt-2">{property.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent Form */}
            <div className="bg-white shadow-lg p-6 mb-8 sticky top-24">
              <div className="flex items-center mb-6">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{property.agent.name}</h3>
                  <p className="text-gray-600 text-sm">Luxury Property Specialist</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {property.agent.phone}
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex items-center text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {property.agent.email}
                </a>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    defaultValue={`I'm interested in ${property.title} at ${property.address}.`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-sm transition-colors font-medium"
                >
                  Contact Agent
                </button>
              </form>
            </div>
            
            {/* Mortgage Calculator */}
            <div className="bg-white shadow-lg p-6">
              <h3 className="text-xl font-serif font-semibold mb-4">Mortgage Calculator</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Amount
                  </label>
                  <input
                    type="text"
                    id="loan-amount"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    defaultValue="10,000,000"
                  />
                </div>
                <div>
                  <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700 mb-1">
                    Down Payment (20%)
                  </label>
                  <input
                    type="text"
                    id="down-payment"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    defaultValue="2,500,000"
                  />
                </div>
                <div>
                  <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700 mb-1">
                    Interest Rate (%)
                  </label>
                  <input
                    type="text"
                    id="interest-rate"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    defaultValue="4.5"
                  />
                </div>
                <div>
                  <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Term (Years)
                  </label>
                  <select
                    id="loan-term"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="15">15 Years</option>
                    <option value="30" selected>30 Years</option>
                  </select>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-sm">
                <p className="text-sm text-gray-600 mb-2">Estimated Monthly Payment</p>
                <p className="text-2xl font-semibold">$50,625</p>
                <p className="text-xs text-gray-500 mt-1">Principal and interest only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center">Similar Properties</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {property.similarProperties.map((similarProperty) => (
              <Link 
                key={similarProperty.id} 
                to={`/properties/${similarProperty.id}`}
                className="group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={similarProperty.image}
                    alt={similarProperty.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-1 text-sm font-medium">
                    {similarProperty.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{similarProperty.title}</h3>
                  <p className="text-gray-600 mb-4">{similarProperty.location}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>{similarProperty.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                      </svg>
                      <span>{similarProperty.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                      <span>{similarProperty.sqft} Sq Ft</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetailPage;
