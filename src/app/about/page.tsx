"use client";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          Welcome to Freak Minimalism - Where simplicity meets style. We believe in creating timeless pieces that stand the test of time, focusing on quality over quantity.
        </p>
        <h2>Our Story</h2>
        <p>
          Founded with a passion for minimalist design and sustainable fashion, we aim to provide wardrobe essentials that make you feel confident and comfortable.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Quality Craftsmanship</li>
          <li>Sustainable Practices</li>
          <li>Timeless Design</li>
          <li>Customer Satisfaction</li>
        </ul>
        <h2>Our Mission</h2>
        <p>
          To create a collection of minimalist clothing that allows you to express your personal style while maintaining a clean, sophisticated look.
        </p>
      </div>
    </div>
  );
}
