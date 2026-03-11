import { CheckCircle2, MapPin, Wallet } from 'lucide-react';
import { Link } from 'react-router';
import { deliveryAddress, orderConfirmationDetails, orderItem } from '../data/order';

function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5">
      <path
        fill="#25D366"
        d="M16 3C8.82 3 3 8.7 3 15.73c0 2.56.78 4.94 2.11 6.93L3.7 29l6.58-1.72A13.1 13.1 0 0 0 16 28.46c7.18 0 13-5.7 13-12.73S23.18 3 16 3Z"
      />
      <path
        fill="#FFFFFF"
        d="M23.6 19.06c-.31-.16-1.85-.9-2.13-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.2-.18.21-.35.23-.66.08-.31-.16-1.31-.48-2.49-1.52-.92-.8-1.54-1.8-1.72-2.1-.18-.31-.02-.48.13-.64.14-.14.31-.35.47-.53.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.68-1.62-.94-2.22-.25-.6-.5-.51-.68-.52h-.58c-.2 0-.52.08-.79.39-.27.31-1.04 1.01-1.04 2.46 0 1.45 1.07 2.86 1.22 3.06.16.21 2.08 3.3 5.14 4.49.73.31 1.31.49 1.76.62.74.24 1.41.21 1.94.13.59-.09 1.85-.76 2.11-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.6-.37Z"
      />
    </svg>
  );
}

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-6">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-5 rounded-full border border-green-200 bg-green-50 p-4 text-green-600">
            <CheckCircle2 className="h-14 w-14" strokeWidth={1.75} />
          </div>
          <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-gray-500">Snitch</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black">Order Placed Successfully</h1>
          <p className="mt-3 text-sm font-medium text-gray-500">Order ID: {orderConfirmationDetails.id}</p>
        </div>

        <div className="space-y-4">
          <section className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm shadow-gray-100/80">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Product Summary</h2>
            <div className="flex gap-4">
              <img src={orderItem.image} alt={orderItem.name} className="h-24 w-20 rounded-2xl object-cover" />
              <div className="flex flex-1 flex-col justify-between py-1">
                <div>
                  <p className="text-base font-semibold leading-6 text-black">{orderItem.name}</p>
                  <p className="mt-1 text-sm text-gray-500">Size {orderItem.size}</p>
                </div>
                <p className="text-base font-semibold text-black">Rs {orderItem.price}</p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm shadow-gray-100/80">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Delivery Address</h2>
            <div className="flex gap-3">
              <div className="mt-1 rounded-full bg-gray-100 p-2 text-gray-700">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-black">{deliveryAddress.label}</p>
                <p className="mt-1 text-sm leading-6 text-gray-600">{deliveryAddress.line}</p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm shadow-gray-100/80">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Payment Method</h2>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gray-100 p-2 text-gray-700">
                <Wallet className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-black">{orderConfirmationDetails.paymentMethod}</p>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm shadow-gray-100/80">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Expected Delivery</h2>
            <div className="mt-4 inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 ring-1 ring-green-200">
              {orderConfirmationDetails.expectedDelivery}
            </div>
          </section>
        </div>

        <div className="mt-auto pt-6">
          <div className="mb-4 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-gray-800">
            <WhatsAppLogo />
            <p>A confirmation has been sent to your WhatsApp</p>
          </div>
          <Link
            to="/"
            className="block rounded-2xl bg-black px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-gray-900"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
