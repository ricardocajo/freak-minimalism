"use server";

import { revalidatePath } from "next/cache";

export type Product = {
  _id: string;
  category: string;
  quantity: number;
  productId: string;
  image: string[];
  name: string;
  price: number;
  purchased: boolean;
  variantId: string;
  size: string;
};

export async function getItems(): Promise<Product[]> {
  try {
    const cart = JSON.parse(localStorage.getItem('cart') || 'null') || { items: [] };
    return cart.items;
  } catch (error) {
    console.error('Error getting cart items:', error);
    return [];
  }
}

export async function getTotalItems(): Promise<number> {
  try {
    const cart = JSON.parse(localStorage.getItem('cart') || 'null') || { items: [] };
    return cart.items.length;
  } catch (error) {
    console.error('Error getting total items:', error);
    return 0;
  }
}

export async function addItem(product: Product): Promise<void> {
  try {
    const cart = JSON.parse(localStorage.getItem('cart') || 'null') || { items: [] };
    const items = cart.items;
    const existingItem = items.find((item: Product) => item._id === product._id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.push({ ...product, quantity: 1, purchased: false });
    }

    localStorage.setItem('cart', JSON.stringify({ items }));
    revalidatePath('/cart');
  } catch (error) {
    console.error('Error adding item to cart:', error);
  }
}

export async function delItem(product: Product): Promise<void> {
  try {
    const cart = JSON.parse(localStorage.getItem('cart') || 'null') || { items: [] };
    const items = cart.items.filter(
      (item: Product) =>
        item._id !== product._id
    );

    localStorage.setItem('cart', JSON.stringify({ items }));
    revalidatePath('/cart');
  } catch (error) {
    console.error('Error removing item from cart:', error);
  }
}

export async function delOneItem(product: Product): Promise<void> {
  try {
    const cart = JSON.parse(localStorage.getItem('cart') || 'null') || { items: [] };
    const items = cart.items;
    const existingItem = items.find((item: Product) => item._id === product._id);

    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else if (existingItem) {
      items.splice(items.indexOf(existingItem), 1);
    }

    localStorage.setItem('cart', JSON.stringify({ items }));
    revalidatePath('/cart');
  } catch (error) {
    console.error('Error removing one item from cart:', error);
  }
}

export async function emptyCart() {
  try {
    localStorage.removeItem('cart');
    revalidatePath('/cart');
  } catch (error) {
    console.error('Error emptying cart:', error);
  }
}
