import {
    NavBar,
    Home,
    About,
    Menu,
    Chief,
    Video,
    Awards,
    Galleries,
    FindUs,
    Subscribe,
    Footer
} from './sections'

function App() {

  return (
    <section className='bg-site font-sans'>
      <NavBar />
      <Home />
      <About />
      <Menu />
      <Chief />
      <Video />
      <Awards />
      <Galleries />
      <FindUs />
      <Subscribe />
      <Footer />
    </section>
  )
}

export default App
