import { Category, Pricing } from '~/utils/interfaces'

interface ImprovizeConfig {
  menu: Array<Category>,
  lesagePricing: Array<Pricing>
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
      price: 900
    },
    {
      title: 'updates',
      price: 560
    }
  ]
}

export default config
