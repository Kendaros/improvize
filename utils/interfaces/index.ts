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

export interface CloudHostingPricing {
  shared: Array<Pricing>,
  dedicated: Array<Pricing>
}

export interface Downloadable {
  name: string,
  date: string,
  size: string,
  url: string
}

export interface Versions {
  history: VersionsHistory
  lesage: Array<Downloadable>,
  inpro: Array<Downloadable>
}

export interface VersionsHistory {
  lesage: string,
  inpro: string
}
