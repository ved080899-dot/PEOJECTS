import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ChevronLeft, CreditCard, Landmark, MapPin, Wallet } from 'lucide-react';
import { deliveryAddress, orderConfirmationDetails, orderItem } from '../data/order';

const paymentOptions = [
  {
    id: 'upi',
    label: 'UPI',
    icon: Wallet,
    badge: 'Recommended',
  },
  {
    id: 'card',
    label: 'Credit / Debit Card',
    icon: CreditCard,
  },
  {
    id: 'netbanking',
    label: 'Net Banking',
    icon: Landmark,
  },
];

export default function HighRiskCheckout() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('upi');
  const [promoCode, setPromoCode] = useState('');

  const subtotal = orderItem.price;
  const delivery = 0;
  const discount = 120;
  const total = subtotal + delivery - discount;

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col pb-28">
        <header className="sticky top-0 z-10 border-b border-gray-200 bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            <Link to="/address" className="rounded-full p-1 -ml-1 transition-colors hover:bg-gray-100">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-gray-500">Snitch</div>
              <h1 className="text-xl font-semibold tracking-tight">Checkout</h1>
            </div>
          </div>
        </header>

        <main className="flex-1 space-y-4 px-4 py-4">
          <section className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm shadow-gray-100/80">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Order Summary</h2>
              <span className="text-sm font-semibold text-black">Rs {orderItem.price}</span>
            </div>
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
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Delivery Address</h2>
              <Link to="/address" className="text-sm font-semibold text-black underline underline-offset-4">Edit</Link>
            </div>
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
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Estimated Delivery Date</h2>
            <div className="mt-4 inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 ring-1 ring-green-200">{orderConfirmationDetails.expectedDelivery.replace('Expected by ', 'Arriving by ')}</div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm shadow-gray-100/80">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Payment Options</h2>
            <div className="space-y-3">
              {paymentOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = selectedPayment === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedPayment(option.id)}
                    className={isSelected ? 'w-full rounded-2xl border border-black bg-black/[0.03] p-4 text-left transition-colors' : 'w-full rounded-2xl border border-gray-200 p-4 text-left transition-colors hover:border-gray-300'}
                  >
                    <div className="flex items-start gap-3">
                      <div className={isSelected ? 'rounded-full bg-black p-2 text-white' : 'rounded-full bg-gray-100 p-2 text-gray-700'}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-black">{option.label}</span>
                          {option.badge && <span className="rounded-full bg-gray-900 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">{option.badge}</span>}
                        </div>
                      </div>
                      <div className={isSelected ? 'mt-1 h-5 w-5 rounded-full border border-black bg-black shadow-[inset_0_0_0_4px_white]' : 'mt-1 h-5 w-5 rounded-full border border-gray-300 bg-white'} />
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm shadow-gray-100/80">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Promo Code</h2>
            <div className="flex gap-3">
              <input
                type="text"
                value={promoCode}
                onChange={(event) => setPromoCode(event.target.value)}
                placeholder="Enter promo code"
                className="min-w-0 flex-1 rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
              />
              <button className="rounded-2xl border border-black px-4 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white">Apply</button>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm shadow-gray-100/80">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Amount Details</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-between"><span>Subtotal</span><span className="font-medium text-black">Rs {subtotal}</span></div>
              <div className="flex items-center justify-between"><span>Delivery</span><span className="font-medium text-green-600">Free</span></div>
              <div className="flex items-center justify-between"><span>Promo discount</span><span className="font-medium text-green-600">- Rs {discount}</span></div>
              <div className="border-t border-dashed border-gray-200 pt-3">
                <div className="flex items-center justify-between text-base"><span className="font-semibold text-black">Total</span><span className="font-semibold text-black">Rs {total}</span></div>
              </div>
            </div>
          </section>
        </main>

        <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white/95 px-4 py-4 backdrop-blur">
          <div className="mx-auto flex w-full max-w-md items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Payable now</p>
              <p className="text-xl font-semibold text-black">Rs {total}</p>
            </div>
            <button
              onClick={() => navigate('/order-confirmation')}
              className="rounded-2xl bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-900"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

