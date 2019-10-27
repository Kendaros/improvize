import { Category, Pricing, HourlyPricing } from '~/utils/interfaces'

interface CloudHostingPricing {
  shared: Array<Pricing>,
  dedicated: Array<Pricing>
}

interface ImprovizeConfig {
  members: Array<string>,
  philosophy: Array<string>,
  menu: Array<Category>,
  pricings: {
    lesage: Array<Pricing>,
    inpro: Array<Pricing>,
    'cloud-hosting': CloudHostingPricing,
    training: Array<Pricing>,
    support: Array<HourlyPricing>
  },
  clients: Array<string>
}

const config: ImprovizeConfig = {
  members: ['jcboggio', 'elouyot'],
  philosophy: ['methods', 'cooperation', 'here'],
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
    ],
    support: [
      {
        hours: 2,
        price: 150
      },
      {
        hours: 12,
        price: 810
      },
      {
        hours: 18,
        price: 1215
      },
      {
        hours: 30,
        price: 1912.50
      },
      {
        hours: 36,
        price: 2160
      },
      {
        hours: 48,
        price: 2700
      },
      {
        hours: 72,
        price: 3780
      },
      {
        hours: -1,
        price: 4500
      }
    ]
  },
  clients: ['22D', 'abpm', 'abribulles', 'absilone', 'alondraMusic', 'alterk', 'audioNetwork', 'budde', 'choke', 'citizenRec', 'cymba', 'echoOrange', 'encoreMerci', 'fingerprints', 'frenchfried', 'glm', 'hamburgerRecords', 'idol', 'joco', 'kitsune', 'melmax', 'metisse', 'musigamy', 'myMajorCompany', 'noformat', 'otodayo', 'outhere', 'peermusic', 'play2', 'royalFlame', 'royMusic', 'sakifo', 'sentinel', 'SNH', 'sutherkane', 'tanitrak', 'teddysound', 'unemusique', 'uptonpark', 'velvetica', 'wtpl', 'zaine']
}

export default config
