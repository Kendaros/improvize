import { Category, Pricing } from '~/utils/interfaces'

interface ImprovizeConfig {
  menu: Array<Category>,
  pricings: {
    lesage: Array<Pricing>,
    inpro: Array<Pricing>
  }
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
  pricings: {
    lesage: [
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
    inpro: [
      {
        title: 'license',
        price: 5000,
        button: true
      },
      {
        title: 'young',
        price: 3500,
        button: true
      },
      {
        title: 'updates',
        price: 560,
        button: false
      }
    ]
  }
}

export default config
