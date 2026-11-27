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
