import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <img class="img" src="img/404.gif"></img>
      <h1>404!!! cat not found</h1>
    </main>
  );
}
