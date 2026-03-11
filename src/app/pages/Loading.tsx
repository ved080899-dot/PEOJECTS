import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      navigate('/checkout');
    }, 1500);

    return () => window.clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pt-8">
        <div className="flex justify-center">
          <div className="text-lg font-semibold tracking-[0.28em] text-black">
            SNITCH
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center -mt-12">
          <div
            className="h-10 w-10 animate-spin rounded-full border-2 border-gray-200 border-t-black"
            aria-label="Verifying your details"
          />
          <p className="mt-6 text-sm text-gray-500">Verifying your details...</p>
        </div>
      </div>
    </div>
  );
}
