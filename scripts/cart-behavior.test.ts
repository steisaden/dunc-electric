import assert from "node:assert/strict";
import { buildShopCartItem } from "../src/lib/cart";

const tiger = buildShopCartItem(0);
assert.equal(tiger.colorName, "Tiger Nachos");
assert.equal(tiger.imageSrc, "/shop-images/02-multicolor.webp");

const black = buildShopCartItem(1);
assert.equal(black.colorName, "Origin Black");
assert.equal(black.imageSrc, "/shop-images/04-black.webp");

const purple = buildShopCartItem(2);
assert.equal(purple.colorName, "Sabbath purple");
assert.equal(purple.imageSrc, "/shop-images/03-purple.webp");

console.log("cart behavior assertions passed");
