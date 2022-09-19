export function formatPrice (cents) {
  return cents.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR'
  })
}

export function veg (isVeg) {
  if (isVeg == true) {
    return 'Veg'
  } else {
    return 'Veg'
  }
}
