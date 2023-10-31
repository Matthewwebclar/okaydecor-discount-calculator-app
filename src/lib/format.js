export function formatNumber(value) {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'GHS', minimumSignificantDigits: 1 }).format(value)
}