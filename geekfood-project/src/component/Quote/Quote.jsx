import style from "./css.style.module.css";

function Quote() {
  const fullPara = [
    {
      para: "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",

      authorName: "Adam Scott",
    },

    {
      para: "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",

      authorName: "Adelle Davis",
    },

    {
      para: "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",

      authorName: "Adelle Davis",
    },

    {
      para: "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",

      authorName: "Albert Einstein",
    },

    {
      para: "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",

      authorName: "Alice May Brock",
    },

    {
      para: "Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, Your fatness is an affront to me, so we have the right to treat you as offensively as you appear. Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.",

      authorName: "Anthelme Brillat-Savarin",
    },

    {
      para: "Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.",

      authorName: "Calvin Trillin",
    },

    {
      para: "Tell me what you eat, and I will tell you what you are.",

      authorName: "Cyra McFadden",
    },

    {
      para: "Health food makes me sick.",
      authorName: "Eike von Repkow",
    },
  ];

  return (
    <div>
      <div className={style.wrapper} >
        {fullPara.map(({ para, authorName }, index) => (
          <div key={index} className={style.box}>
            <div style={{border: '1px solid black', backgroundColor: "#19212c", padding: "30px", color: "white", fontSize: "x-large" }}>
              <p>{para}</p>
              <span style={{ display: "flex", textAlign: "center", backgroundColor: "green"}}>{authorName}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quote;
