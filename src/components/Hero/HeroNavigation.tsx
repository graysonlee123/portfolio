import Container from '../Container'
import Logo from '../Logo'

/**
 * A component that renders the navigation bar.
 *
 * @returns Rendered HeroNavigation component.
 */
export default function HeroNavigation() {
  return (
    <Container maxWidth="lg">
      <Logo />
    </Container>
  )
}
