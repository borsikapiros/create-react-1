
import './App.css';
function Ingredients(props) {
  return (
    <>
      <h2>{props.headText}</h2>
      <div className="ingredients">
        <ul>
          <li><em>2 envelopes</em> unflavored gelatine</li>
          <li><em>1/2 cup</em> sugar</li>
          <li><em>1 teaspoon</em> salt</li>
          <li><em>1 can (12 oz)</em> apple juice</li>
          <li><em>1/2 cup</em> lemon juice</li>
          <li><em>2 tablespoons</em> vinegar</li>
          <li><em>1 cup</em> shredded carrot</li>
          <li><em>1 cup</em> sliced celery</li>
          <li><em>1 cup</em> finely shredded cabbage</li>
          <li><em>1/2 cup</em> chopped green pepper</li>
          <li><em>1 can (4 oz)</em> chopped pimiento</li>
        </ul>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">

      <h1>
        Perfection Salad
      </h1>
      <img src="https://vintagerecipecards.files.wordpress.com/2011/05/perfection_salad.jpg?w=768&h=954" alt="Perfection Salad vintage pic"></img>
      <Ingredients headText="Ingredients"></Ingredients>
      <h2>
        Preparation
      </h2>
      <div className="preparation">
        <ol>
          <li>
            In small saucepan, combine <strong>gelatine, sugar, and salt</strong>; mix well.
            </li>
          <li>
            Add 1 cup <strong>water</strong>.<br />
                Heat over low heat, stirring constantly, until <strong>sugar and gelatine</strong> are dissolved.<br />
                Remove from heat.
            </li>
          <li>
            Stir in <strong>apple juice, lemon juice, vinegar</strong>, and 1/4 cup cold <strong>water</strong>. <br />
                Pour into medium bowl. <br />
                Refrigerate 1 hour, or until mixture is consistency of unbeaten egg white.
            </li>
          <li>
            Add <strong>carrot, celery, cabbage, green pepper, and pimiento</strong>; stir until well combined.
            </li>
          <li>
            Turn into decorative, 1 1/2-quart mold. <br />
                Refrigerate 4 hours, or until firm.
            </li>
          <li>
            To unmold: Run small spatula around edge of mold; invert onto serving plate. <br />
                Place hot dishcloth over mold; shake gently to release. <br />
                Repeat, if necessary. <br />
                Lift off mold. <br />
                Refrigerate until ready to serve. <br />
                Makes 8 servings.<br />
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
