import Card from "./components/Card";
import Counter from "./components/Counter";

const sports = [
  {
    id: 1,
    title: "Football",
    description: "Best game ever",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg"
  },
  {
    id: 2,
    title: "Cricket",
    description: "Best game is the cricket",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg"
  },
  {
    id: 3,
    title: "Table Tennis",
    description: "Best game ever for two players",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg"
  },
  {
    id: 4,
    title: "Volley Ball",
    description: "Best game of America",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg"
  },
  {
    id: 5,
    title: "Hockey",
    description: "Good game ever",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg"
  },
]

function App() {
  const message = "Alhamdulillah, this is our first react app!!!";
  const h1 = <h1>{message}</h1>

  const loggedIn = true;

  return (
    <>
    <div>
      {loggedIn ? <h1>You are awesome!!!</h1> : <h3>You are a great liar, I don't believe you...</h3>}
      {h1}
      {sports.map(function (sport) {
        return <Card key={sport.id} title={sport.title} description={sport.description} imageUrl={sport.imageUrl} />
      })}
      {/* <Card title="Football" description="Best game" imageUrl="https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg" />
      <Card title="Cricket" description="Cricket is interesting for bowler and batsman" imageUrl="https://resources.pulse.icc-cricket.com/photo-resources/2023/01/27/564ed04a-192f-44e3-a266-3472047bd2d7/Babar-Azam-Pull-Shot.png?width=500&height=500" /> */}
    </div>
    <h3>Counter</h3>
    <Counter />
    <br />
    <br />
    <br />
    <br />
    <br />
    </>
  );
}

export default App;
