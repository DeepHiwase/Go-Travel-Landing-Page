import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// fetching data from remote db, caching data on client (no unecessary req to db), retries if req to db fails, it 3 times by default in react query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
