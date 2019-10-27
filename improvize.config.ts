import { Category, Pricing } from '~/utils/interfaces'

interface CloudHostingPricing {
  shared: Array<Pricing>,
  dedicated: Array<Pricing>
}

interface ImprovizeConfig {
  menu: Array<Category>,
  pricings: {
    lesage: Array<Pricing>,
    inpro: Array<Pricing>,
    'cloud-hosting': CloudHostingPricing
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
        button: true,
        monthly: false
      },
      {
        title: 'registration',
        price: 900,
        button: false,
        monthly: false
      },
      {
        title: 'updates',
        price: 560,
        button: false,
        monthly: false
      }
    ],
    inpro: [
      {
        title: 'license',
        price: 5000,
        button: true,
        monthly: false
      },
      {
        title: 'young',
        price: 3500,
        button: true,
        monthly: false
      },
      {
        title: 'updates',
        price: 560,
        button: false,
        monthly: false
      }
    ],
    'cloud-hosting': {
      shared: [
        {
          title: 'one',
          price: 30,
          button: false,
          monthly: true
        },
        {
          title: 'two',
          price: 50,
          button: false,
          monthly: true
        }
      ],
      dedicated: [
        {
          title: 'standard',
          price: 120,
          button: false,
          monthly: true
        },
        {
          title: 'premium',
          price: 200,
          button: false,
          monthly: true
        },
        {
          title: 'deluxe',
          price: 300,
          button: false,
          monthly: true
        }
      ]
    }
  }
}

export default config
