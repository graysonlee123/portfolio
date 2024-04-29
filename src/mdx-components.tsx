import type { MDXComponents } from 'mdx/types'
import Link from './components/Link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 style={{ color: 'hsl(var(--clr--dark))' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ color: 'hsl(var(--clr--dark))' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ color: 'hsl(var(--clr--dark))' }}>{children}</h3>,
    a: ({ href, ...props }) => <Link href={href} {...props} />,
    ...components,
  }
}
