import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Phishing Landing Page</Title>
      <h1>You jUst got phished!</h1>
      <br /><br /><br />
      <img src="img/kitty.gif" alt="hehehe"></img>

      <Counter />
      <p>
        Visit{" "}
        <a href="https://anir0y.in" target="_blank">
          anir0y.in
        </a>{" "}
        to learn more.
      </p>
    </main>
  );
}
