interface OrderSummaryProps {
  subtotal: number;
  deliveryFee: number;
  total: number;
}

export function OrderSummary({ subtotal, deliveryFee, total }: OrderSummaryProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
      <h2 className="font-medium mb-3">Order Summary</h2>
      
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Subtotal</span>
        <span>₹{subtotal}</span>
      </div>
      
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Delivery Fee</span>
        <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
      </div>
      
      <div className="border-t border-gray-300 pt-3 flex justify-between font-medium">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
    </div>
  );
}
