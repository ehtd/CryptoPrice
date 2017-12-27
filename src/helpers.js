export function formatPrice(price) {
	const usd = Number(price)
  return `$${(usd).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function formatDate(date) {
	const utc = Number(date);
	const d = new Date(0);
	d.setUTCSeconds(utc);
  return d;
}