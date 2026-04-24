import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatCurrency, getCartSubtotal } from "@/lib/cart";

export function Cart() {
  const { cartItems, cartCount, removeItem, clearCart } = useCart();
  const subtotal = getCartSubtotal(cartItems);

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-gutter py-margin flex flex-col gap-gutter">
      <section className="rack-unit rounded-xl p-panel-padding space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="font-sans text-label-sm uppercase tracking-widest text-outline">Cart</p>
            <h1 className="font-grotesk text-headline-xl text-on-background">Your Cart</h1>
            <p className="font-sans text-body-md text-on-surface-variant">
              Stripe checkout is coming next. For now, this cart keeps the correct color variant ready.
            </p>
          </div>
          <div className="digital-readout bg-surface-container-lowest p-4 rounded border border-outline-variant min-w-48">
            <div className="flex items-center justify-between gap-4">
              <span className="font-sans text-label-sm text-outline uppercase tracking-widest">Items</span>
              <span className="font-sans text-technical-data text-primary text-2xl">{cartCount}</span>
            </div>
            <div className="mt-2 flex items-center justify-between gap-4">
              <span className="font-sans text-label-sm text-outline uppercase tracking-widest">Subtotal</span>
              <span className="font-sans text-technical-data text-primary text-2xl">{formatCurrency(subtotal)}</span>
            </div>
          </div>
        </div>
      </section>

      {cartItems.length === 0 ? (
        <section className="rack-unit rounded-xl p-panel-padding space-y-4">
          <div className="flex items-center gap-3 text-on-surface-variant">
            <ShoppingCart size={22} />
            <h2 className="font-grotesk text-headline-lg text-on-surface">Your cart is empty</h2>
          </div>
          <p className="font-sans text-body-md text-on-surface-variant">
            Head back to the shop, choose a color, and the correct variant will be added here.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 tactile-button-primary px-5 py-3 rounded-lg font-sans text-label-sm text-on-primary uppercase tracking-widest"
          >
            Back to Shop
            <ArrowRight size={16} />
          </Link>
        </section>
      ) : (
        <section className="space-y-stack-gap">
          {cartItems.map((item) => (
            <article key={item.id} className="rack-unit rounded-xl p-panel-padding flex flex-col gap-5 md:flex-row md:items-center">
              <img
                src={item.imageSrc}
                alt={`${item.productName} ${item.colorName}`}
                className="h-40 w-full rounded-lg object-cover bg-surface-container md:h-28 md:w-28"
              />
              <div className="flex-1 space-y-2">
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="font-grotesk text-headline-lg text-on-surface">{item.productName}</h2>
                    <p className="font-sans text-body-md text-on-surface-variant">Color: {item.colorName}</p>
                  </div>
                  <div className="font-sans text-body-md text-on-surface-variant md:text-right">
                    <p>{formatCurrency(item.unitPrice)} each</p>
                    <p>Qty {item.quantity}</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="inline-flex items-center gap-2 rounded-lg border border-outline-variant px-4 py-3 font-sans text-label-sm uppercase tracking-widest text-white/80 transition-colors hover:border-primary hover:text-primary"
              >
                <Trash2 size={16} />
                Remove
              </button>
            </article>
          ))}

          <section className="rack-unit rounded-xl p-panel-padding space-y-4">
            <div className="flex items-center justify-between border-b border-surface-variant pb-4">
              <h2 className="font-grotesk text-headline-lg text-on-surface">Order Summary</h2>
              <button
                type="button"
                onClick={clearCart}
                className="font-sans text-label-sm uppercase tracking-widest text-outline transition-colors hover:text-white"
              >
                Clear Cart
              </button>
            </div>
            <div className="flex items-center justify-between font-sans text-body-md text-on-surface-variant">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between font-sans text-body-md text-on-surface-variant">
              <span>Stripe</span>
              <span>Not wired up yet</span>
            </div>
            <button
              type="button"
              disabled
              className="tactile-button-primary w-full cursor-not-allowed px-8 py-4 rounded-lg font-sans text-label-sm text-on-primary uppercase tracking-widest opacity-60"
            >
              Checkout with Stripe Soon
            </button>
          </section>
        </section>
      )}
    </main>
  );
}
