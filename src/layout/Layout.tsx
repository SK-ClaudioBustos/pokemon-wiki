import { FilterProvider } from "@context";
import { Footer, Header, Main } from "@layout";

export const Layout = () => {
  return (
    <>
      <FilterProvider>
        <Header />
        <Main />
      </FilterProvider>
      <Footer />
    </>
  );
};
