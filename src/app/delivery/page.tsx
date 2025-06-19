'use client';

export default function DeliveryPage() {
  return (
    <main className="flex flex-col gap-12">
      <h1 className="text-2xl font-bold">Delivery Information</h1>
      <div className="max-w-2xl">
        <p className="text-lg mb-6">
          We offer fast and reliable shipping worldwide. Here's everything you need to know about our delivery process.
        </p>
        <div className="grid gap-6">
          <div className="p-6 border border-solid border-border-primary rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Shipping Options</h2>
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">1</span>
                <div>
                  <h3 className="font-semibold">Standard Shipping</h3>
                  <p className="text-gray-400">5-7 business days</p>
                  <p className="text-gray-400">Free for orders over €50</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">2</span>
                <div>
                  <h3 className="font-semibold">Express Shipping</h3>
                  <p className="text-gray-400">2-3 business days</p>
                  <p className="text-gray-400">€15</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border border-solid border-border-primary rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Shipping Areas</h2>
            <div className="grid gap-4">
              <div>
                <h3 className="font-semibold">Europe</h3>
                <p className="text-gray-400">Standard shipping available</p>
                <p className="text-gray-400">Express shipping available</p>
              </div>
              <div>
                <h3 className="font-semibold">Rest of World</h3>
                <p className="text-gray-400">Standard shipping available</p>
                <p className="text-gray-400">Express shipping available (additional fees may apply)</p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-solid border-border-primary rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Tracking Your Order</h2>
            <p className="text-gray-400">
              Once your order is shipped, you'll receive a tracking number via email. You can track your package using this number on our website or through the carrier's website.
            </p>
          </div>

          <div className="p-6 border border-solid border-border-primary rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Shipping Times</h2>
            <p className="text-gray-400">
              Processing time: 1-2 business days<br />
              Standard shipping: 5-7 business days<br />
              Express shipping: 2-3 business days
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
