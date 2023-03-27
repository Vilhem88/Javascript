export let cars = [
    {
        brand: 'Honda', 
        model: 'Accord',
        price: 10000
    },
    {
        brand: 'Mazda', 
        model: '6 ZoomZoom',
        price: 6500
    },
    {
        brand: 'Toyota', 
        model: 'C-HR',
        price: 7300
    },
    {
        brand: 'Suzuki', 
        model: 'Marutti',
        price: 12700
    }
]

export function calculateBasicPrice(price) {
    // DDV 18%
    return price + (price * 0.18)
}