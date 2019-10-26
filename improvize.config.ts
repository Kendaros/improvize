import { Category } from '~/utils/interfaces'

interface ImprovizeConfig {
  menu: Array<Category>
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
  ]
}

export default config
