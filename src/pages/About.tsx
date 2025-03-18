
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import { MotionWrapper } from '@/components/animations/MotionWrapper';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: 'John Davis',
    role: 'Park Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: 'With 15 years of experience in water park management, John ensures that AquaVenture delivers the highest standards of fun and safety.'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    bio: 'Maria oversees daily operations, making sure that every aspect of the park runs smoothly for an optimal visitor experience.'
  },
  {
    name: 'Alex Thompson',
    role: 'Safety Manager',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    bio: 'As our Safety Manager, Alex implements rigorous safety protocols to ensure the wellbeing of all our guests.'
  },
  {
    name: 'Sarah Kim',
    role: 'Lead Lifeguard Trainer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Sarah trains our team of lifeguards, ensuring they are prepared to provide immediate assistance when needed.'
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="hero-section pt-40 pb-20 px-4 relative"
        style={{ 
          '--bg-image': "url('https://images.unsplash.com/photo-1505236890543-8ffc77237e7c?q=80&w=2062&auto=format&fit=crop')" 
        } as React.CSSProperties}
      >
        <div className="container mx-auto relative z-10 text-center">
          <MotionWrapper delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <span className="text-aqua-300 text-sm md:text-base uppercase tracking-widest font-medium mb-4 inline-block">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The Story Behind AquaVenture
              </h1>
              <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
                Learn about our journey to becoming the premier water sports destination, our values, and the dedicated team behind the magic.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <MotionWrapper direction="right">
              <img 
                src="https://images.unsplash.com/photo-1575329283928-c8fb80dbfe6f?q=80&w=2070&auto=format&fit=crop" 
                alt="AquaVenture History" 
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
            </MotionWrapper>
            
            <MotionWrapper direction="left" delay={0.2}>
              <div>
                <h2 className="section-title mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    AquaVenture was born from a simple yet powerful vision: to create a water park that combines thrilling adventures with relaxation in a safe, family-friendly environment.
                  </p>
                  <p>
                    Founded in 2010 by a group of water sports enthusiasts and theme park professionals, we set out to revolutionize the water park experience. What began as a modest water park with a handful of attractions has grown into a world-class destination spanning over 30 acres.
                  </p>
                  <p>
                    Over the years, we've continuously evolved, adding innovative attractions and enhancing visitor experiences based on feedback and emerging technologies. Today, AquaVenture stands as a testament to our commitment to excellence, safety, and unforgettable fun.
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
      
      {/* Our Mission and Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <MotionWrapper>
            <SectionTitle 
              subtitle="Mission & Values"
              title="What Drives Us Forward"
              description="At AquaVenture, our core values guide everything we do, from designing attractions to training staff and serving our guests."
            />
          </MotionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <MotionWrapper delay={0.2}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-aqua-100 flex items-center justify-center mb-4">
                  <span className="text-aqua-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                <p className="text-gray-600">
                  We prioritize the safety and wellbeing of our guests and staff above all else. Our rigorous safety protocols exceed industry standards, and we continuously train our team to handle any situation.
                </p>
              </div>
            </MotionWrapper>
            
            <MotionWrapper delay={0.3}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-aqua-100 flex items-center justify-center mb-4">
                  <span className="text-aqua-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Exceptional Experiences</h3>
                <p className="text-gray-600">
                  We strive to create memorable experiences that exceed expectations. From heart-racing slides to serene relaxation pools, we design every aspect of our park to delight and surprise our guests.
                </p>
              </div>
            </MotionWrapper>
            
            <MotionWrapper delay={0.4}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-aqua-100 flex items-center justify-center mb-4">
                  <span className="text-aqua-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to environmental stewardship. Our park implements water conservation practices, renewable energy solutions, and eco-friendly operations to minimize our ecological footprint.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <MotionWrapper>
            <SectionTitle 
              subtitle="Our Team"
              title="Meet The People Behind AquaVenture"
              description="Our diverse team of professionals is united by a passion for creating safe, exciting aquatic experiences for all our visitors."
            />
          </MotionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member, index) => (
              <MotionWrapper key={index} delay={0.2 + (index * 0.1)}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-aqua-600 text-sm mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <MotionWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title mb-6">Join Our Team</h2>
              <p className="text-gray-600 mb-8">
                We're always looking for passionate individuals to join our team. If you love water adventures and creating memorable experiences for others, we'd love to hear from you.
              </p>
              <Button className="bg-aqua-600 hover:bg-aqua-700 text-white">
                View Open Positions
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <MotionWrapper>
            <SectionTitle 
              subtitle="Frequently Asked Questions"
              title="Common Questions About AquaVenture"
            />
          </MotionWrapper>
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <MotionWrapper delay={0.2}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">What makes AquaVenture different from other water parks?</h3>
                <p className="text-gray-600">
                  AquaVenture combines traditional water park elements with unique aquatic experiences you won't find elsewhere. Our focus on both thrilling adventures and relaxation spaces, coupled with our commitment to safety and sustainability, creates a distinctive and memorable experience.
                </p>
              </div>
            </MotionWrapper>
            
            <MotionWrapper delay={0.3}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">What safety measures do you have in place?</h3>
                <p className="text-gray-600">
                  Safety is our top priority. We maintain a high ratio of certified lifeguards to visitors, conduct regular equipment inspections, provide clear safety instructions for all attractions, and have a dedicated medical team on-site. All our staff undergo comprehensive safety training.
                </p>
              </div>
            </MotionWrapper>
            
            <MotionWrapper delay={0.4}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Are there attractions suitable for all ages?</h3>
                <p className="text-gray-600">
                  Absolutely! AquaVenture is designed to cater to visitors of all ages. We have dedicated areas for young children with gentle water features, family-friendly attractions for shared enjoyment, and more thrilling experiences for adventure seekers.
                </p>
              </div>
            </MotionWrapper>
            
            <MotionWrapper delay={0.5}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">What sustainability initiatives does AquaVenture implement?</h3>
                <p className="text-gray-600">
                  We're committed to minimizing our environmental impact through water recycling systems, energy-efficient operations, solar power integration, waste reduction programs, and eco-friendly cleaning products. We also participate in local conservation efforts to protect water resources.
                </p>
              </div>
            </MotionWrapper>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Have More Questions? Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
