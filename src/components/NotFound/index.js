// Write your code her
import Header from '../Header'
import {
  NotFoundContainer,
  NotFoundContentContainer,
  NotFoundResponsiveContainer,
  Image,
  Heading,
  Description,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <Header />
    <NotFoundContentContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
        alt="not found"
      />
      <Heading>Lost Your Way</Heading>
      <Description>
        Sorry, We cannot find that page. You will find lot to explore in the
        home Page
      </Description>
    </NotFoundContentContainer>
  </NotFoundContainer>
)
export default NotFound
