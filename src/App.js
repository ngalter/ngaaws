import About from './pages/About'
import Banner from './pages/Banner'
import Charities from './pages/Charities'
import Drawer from './pages/Drawer'
import Sponsors from './pages/Sponsors'
import { SuperSEO } from 'react-super-seo'
import ReactGA from 'react-ga';

ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.initialize('UA-54611743-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (<div id={"home"}>
    <SuperSEO
      title="Mercer County Turkey Trot"
      description="Thanksgiving Morning, Thursday, November 24, 2022 5k run and 1 mile walk. Raise money for local charities and food pantries.  Mercer County, West Windsor, New Jersey, NJ."
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