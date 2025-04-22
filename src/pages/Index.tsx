import React from 'react';
import { Bath, Utensils, Wifi, MapPin, Bed, Users, Wine, Coffee, Footprints, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import RoomCard from '@/components/RoomCard';
import SectionTitle from '@/components/SectionTitle';
import AmenityCard from '@/components/AmenityCard';
import GalleryImage from '@/components/GalleryImage';
import Footer from '@/components/Footer';

const Index = () => {
  const rooms = [
    {
      name: 'Luxury Suite',
      description: 'Our spacious luxury suite offers panoramic views of the mountains and a private balcony for ultimate relaxation.',
      price: '$450',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80',
      features: ['King Bed', 'Private Balcony', 'Mountain View', 'Jacuzzi Bath', 'Mini Bar', 'Room Service']
    },
    {
      name: 'Garden Villa',
      description: 'Nestled among tropical gardens, our garden villa provides a serene retreat with indoor-outdoor living spaces.',
      price: '$650',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      features: ['King Bed', 'Private Garden', 'Plunge Pool', 'Outdoor Shower', 'Kitchenette', 'Patio']
    },
    {
      name: 'Forest Cabin',
      description: 'Experience the magic of the forest in our rustic-luxe cabin with floor-to-ceiling windows and cozy fireplace.',
      price: '$350',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80',
      features: ['Queen Bed', 'Fireplace', 'Forest View', 'Soaking Tub', 'Deck', 'Heated Floors']
    }
  ];

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80', alt: 'Ocean View' },
    { src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80', alt: 'Forest Wildlife' },
    { src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80', alt: 'Riverside Calm' },
    { src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80', alt: 'Lush Gardens' },
    { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', alt: 'Private Villas' },
    { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', alt: 'Sunset Deck' },
  ];

  return (
    <>
      <Navbar />
      <WhatsAppButton text="Book Now" floating={true} />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80"
            alt="Luxury Beach Resort" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-resort-dark/30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center z-10">
          <div className="max-w-2xl animate-fade-in">
            <h2 className="text-white font-serif text-4xl md:text-6xl font-light mb-4 text-shadow">
              Escape. Relax. <span className="font-medium">Reconnect.</span>
            </h2>
            <p className="text-white text-xl md:text-2xl mb-8 text-shadow">
              A luxurious hideaway nestled in nature's embrace
            </p>
            <WhatsAppButton text="Book Your Stay" className="text-lg" />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-resort-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Sanctuary" 
                subtitle="Discover the untouched beauty of Kolol Resort - where luxury meets nature in perfect harmony."
                centered={false}
              />
              <p className="text-resort-brown mb-6">
                Nestled in the heart of pristine wilderness, Kolol Resort offers an unparalleled retreat for those seeking to escape the ordinary. Our exclusive sanctuary is designed to immerse you in nature's splendor while indulging in world-class comfort and service.
              </p>
              <p className="text-resort-brown mb-6">
                Each aspect of our resort has been thoughtfully crafted to blend harmoniously with its natural surroundings. From locally sourced materials to eco-friendly practices, we are committed to preserving the beauty that surrounds us.
              </p>
              <p className="text-resort-brown">
                Our dedicated staff ensures that every moment of your stay exceeds expectations, creating memories that will last a lifetime. Whether you're seeking adventure, relaxation, or a bit of both, Kolol Resort is your perfect destination.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80" 
                alt="Lush Gardens" 
                className="rounded-lg shadow-lg object-cover w-full h-64"
              />
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80"
                alt="Tropical Beach" 
                className="rounded-lg shadow-lg object-cover w-full h-64 mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80" 
                alt="River Retreat" 
                className="rounded-lg shadow-lg object-cover w-full h-64 mt-[-20px]"
              />
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80" 
                alt="Forest Wildlife" 
                className="rounded-lg shadow-lg object-cover w-full h-64 mt-[-30px]"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-resort-beige/30">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Rooms & Rates" 
            subtitle="Discover our collection of thoughtfully designed accommodations, each offering a unique experience of comfort and luxury."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <RoomCard
                key={index}
                name={room.name}
                description={room.description}
                price={room.price}
                image={room.image}
                features={room.features}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-resort-brown mb-6">
              All rooms include complimentary breakfast, WiFi, and access to resort amenities.
              Special packages and seasonal rates are available.
            </p>
            <WhatsAppButton text="Inquire About Availability" />
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Experience Kolol" 
            subtitle="Explore our visual journey through the beauty and tranquility of Kolol Resort."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <GalleryImage
                key={index}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-resort-cream">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Resort Amenities" 
            subtitle="Indulge in our extensive range of amenities designed to enhance your stay and create unforgettable experiences."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AmenityCard
              icon={<Bath size={36} />}
              title="Spa & Wellness"
              description="Rejuvenate your body and mind with our range of spa treatments and wellness activities."
            />
            <AmenityCard
              icon={<Utensils size={36} />}
              title="Fine Dining"
              description="Savor exquisite cuisine crafted from locally sourced ingredients at our restaurant."
            />
            <AmenityCard
              icon={<Footprints size={36} />}
              title="Nature Walks"
              description="Explore the stunning landscapes surrounding our resort with guided nature walks."
            />
            <AmenityCard
              icon={<Wifi size={36} />}
              title="Complimentary WiFi"
              description="Stay connected with complimentary high-speed WiFi available throughout the resort."
            />
            <AmenityCard
              icon={<Wine size={36} />}
              title="Wine Tasting"
              description="Discover local and international wines with our expert sommelier in regular tastings."
            />
            <AmenityCard
              icon={<Coffee size={36} />}
              title="Coffee Bar"
              description="Enjoy premium coffees and teas throughout the day in our comfortable lounge."
            />
            <AmenityCard
              icon={<Bed size={36} />}
              title="Luxury Bedding"
              description="Experience ultimate comfort with our premium mattresses and high-thread-count linens."
            />
            <AmenityCard
              icon={<MapPin size={36} />}
              title="Curated Excursions"
              description="Discover local attractions and hidden gems with our curated excursions."
            />
            <AmenityCard
              icon={<Users size={36} />}
              title="Private Events"
              description="Host memorable celebrations and gatherings in our picturesque venues."
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Contact Us" 
            subtitle="We're here to assist you with any inquiries or to help you plan your perfect stay at Kolol Riverside Resort."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-resort-cream p-8 rounded-lg">
                <h3 className="font-serif text-xl font-medium text-resort-dark mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-resort-green mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-resort-dark">Location</h4>
                      <p className="text-resort-brown">Kolol Riverside Resort, Kaptagat Road (B54), Past New KCC, near Two Rivers Falls and Sunview Estate, 10km from Eldoret Town, Eldoret, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-resort-green mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-resort-dark">Phone</h4>
                      <p className="text-resort-brown">+254 712 840 300</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-resort-green mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-resort-dark">Email</h4>
                      <p className="text-resort-brown">kololriversideresort@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <WhatsAppButton text="Chat With Us" className="w-full justify-center" />
                </div>
              </div>
            </div>
            
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7517876760384!2d35.3415353!3d0.472768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1780fda0e24bbb67%3A0x353e21e01c793abb!2sKolol%20Riverside%20Resort!5e0!3m2!1sen!2ske!4v1713529012345!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kolol Riverside Resort Map">
              </iframe>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
