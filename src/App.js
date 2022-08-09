import About from './pages/About'
import Banner from './pages/Banner'
import Charities from './pages/Charities'
import Drawer from './pages/Drawer'
import Sponsors from './pages/Sponsors'
import { SuperSEO } from 'react-super-seo'

function App() {
  return (<div>
    <SuperSEO
      title="Mercer County Turkey Trot"
      description="Thanksgiving Morning 5k run and 1k walk. Raise money for local charities and food pantries.  Mercer County, West Windsor, NJ."
      lang="en"
      openGraph={{
        ogImage: {
          ogImage: './mcttlogo2022.png',
          ogImageAlt: 'Mercer County Turkey Trot Logo',
          ogImageWidth: 950,
          ogImageHeight: 950,
          ogImageType: 'image/png',
        },
      }} />
  <Drawer />
  <Banner />
  <About />
  <Sponsors />
  <Charities />
   </div>
 )
}

export default App;