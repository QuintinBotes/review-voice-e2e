import test from 'node:test';
import assert from 'node:assert/strict';
import { subtotal, applyDiscount, pageOf } from '../src/cart.js';

test('subtotal sums price times quantity', () => {
  assert.equal(subtotal([{ price: 250, quantity: 2 }, { price: 100, quantity: 1 }]), 600);
});
test('applyDiscount rounds to whole cents', () => {
  assert.equal(applyDiscount(999, 10), 899);
});
test('pageOf returns one page', () => {
  assert.deepEqual(pageOf([1, 2, 3, 4, 5], 1, 2), [3, 4]);
});
import { applyCoupon, removeItem, averageUnitPrice } from '../src/cart.js';

test('applyCoupon applies a live coupon', () => {
  assert.equal(applyCoupon(1000, { code: 'X', percent: 10, expires: '2999-01-01' }), 900);
});
test('removeItem removes by id', () => {
  assert.deepEqual(removeItem([{ id: 1 }, { id: 2 }], 1), [{ id: 2 }]);
});
test('averageUnitPrice', () => {
  assert.equal(averageUnitPrice([{ price: 100, quantity: 2 }, { price: 400, quantity: 1 }]), 200);
});
