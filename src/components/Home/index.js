import Header from '../Header/index'
import {
  HomeContainer,
  HomeImageContainer,
  MobileHomeImage,
  DesktopHomeImage,
} from './styledComponents'

const Home = () => (
  <HomeContainer>
    <Header />
    <HomeImageContainer>
      <MobileHomeImage
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
      <DesktopHomeImage
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
    </HomeImageContainer>
  </HomeContainer>
)

export default Home
