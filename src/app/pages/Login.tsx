import { useState } from 'react';
import { X } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Login() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    if (mobileNumber.length === 10) {
      setOtpSent(true);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerifyLogin = () => {
    // Navigate to address page after verification
    navigate('/address');
  };

  const handleGoogleLogin = () => {
    // Navigate to address page after Google login
    navigate('/address');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-5">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Image */}
          <div className="bg-black h-64">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1768696082704-c4e5593d9f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmYXNoaW9uJTIwbW9kZWxzJTIwc3R1ZGlvfGVufDF8fHx8MTc3MzI1MDA5MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Snitch Fashion"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Login Form */}
          <div className="p-6 relative">
            <Link to="/" className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </Link>

            <h2 className="text-xl mb-2">LOGIN OR SIGNUP</h2>
            <p className="text-sm text-gray-600 mb-6">Unlock coupons, profile and much more</p>

            {!otpSent ? (
              <>
                {/* Mobile Number Input */}
                <div className="mb-4">
                  <div className="flex gap-2">
                    <div className="w-16 px-3 py-3 border border-gray-300 rounded-lg text-center">
                      +91
                    </div>
                    <input
                      type="tel"
                      maxLength={10}
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                      placeholder="Mobile Number"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                {/* Send OTP Button */}
                <button
                  onClick={handleSendOtp}
                  disabled={mobileNumber.length !== 10}
                  className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed mb-6"
                >
                  SEND OTP
                </button>
              </>
            ) : (
              <>
                {/* OTP Input */}
                <div className="mb-2">
                  <p className="text-sm text-gray-600 mb-3">
                    Enter 4-digit OTP sent to +91 {mobileNumber}
                  </p>
                  <div className="flex gap-3 justify-center mb-4">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-14 h-14 text-center text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                      />
                    ))}
                  </div>
                  <div className="text-center mb-4">
                    <button className="text-sm text-gray-600 hover:text-black">
                      Resend OTP
                    </button>
                  </div>
                </div>

                {/* Verify Button */}
                <button
                  onClick={handleVerifyLogin}
                  disabled={otp.some(digit => !digit)}
                  className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed mb-6"
                >
                  VERIFY & LOGIN
                </button>

                {/* Change Number */}
                <button
                  onClick={() => {
                    setOtpSent(false);
                    setOtp(['', '', '', '']);
                  }}
                  className="w-full text-sm text-gray-600 hover:text-black"
                >
                  Change Mobile Number
                </button>
              </>
            )}

            {/* Divider */}
            {!otpSent && (
              <>
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">OR</span>
                  </div>
                </div>

                {/* Google SSO Button */}
                <button
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-3 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="font-medium">Continue with Google</span>
                </button>

                {/* Terms */}
                <p className="text-xs text-gray-500 text-center mt-6">
                  By continuing, you agree to Snitch's{' '}
                  <a href="#" className="underline">Terms of Service</a> and{' '}
                  <a href="#" className="underline">Privacy Policy</a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}