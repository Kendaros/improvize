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
    'cloud-hosting': CloudHostingPricing,
    training: Array<Pricing>
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
        frequency: 'onetime',
        button: true
      },
      {
        title: 'registration',
        price: 900,
        frequency: 'onetime',
        button: false
      },
      {
        title: 'updates',
        price: 560,
        frequency: 'onetime',
        button: false
      }
    ],
    inpro: [
      {
        title: 'license',
        price: 5000,
        frequency: 'onetime',
        button: true
      },
      {
        title: 'young',
        price: 3500,
        frequency: 'onetime',
        button: true
      },
      {
        title: 'updates',
        price: 560,
        frequency: 'onetime',
        button: false
      }
    ],
    'cloud-hosting': {
      shared: [
        {
          title: 'one',
          price: 30,
          frequency: 'monthly',
          button: false
        },
        {
          title: 'two',
          price: 50,
          frequency: 'monthly',
          button: false
        }
      ],
      dedicated: [
        {
          title: 'standard',
          price: 120,
          frequency: 'monthly',
          button: false
        },
        {
          title: 'premium',
          price: 200,
          frequency: 'monthly',
          button: false
        },
        {
          title: 'deluxe',
          price: 300,
          frequency: 'monthly',
          button: false
        }
      ]
    },
    training: [
      {
        title: 'days',
        price: 600,
        frequency: 'daily',
        button: false
      },
      {
        title: 'workshop',
        price: 150,
        frequency: 'daily',
        button: false
      }
    ]
  }
}

export default config
