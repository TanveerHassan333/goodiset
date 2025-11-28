// stores/cartStore.ts
import { defineStore } from "pinia";

export interface CartItem {
  id: string;
  name: string;
  price: number;     // must be number
  quantity: number;  // must be number
  image: string;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    total: (state): number =>
      state.items.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0),
    itemCount: (state): number =>
      state.items.reduce((sum, item) => sum + Number(item.quantity), 0),
  },
  actions: {
    addToCart(item: CartItem) {
      const existingItem = this.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += Number(item.quantity);
      } else {
        this.items.push({ ...item, quantity: Number(item.quantity), price: Number(item.price) });
      }
    },
    removeFromCart(id: string) {
      this.items = this.items.filter((i) => i.id !== id);
    },
    updateQuantity(id: string, quantity: number) {
      const item = this.items.find((i) => i.id === id);
      if (item) item.quantity = Math.max(1, Number(quantity));
    },
    clearCart() {
      this.items = [];
    },
  },
});
