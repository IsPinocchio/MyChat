import { lazy } from 'react'

interface Router {
  name?: string,
  path: string,
  children?: Array<Router>,
  component: any
}


const router: Array<Router> = [
  {
    path: '/login',
    component: lazy(() => import('../pages/login'))
  },
  {
    path: '/chat',
    component: lazy(() => import('../pages/chat'))
  }
]

export default router

