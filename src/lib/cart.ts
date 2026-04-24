import { assetPath } from "@/lib/asset";

export type ShopColorIndex = 0 | 1 | 2;

export type ShopColorOption = {
  label: string;
  imageIndex: number;
};

export type CartItem = {
  id: string;
  productId: string;
  productName: string;
  colorName: string;
  imageSrc: string;
  unitPrice: number;
  quantity: number;
};

const PRODUCT_ID = "electrified-chanter-stock";
const PRODUCT_NAME = "Electrified Chanter Stock";
const PRODUCT_PRICE = 419;

export const shopImageVariants = [
  assetPath("shop-images/01-colorwave.jpg"),
  assetPath("shop-images/02-multicolor.webp"),
  assetPath("shop-images/03-purple.webp"),
  assetPath("shop-images/04-black.webp")
] as const;

export const shopColorOptions = [
  { label: "Tiger Nachos", imageIndex: 1 },
  { label: "Origin Black", imageIndex: 3 },
  { label: "Sabbath purple", imageIndex: 2 }
] as const satisfies readonly ShopColorOption[];

export function buildShopCartItem(selectedColorIndex: ShopColorIndex, quantity = 1): CartItem {
  const option = shopColorOptions[selectedColorIndex];
  return {
    id: `${PRODUCT_ID}:${selectedColorIndex}`,
    productId: PRODUCT_ID,
    productName: PRODUCT_NAME,
    colorName: option.label,
    imageSrc: shopImageVariants[option.imageIndex],
    unitPrice: PRODUCT_PRICE,
    quantity
  };
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(amount);
}

export function getCartSubtotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}
