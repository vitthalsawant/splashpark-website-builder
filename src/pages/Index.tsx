import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ActivityCard from '@/components/ActivityCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import { MotionWrapper } from '@/components/animations/MotionWrapper';

const activities = [
  {
    title: 'Thrilling Water Slides',
    description: 'Experience the adrenaline rush with our collection of twisting water slides for all ages and courage levels.',
    image: 'https://images.unsplash.com/photo-1582653291997-079b4f718947?q=80&w=2070&auto=format&fit=crop',
    path: '/attractions'
  },
  {
    title: 'Wave Pool Paradise',
    description: 'Ride the perfect waves in our state-of-the-art wave pool, suitable for beginners and experienced swimmers alike.',
    image: 'https://images.unsplash.com/photo-1551516281-f6075aa55daa?q=80&w=1974&auto=format&fit=crop',
    path: '/attractions'
  },
  {
    title: 'Scuba Diving Experience',
    description: 'Discover the underwater world with our guided scuba diving experiences in our artificial reef environment.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop',
    path: '/attractions'
  },
  {
    title: 'Lazy River Relaxation',
    description: 'Float along our scenic lazy river, perfect for unwinding after the more thrilling attractions.',
    image: 'https://images.unsplash.com/photo-1627884929676-c81f16a03da8?q=80&w=2070&auto=format&fit=crop',
    path: '/attractions'
  }
];

const packages = [
  {
    title: 'Day Pass',
    price: 49,
    description: 'Perfect for a full day of fun',
    features: [
      'Access to all basic attractions',
      'Single-day entry',
      'Locker usage (small)',
      'Access to showers and changing rooms',
    ],
    popular: false
  },
  {
    title: 'Adventure Package',
    price: 79,
    description: 'Our most popular package',
    features: [
      'Access to all attractions',
      'Single-day entry',
      'Priority queuing',
      'Locker usage (medium)',
      'Lunch voucher included',
      'Souvenir water bottle'
    ],
    popular: true
  },
  {
    title: 'Family Package',
    price: 199,
    description: 'Great value for families',
    features: [
      'Access for 4 people',
      'Access to all attractions',
      'Single-day entry',
      'Locker usage (large)',
      'Family lunch vouchers',
      'Souvenir photo',
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Adventure Enthusiast',
    text: 'AquaVenture provided my family with the perfect mix of excitement and relaxation. The kids loved the slides while my husband and I enjoyed the spa zone.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Travel Blogger',
    text: 'As someone who has visited water parks around the world, I can confidently say AquaVenture stands out with its innovative rides and impeccable safety standards.',
    rating: 5
  },
  {
    name: 'Emma Rodriguez',
    role: 'Local Resident',
    text: "I've been a season pass holder for three years, and the experience just keeps getting better. The staff is friendly, and they're always adding new attractions!",
    rating: 4
  }
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="hero-section min-h-screen flex items-center justify-center px-4"
        style={{ 
          '--bg-image': "url('https://images.unsplash.com/photo-1627884929676-c81f16a03da8?q=80&w=2070&auto=format&fit=crop')" 
        } as React.CSSProperties}
      >
        <div className="container mx-auto text-center">
          <MotionWrapper delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <span className="text-aqua-300 text-sm md:text-base uppercase tracking-widest font-medium mb-4 inline-block">
                Welcome to AquaVenture
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Dive Into The Adventure Of A Lifetime
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Experience thrilling water attractions, relaxing river cruises, and underwater adventures all in one place.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-aqua-600 hover:bg-aqua-700 text-white px-8 py-6 text-lg shadow-lg">
                  Book Your Visit
                </Button>
                <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/40 px-8 py-6 text-lg">
                  Explore Attractions
                </Button>
              </div>
            </div>
          </MotionWrapper>
          
          <a 
            href="#about" 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="animate-bounce" size={32} />
          </a>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <MotionWrapper>
            <SectionTitle 
              subtitle="About Us"
              title="Experience Aquatic Adventures Like Never Before"
              description="AquaVenture is more than just a water park – it's an immersive aquatic paradise designed for thrill-seekers, families, and relaxation enthusiasts alike. Spanning over 30 acres of meticulously designed landscapes, our park offers a perfect blend of heart-racing slides, serene pools, and unique water experiences."
            />
          </MotionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <MotionWrapper direction="right" delay={0.2}>
              <div className="rounded-2xl overflow-hidden h-full">
                <img 
                  src="https://images.unsplash.com/photo-1581152886945-37655ca60ef4?q=80&w=1974&auto=format&fit=crop" 
                  alt="About AquaVenture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </MotionWrapper>
            
            <MotionWrapper direction="left" delay={0.4}>
              <div className="flex flex-col justify-center h-full">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  At AquaVenture, our mission is to provide unforgettable aquatic experiences that combine excitement, relaxation, and safety. We strive to create moments of joy and connection for all our visitors, regardless of age or swimming ability.
                </p>
                <h3 className="text-2xl font-semibold mb-4">Safety First</h3>
                <p className="text-gray-600 mb-6">
                  Your safety is our top priority. Our park is staffed with certified lifeguards, and all attractions are regularly inspected to meet the highest safety standards in the industry.
                </p>
                <div className="mt-4">
                  <Link to="/about">
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2">
                      Learn More About Us <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
      
      {/* Activities Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <MotionWrapper>
            <SectionTitle 
              subtitle="Our Attractions"
              title="Discover A World Of Water Adventures"
              description="From heart-pounding slides to gentle lazy rivers, AquaVenture offers a diverse range of attractions designed for visitors of all ages and thrill preferences."
            />
          </MotionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {activities.map((activity, index) => (
              <MotionWrapper key={index} delay={0.2 + (index * 0.1)}>
                <ActivityCard {...activity} />
              </MotionWrapper>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/attractions">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                View All Attractions
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1599631438212-da95f24915e9?q=80&w=1932&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        ></div>
        
        <div className="container mx-auto relative z-10">
          <MotionWrapper>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready For The Ultimate Water Adventure?</h2>
              <p className="text-xl text-white/80 mb-8">
                Book your tickets now and prepare for a splash-tastic experience that you'll remember forever!
              </p>
              <Button className="bg-aqua-600 hover:bg-aqua-700 text-white px-8 py-6 text-lg">
                Book Your Adventure Today
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <MotionWrapper>
            <SectionTitle 
              subtitle="Tickets & Packages"
              title="Choose Your Perfect Adventure Package"
              description="We offer a variety of ticket options designed to suit different preferences and budgets. From single-day passes to season tickets, find the perfect package for your aquatic adventure."
            />
          </MotionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {packages.map((pkg, index) => (
              <MotionWrapper key={index} delay={0.2 + (index * 0.1)}>
                <PricingCard {...pkg} />
              </MotionWrapper>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-gray-50 rounded-lg text-center">
            <p className="text-gray-600 mb-4">
              Looking for group rates or special events? Contact our customer service team for customized packages.
            </p>
            <Link to="/tickets">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                View All Ticket Options
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_bottom_left,#06b6d4,transparent),radial-gradient(circle_at_top_right,#bae6fd,transparent)]"></div>
        
        <div className="container mx-auto relative z-10">
          <MotionWrapper>
            <SectionTitle 
              subtitle="Testimonials"
              title="What Our Visitors Say"
              description="Don't just take our word for it. Hear from the thousands of happy visitors who have experienced the thrill and joy of AquaVenture."
            />
          </MotionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <MotionWrapper key={index} delay={0.2 + (index * 0.1)}>
                <TestimonialCard {...testimonial} />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <MotionWrapper>
            <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated With AquaVenture</h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for exclusive offers, upcoming events, and park news.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent"
                />
                <Button className="bg-aqua-600 hover:bg-aqua-700 text-white min-w-[120px]">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
