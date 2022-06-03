import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/components/HelloPatient.vue'
import launch from '@/components/LaunchApp.vue'


const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/launch',
    name: 'fhirAppLauncher',
    component: launch
  }
]

const router = createRouter({ 
  history: createWebHistory(),
  routes
})

export default router