export interface Category {
  title: string,
  links: Array<string>
}

export interface Pricing {
  title: string,
  price: number,
  frequency: string,
  button: boolean
}

export interface HourlyPricing {
  hours: number,
  price: number
}
