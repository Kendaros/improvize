import { Category, Pricing } from '~/utils/interfaces'

interface ImprovizeConfig {
  menu: Array<Category>,
  lesagePricing: Array<Pricing>,
  inproPricing: Array<Pricing>
}

const config: ImprovizeConfig = {
  menu: [
    {
      title: 'products',
      links: ['lesage', 'inpro']
    },
    {
      title: 'services',
      links: ['cloud-hosting', 'support', 'training']
    },
    {
      title: 'resources',
      links: ['documentation', 'issue-tracking', 'versioning']
    },
    {
      title: 'about',
      links: ['who-we-are', 'clients']
    }
  ],
  lesagePricing: [
    {
      title: 'license',
      price: 5000,
      button: true
    },
    {
      title: 'registration',
      price: 900,
      button: false
    },
    {
      title: 'updates',
      price: 560,
      button: false
    }
  ],
  inproPricing: [
    {
      title: 'license',
      price: 5000,
      button: true
    },
    {
      title: 'registration',
      price: 900,
      button: false
    }
  ]
}

export default config
