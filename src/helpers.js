export function formatPrice(usd) {
  return `$${(usd).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}