import Container from "./components/Container";
import Header from "./components/Header";
import Content from "./components/Content";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <div className="first-col">
          <Experiences />
        </div>
        <div className="second-col">
          <Contact />
          <Skills />
          <Education />
        </div>
      </Content>
    </Container >
  );
}

export default App;
