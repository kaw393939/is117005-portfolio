import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ResearchHome from './components/ResearchHome.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'home-hero-before': () => h(ResearchHome)
  })
}
