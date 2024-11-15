import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            <span className="text-accent">{`{`}</span>
            JorgEdu1
            <span className="text-accent">{`}`}</span>
          </h1>
        </Link>
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  )
}

export default Header
