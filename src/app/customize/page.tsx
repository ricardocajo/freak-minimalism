'use client';

export default function CustomizePage() {
  return (
    <main className="flex flex-col gap-12">
      <h1 className="text-2xl font-bold">Customize Your Order</h1>
      <div className="max-w-2xl">
        <p className="text-lg mb-6">
          At Freak Minimalism, we understand that every individual is unique. That's why we offer a customization service to ensure you get exactly what you want.
        </p>
        <div className="grid gap-6">
          <div className="p-6 border border-solid border-border-primary rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Personalization Options</h2>
            <ul className="list-disc list-inside text-gray-400">
              <li>Custom text embroidery</li>
              <li>Custom color combinations</li>
              <li>Custom sizing adjustments</li>
              <li>Special requests</li>
            </ul>
          </div>
          <div className="p-6 border border-solid border-border-primary rounded-lg">
            <h2 className="text-xl font-semibold mb-4">How to Customize</h2>
            <ol className="list-decimal list-inside text-gray-400">
              <li>Add the desired product to your cart</li>
              <li>Proceed to checkout</li>
              <li>In the notes section, specify your customization requirements</li>
              <li>Our team will contact you to confirm details</li>
            </ol>
          </div>
          <div className="p-6 border border-solid border-border-primary rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Lead Time</h2>
            <p className="text-gray-400">
              Custom orders take approximately 2-3 weeks to complete. This allows us to ensure the highest quality and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
