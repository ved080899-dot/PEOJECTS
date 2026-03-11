import { useState } from 'react';
import { MapPin, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

export default function Address() {
  const navigate = useNavigate();
  const [showPermissionBanner, setShowPermissionBanner] = useState(true);
  const [locationAllowed, setLocationAllowed] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    pincode: '',
    city: '',
    locality: '',
    flatNumber: '',
    buildingName: ''
  });

  const handleAllow = () => {
    setLocationAllowed(true);
    setShowPermissionBanner(false);
    setFormData({
      ...formData,
      pincode: '400001',
      city: 'Mumbai',
      locality: 'Colaba'
    });
  };

  const handleDeny = () => {
    setLocationAllowed(false);
    setShowPermissionBanner(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleProceed = () => {
    if (locationAllowed === true) {
      navigate('/verifying');
      return;
    }

    navigate('/checkout-high-risk');
  };

  const isFormValid = formData.pincode && formData.city && formData.locality && formData.flatNumber;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        <div className="px-5 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Link to="/login" className="p-1 -ml-1">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl">Delivery Address</h1>
          </div>
        </div>

        {showPermissionBanner && (
          <div className="mx-5 mt-5 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="text-sm">Allow Snitch to autofill your location</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAllow}
                className="flex-1 bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
              >
                Allow
              </button>
              <button
                onClick={handleDeny}
                className="flex-1 bg-white text-black py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Deny
              </button>
            </div>
          </div>
        )}

        <div className="flex-1 px-5 py-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">
                Pincode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.pincode}
                onChange={(e) => handleInputChange('pincode', e.target.value)}
                placeholder="Enter pincode"
                disabled={locationAllowed === true}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100 disabled:text-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder="Enter city"
                disabled={locationAllowed === true}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100 disabled:text-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Locality <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.locality}
                onChange={(e) => handleInputChange('locality', e.target.value)}
                placeholder="Enter locality"
                disabled={locationAllowed === true}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100 disabled:text-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Flat / House Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.flatNumber}
                onChange={(e) => handleInputChange('flatNumber', e.target.value)}
                placeholder="Enter flat or house number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Building Name</label>
              <input
                type="text"
                value={formData.buildingName}
                onChange={(e) => handleInputChange('buildingName', e.target.value)}
                placeholder="Enter building name (optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
        </div>

        <div className="px-5 py-4 border-t border-gray-200">
          <button
            disabled={!isFormValid}
            onClick={handleProceed}
            className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
