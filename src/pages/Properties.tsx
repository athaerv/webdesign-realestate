
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Sample properties data
const allProperties = [
  {
    id: 1,
    title: "Oceanfront Villa",
    location: "Malibu, California",
    price: "$12,500,000",
    bedrooms: 6,
    bathrooms: 8,
    sqft: 7500,
    type: "Villa",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Modern Penthouse",
    location: "Manhattan, New York",
    price: "$8,900,000",
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4200,
    type: "Penthouse",
    status: "For Sale",
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
    type: "Estate",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: 4,
    title: "Luxury Apartment",
    location: "Beverly Hills, California",
    price: "$5,250,000",
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 3200,
    type: "Apartment",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    title: "Historic Mansion",
    location: "Boston, Massachusetts",
    price: "$9,800,000",
    bedrooms: 8,
    bathrooms: 7,
    sqft: 8500,
    type: "Mansion",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    title: "Contemporary Townhouse",
    location: "Miami, Florida",
    price: "$3,950,000",
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 3800,
    type: "Townhouse",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1084&q=80"
  },
  {
    id: 7,
    title: "Beachfront Condo",
    location: "San Diego, California",
    price: "$4,200,000",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2900,
    type: "Condo",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 8,
    title: "Island Retreat",
    location: "Hawaii",
    price: "$18,900,000",
    bedrooms: 5,
    bathrooms: 6,
    sqft: 6800,
    type: "Villa",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  }
];

// Filter options
const locations = ["All Locations", "California", "New York", "Florida", "Massachusetts", "Hawaii"];
const propertyTypes = ["All Types", "Villa", "Penthouse", "Estate", "Apartment", "Mansion", "Townhouse", "Condo"];
const priceRanges = [
  { label: "All Prices", min: 0, max: Number.MAX_SAFE_INTEGER },
  { label: "$1M - $5M", min: 1000000, max: 5000000 },
  { label: "$5M - $10M", min: 5000000, max: 10000000 },
  { label: "$10M - $15M", min: 10000000, max: 15000000 },
  { label: "$15M+", min: 15000000, max: Number.MAX_SAFE_INTEGER }
];
const bedroomOptions = ["Any", "1+", "2+", "3+", "4+", "5+", "6+", "7+", "8+"];

const PropertiesPage = () => {
  // State for filters
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [priceFilter, setPriceFilter] = useState(priceRanges[0]);
  const [bedroomFilter, setBedroomFilter] = useState("Any");
  const [sortOption, setSortOption] = useState("newest");
  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  
  // Apply filters
  useEffect(() => {
    let result = [...allProperties];
    
    // Apply location filter
    if (locationFilter !== "All Locations") {
      result = result.filter(property => 
        property.location.includes(locationFilter)
      );
    }
    
    // Apply property type filter
    if (typeFilter !== "All Types") {
      result = result.filter(property => property.type === typeFilter);
    }
    
    // Apply price filter
    result = result.filter(property => {
      const propertyPrice = parseInt(property.price.replace(/[$,]/g, ''));
      return propertyPrice >= priceFilter.min && propertyPrice <= priceFilter.max;
    });
    
    // Apply bedroom filter
    if (bedroomFilter !== "Any") {
      const minBedrooms = parseInt(bedroomFilter);
      result = result.filter(property => property.bedrooms >= minBedrooms);
    }
    
    // Apply sorting
    if (sortOption === "price-high") {
      result.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[$,]/g, ''));
        const priceB = parseInt(b.price.replace(/[$,]/g, ''));
        return priceB - priceA;
      });
    } else if (sortOption === "price-low") {
      result.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[$,]/g, ''));
        const priceB = parseInt(b.price.replace(/[$,]/g, ''));
        return priceA - priceB;
      });
    }
    
    setFilteredProperties(result);
  }, [locationFilter, typeFilter, priceFilter, bedroomFilter, sortOption]);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-light mb-4">
            Luxury <span className="font-semibold">Properties</span>
          </h1>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our curated selection of the world's most luxurious properties. 
            Use the filters below to find the perfect property that matches your requirements.
          </p>
        </div>
        
        {/* Filter Bar */}
        <div className="bg-white shadow-lg rounded-sm mb-10 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Location Filter */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                id="location"
                value={locationFilter}
                onChange={e => setLocationFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Property Type Filter */}
            <div>
              <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <select
                id="property-type"
                value={typeFilter}
                onChange={e => setTypeFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {propertyTypes.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Price Range Filter */}
            <div>
              <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <select
                id="price-range"
                value={priceFilter.label}
                onChange={e => {
                  const selected = priceRanges.find(range => range.label === e.target.value);
                  if (selected) setPriceFilter(selected);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {priceRanges.map(range => (
                  <option key={range.label} value={range.label}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Bedrooms Filter */}
            <div>
              <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                Bedrooms
              </label>
              <select
                id="bedrooms"
                value={bedroomFilter}
                onChange={e => setBedroomFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {bedroomOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Sort Option */}
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
                Sort By
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="newest">Newest</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="price-low">Price (Low to High)</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredProperties.length}</span> properties
          </p>
        </div>
        
        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <Link 
              key={property.id} 
              to={`/properties/${property.id}`}
              className="group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-1 text-sm font-medium">
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    <span>{property.sqft.toLocaleString()} Sq Ft</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">No properties found</h3>
            <p className="text-gray-600 mb-6">Please try adjusting your filters to see more properties</p>
            <button
              onClick={() => {
                setLocationFilter("All Locations");
                setTypeFilter("All Types");
                setPriceFilter(priceRanges[0]);
                setBedroomFilter("Any");
              }}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-sm transition-colors font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}
        
        {/* Pagination - Only shown if enough properties */}
        {filteredProperties.length > 6 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <a className="px-4 py-2 border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-50 cursor-pointer">
                Previous
              </a>
              <a className="px-4 py-2 border border-amber-600 bg-amber-600 text-white rounded-sm">
                1
              </a>
              <a className="px-4 py-2 border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-50 cursor-pointer">
                2
              </a>
              <a className="px-4 py-2 border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-50 cursor-pointer">
                3
              </a>
              <a className="px-4 py-2 border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-50 cursor-pointer">
                Next
              </a>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;
