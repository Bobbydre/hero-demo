import './globals.css'

export const metadata = {
  title: 'Demo',
  description: 'Refine studio hero demo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
