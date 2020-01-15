import { Category, Pricing, HourlyPricing, CloudHostingPricing, Versions, DocumentationLink } from '~/utils/interfaces'

interface ImprovizeConfig {
  languages: Array<string>,
  email: string
  documentation: Array<DocumentationLink>
  members: Array<string>,
  philosophy: Array<string>,
  menu: Array<Category>,
  versions: Versions,
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
  languages: ['en'], // Possible langs: 'en', 'fr, 'de', 'es'
  email: 'ZW1pbHlAaW1wcm92aXplLmV1',
  documentation: [
    {
      lang: 'en',
      url: 'https://endocs.thefreecat.org'
    },
    {
      lang: 'fr',
      url: 'https://docs.thefreecat.org'
    }
  ],
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
  versions: {
    history: {
      lesage: 'https://thefreecat.org/logiciels/sage-telechargements-v10/',
      inpro: 'https://thefreecat.org/inpro-telechargements-v6/'
    },
    lesage: [
      {
        name: 'Le Sage 10.069b.exe',
        date: '2019-10-16 09:39:43',
        size: '54.54 Mb',
        url: 'https://thefreecat.org/files/lesage/program/v10/Le%20Sage%2010.069b.exe'
      },
      {
        name: 'Le Sage 10.069.exe',
        date: '2019-10-07 18:39:42',
        size: '54.54 Mb',
        url: 'https://thefreecat.org/files/lesage/program/v10/Le%20Sage%2010.069.exe'
      },
      {
        name: 'Le Sage 10.068-64.exe',
        date: '2019-10-04 12:02:06',
        size: '57.4 Mb',
        url: 'https://thefreecat.org/files/lesage/program/v10/Le%20Sage%2010.068-64.exe'
      },
      {
        name: 'Le Sage 10.067b.exe',
        date: '2019-10-02 13:02:33',
        size: '54.52 Mb',
        url: 'https://thefreecat.org/files/lesage/program/v10/Le%20Sage%2010.067b.exe'
      },
      {
        name: 'Le Sage 10.067.exe',
        date: '2019-10-02 08:17:24',
        size: '54.52 Mb',
        url: 'https://thefreecat.org/files/lesage/program/v10/Le%20Sage%2010.067.exe'
      }
    ],
    inpro: [
      {
        name: 'InPro 6.088t.exe',
        date: '2019-10-16 08:00:41',
        size: '29.45 Mb',
        url: 'https://thefreecat.org/files/inpro/program/v6/InPro%206.088t.exe'
      },
      {
        name: 'InPro 6.088s.exe',
        date: '2019-10-10 20:06:02',
        size: '29.45 Mb',
        url: 'https://thefreecat.org/files/inpro/program/v6/InPro%206.088s.exe'
      },
      {
        name: 'InPro 6.088r.exe',
        date: '2019-10-08 17:02:52',
        size: '29.44 Mb',
        url: 'https://thefreecat.org/files/inpro/program/v6/InPro%206.088r.exe'
      },
      {
        name: 'InPro 6.088q.exe',
        date: '2019-10-08 10:42:18',
        size: '29.44 Mb',
        url: 'https://thefreecat.org/files/inpro/program/v6/InPro%206.088q.exe'
      },
      {
        name: 'InPro 6.088p.exe',
        date: '2019-10-07 16:36:44',
        size: '29.44 Mb',
        url: 'https://thefreecat.org/files/inpro/program/v6/InPro%206.088p.exe'
      }
    ]
  },
  pricings: {
    lesage: [
      {
        title: 'license',
        price: 8000,
        frequency: 'onetime',
        button: true
      },
     {
        title: 'singlelicense',
        price: 5000,
        frequency: 'onetime',
        button: true
      },
      {
        title: 'registration',
        price: 1000,
        frequency: 'onetime',
        button: false
      },
      {
        title: 'updates',
        price: 0,
        frequency: 'onetime',
        button: false
      }
    ],
    inpro: [
      {
        title: 'license',
        price: 7000,
        frequency: 'onetime',
        button: true
      },
      {
        title: 'young',
        price: 4500,
        frequency: 'onetime',
        button: true
      },
      {
        title: 'updates',
        price: 1400,
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
