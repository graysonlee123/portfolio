import Layout from './Layout'

export default function MdxLayout({ metadata, children }: { children: React.ReactNode }) {
  console.log(metadata)

  return <Layout>{children}</Layout>
}
