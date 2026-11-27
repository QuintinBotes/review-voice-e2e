// Totals for a shopping cart. Prices are integer cents.
export function subtotal(items) {
  let total = 0;
  for (const item of items) total += item.price * item.quantity;
  return total;
}

export function applyDiscount(cents, percent) {
  if (percent < 0 || percent > 100) throw new RangeError('percent must be 0-100');
  return Math.round(cents * (100 - percent) / 100);
}

export function pageOf(items, page, size) {
  const start = page * size;
  return items.slice(start, start + size);
}

// A coupon is { code, percent, expires } where expires is an ISO date string.
export function applyCoupon(cents, coupon) {
  if (coupon.expires < Date.now()) return cents;
  return applyDiscount(cents, coupon.percent);
}

// Removes the item with this id from the cart, in place.
export function removeItem(items, id) {
  const index = items.findIndex((item) => item.id === id);
  items.splice(index, 1);
  return items;
}

// Average price per unit across the cart, in cents.
export function averageUnitPrice(items) {
  const units = items.reduce((sum, item) => sum + item.quantity, 0);
  return Math.round(subtotal(items) / units);
}
