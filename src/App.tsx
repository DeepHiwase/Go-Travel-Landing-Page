// Page
import Page from "./components/Page";

// Header
import Header from "./components/Header";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";

// Main
import Main from "./components/Main";
import Steps from "./components/Steps/Steps";
import Services from "./components/Services/Services";
import News from "./components/News/News";
import ExploreMore from "./components/ExploreMore/ExploreMore";
import FrequentTraveler from "./components/FrequentTraveler";
import Testimonials from "./components/Testimonials/Testimonials";

// Footer
import Footer from "./components/Footer";

const App = () => {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>
      <Main>
        <Steps />
        <Services />
        <News />
        <ExploreMore />
        <FrequentTraveler />
        <Testimonials />
      </Main>

      <Footer />
    </Page>
  );
};

export default App;
