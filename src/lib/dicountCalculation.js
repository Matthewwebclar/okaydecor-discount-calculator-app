export const calculateSaving = (price, discount) => {
    return price * (discount / 100)
}


export const calculateSalePrice = (price, saving) => {
    return price - saving
}
