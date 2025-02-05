import "./styles/App.css";
import DetailsForm from "./Components/DetailsForm";
import EducationalExpForm from "./Components/EcucationalExpForm";
import PracticalExpForm from "./Components/PracticalExpForm";
import PreviewFile from "./Components/PreviewFile";
function App() {
  return (
    <>
      <section id="inputs">
        <DetailsForm />
        <EducationalExpForm />
        <PracticalExpForm />
      </section>
      <section id="preview">
        <PreviewFile />
      </section>
    </>
  );
}

export default App;
