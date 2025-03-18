
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Gift, Send, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

const giftCardOptions = [
  { id: 1, amount: 50, image: 'https://images.unsplash.com/photo-1585803114088-cd027272106a?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, amount: 100, image: 'https://images.unsplash.com/photo-1566843972142-a7fcb70de1a5?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, amount: 200, image: 'https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, amount: 500, image: 'https://images.unsplash.com/photo-1539684758241-d6a8e3c07293?q=80&w=2070&auto=format&fit=crop' },
];

const GiftCards = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    message: '',
  });
  const [step, setStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    if (step === 1 && selectedCard === null) {
      toast.error("Please select a gift card amount");
      return;
    }
    
    if (step === 2) {
      const { recipientName, recipientEmail, senderName } = formData;
      if (!recipientName || !recipientEmail || !senderName) {
        toast.error("Please fill all required fields");
        return;
      }
    }
    
    setStep(step + 1);
  };

  const handlePurchase = () => {
    toast.success("Gift card purchased successfully!", {
      description: "An email has been sent with the gift card details."
    });
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <SectionTitle 
          subtitle="Give the Gift of Adventure"
          title="AquaVenture Gift Cards"
          description="Perfect for birthdays, anniversaries, or just because. Give your loved ones the gift of unforgettable aquatic adventures."
        />
        
        <div className="max-w-4xl mx-auto mt-16">
          {/* Step indicator */}
          <div className="flex items-center justify-center mb-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step === i 
                      ? 'bg-aqua-600 text-white' 
                      : step > i 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > i ? <Check size={16} /> : i}
                </div>
                {i < 3 && (
                  <div 
                    className={`w-24 h-1 ${step > i ? 'bg-green-500' : 'bg-gray-200'}`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-2xl font-medium mb-6 text-center">Select a Gift Card Amount</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {giftCardOptions.map((card) => (
                  <div 
                    key={card.id} 
                    className={`
                      cursor-pointer rounded-xl overflow-hidden shadow-md transition-all
                      ${selectedCard === card.id ? 'ring-4 ring-aqua-500 transform scale-[1.02]' : 'hover:shadow-lg'}
                    `}
                    onClick={() => setSelectedCard(card.id)}
                  >
                    <div className="relative h-48">
                      <img 
                        src={card.image} 
                        alt={`$${card.amount} Gift Card`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                        <div className="text-white">
                          <p className="text-lg font-medium">Gift Card</p>
                          <p className="text-3xl font-bold">${card.amount}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <Button 
                  onClick={handleNextStep}
                  className="bg-aqua-600 hover:bg-aqua-700 px-8 py-6 text-lg"
                >
                  Continue
                </Button>
              </div>
            </motion.div>
          )}
          
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-xl mx-auto"
            >
              <h3 className="text-2xl font-medium mb-6 text-center">Recipient Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Recipient's Name*</label>
                  <input
                    type="text"
                    name="recipientName"
                    value={formData.recipientName}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Recipient's Email*</label>
                  <input
                    type="email"
                    name="recipientEmail"
                    value={formData.recipientEmail}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Your Name*</label>
                  <input
                    type="text"
                    name="senderName"
                    value={formData.senderName}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Personal Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500 min-h-[100px]"
                    placeholder="Add a personal message (optional)"
                  />
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <Button 
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="px-6"
                >
                  Back
                </Button>
                <Button 
                  onClick={handleNextStep}
                  className="bg-aqua-600 hover:bg-aqua-700 px-6"
                >
                  Continue to Payment
                </Button>
              </div>
            </motion.div>
          )}
          
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                  <Gift size={40} className="text-aqua-600" />
                </div>
                <h3 className="text-2xl font-medium">Review Your Gift</h3>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-medium">${giftCardOptions.find(c => c.id === selectedCard)?.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Recipient:</span>
                  <span className="font-medium">{formData.recipientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery:</span>
                  <span className="font-medium">Email to {formData.recipientEmail}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">From:</span>
                  <span className="font-medium">{formData.senderName}</span>
                </div>
                {formData.message && (
                  <div className="pt-4 border-t">
                    <span className="text-gray-600 block mb-2">Personal Message:</span>
                    <p className="italic">{formData.message}</p>
                  </div>
                )}
              </div>
              
              <div className="mt-8 flex justify-between">
                <Button 
                  onClick={() => setStep(2)}
                  variant="outline"
                  className="px-6"
                >
                  Back
                </Button>
                <Button 
                  onClick={handlePurchase}
                  className="bg-aqua-600 hover:bg-aqua-700 px-8 flex items-center gap-2"
                >
                  Complete Purchase <Send size={16} />
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GiftCards;
