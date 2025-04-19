
import { Link } from "react-router-dom";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Victoria Montgomery",
    title: "Founder & CEO",
    bio: "Victoria has over 20 years of experience in luxury real estate markets worldwide. Her exceptional client relationships and deep market knowledge have established AvantElite as a leader in high-end property acquisition.",
    image: "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80"
  },
  {
    id: 2,
    name: "Alexander Richardson",
    title: "Director of Global Properties",
    bio: "With a background in international finance and real estate, Alexander leads our global property acquisition team, specializing in identifying exceptional investment opportunities across major luxury markets.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    name: "Sophia Chen",
    title: "Head of Architecture & Design",
    bio: "Sophia brings 15 years of experience in luxury architecture and interior design. Her expertise ensures each property meets the highest standards of design excellence and functionality.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
  },
  {
    id: 4,
    name: "Jonathan Pierce",
    title: "Director of Client Relations",
    bio: "With a dedication to exceptional service, Jonathan manages our client experience team, ensuring that every interaction with AvantElite exceeds expectations and fosters lasting relationships.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  }
];

// Company history milestones
const milestones = [
  {
    year: 2003,
    title: "Foundation",
    description: "AvantElite was established in Beverly Hills with a vision to redefine luxury real estate by offering a truly personalized approach to high-value property acquisition."
  },
  {
    year: 2008,
    title: "International Expansion",
    description: "Recognizing our clients' increasingly global lifestyles, we opened our first international offices in London and Paris, extending our expertise to the European luxury market."
  },
  {
    year: 2013,
    title: "AvantElite Private Client",
    description: "Launched our exclusive Private Client division, offering bespoke services for ultra-high-net-worth individuals with dedicated property acquisition teams."
  },
  {
    year: 2018,
    title: "Asian Market Entry",
    description: "Established presence in Hong Kong and Singapore, connecting Asian investors with premier properties worldwide while facilitating expansion into emerging luxury markets."
  },
  {
    year: 2023,
    title: "Digital Transformation",
    description: "Embraced cutting-edge technology to enhance our clients' experience with virtual property tours, AI-powered property matching, and seamless digital transaction processes."
  }
];

const AboutPage = () => {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7f34b5063c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl md:text-5xl font-serif font-light mb-6">
                About <span className="font-semibold">AvantElite</span>
              </h1>
              <div className="w-20 h-1 bg-amber-600 mb-6"></div>
              <p className="text-white/90 text-xl">
                Redefining luxury real estate since 2003 with unmatched expertise and exceptional service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                Our <span className="font-semibold">Story</span>
              </h2>
              <div className="w-20 h-1 bg-amber-600 mb-6"></div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2003 by Victoria Montgomery, AvantElite emerged from a vision to create a real estate firm that transcends traditional boundaries. What began as a boutique agency in Beverly Hills has evolved into a global network of luxury property specialists united by a common purpose: to connect extraordinary people with extraordinary properties.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our journey has been defined by an unwavering commitment to excellence, discretion, and personalized service. We believe that each client deserves an experience as unique as the properties we represent. This philosophy has established AvantElite as the trusted advisor for discerning clients seeking exceptional properties worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, with offices in key luxury markets across four continents, we continue to redefine what's possible in luxury real estate. Our success is measured not by the volume of transactions but by the lasting relationships we build and the seamless experiences we create for our clients at every stage of their property journey.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                  alt="AvantElite Office"
                  className="rounded-sm shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-600 rounded-sm hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              Our <span className="font-semibold">Values</span>
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide every interaction, decision, and relationship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We hold ourselves to the highest ethical standards, conducting every transaction with complete transparency and honesty.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in every detail, constantly raising the bar for ourselves and the industry as a whole.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Focus</h3>
              <p className="text-gray-600">
                We place our clients at the center of everything we do, tailoring our approach to their unique needs and aspirations.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
              <p className="text-gray-600">
                We leverage our international network and cross-cultural expertise to provide truly global real estate solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discretion</h3>
              <p className="text-gray-600">
                We maintain absolute confidentiality, respecting our clients' privacy and handling sensitive matters with the utmost care.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and creative thinking to develop forward-looking solutions that address complex real estate challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              Our <span className="font-semibold">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Two decades of redefining luxury real estate
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
            
            {/* Milestones */}
            <div className="space-y-24 relative">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Year */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <span className="text-amber-600 font-serif text-3xl">{milestone.year}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              Meet Our <span className="font-semibold">Team</span>
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of experienced professionals is dedicated to providing exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-sm shadow-lg overflow-hidden group">
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-amber-600 mb-4">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Join our team of dedicated professionals making an impact in luxury real estate
            </p>
            <Link
              to="/contact"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-sm transition-colors font-medium"
            >
              Careers at AvantElite
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              Client <span className="font-semibold">Testimonials</span>
            </h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What our clients say about their experience with AvantElite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-300 italic mb-6 leading-relaxed">
                "Working with AvantElite was a revelation. Their understanding of our specific requirements and attention to detail led us to acquire a property that exceeded our expectations. The team's professionalism and discretion throughout the process were exemplary."
              </blockquote>
              <div>
                <p className="font-semibold">Michael & Sarah Thompson</p>
                <p className="text-gray-400 text-sm">New York City</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-300 italic mb-6 leading-relaxed">
                "AvantElite managed the entire process of selling our estate with remarkable expertise. Their global marketing strategy attracted qualified buyers, and their negotiation skills ensured we received an excellent value for our property. A truly white-glove service."
              </blockquote>
              <div>
                <p className="font-semibold">Robert Chen</p>
                <p className="text-gray-400 text-sm">Hong Kong</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-300 italic mb-6 leading-relaxed">
                "As international investors, we valued AvantElite's cross-border expertise. They navigated complex regulations with ease and identified opportunities that aligned perfectly with our investment strategy. Their property management services have also been exceptional."
              </blockquote>
              <div>
                <p className="font-semibold">Elena & Antonio Rossi</p>
                <p className="text-gray-400 text-sm">Milan, Italy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Experience the AvantElite Difference
            </h2>
            <p className="mb-8 text-lg">
              Contact us today to discuss your luxury real estate needs with our expert team
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-amber-600 hover:bg-gray-100 px-10 py-4 rounded-sm transition-colors font-medium text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
