import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Home Component</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, omnis
        dolorem. Illum rem, dolor earum, exercitationem dolores unde in eum
        quidem possimus architecto, voluptates rerum. Dignissimos, quisquam,
        cupiditate consequatur consequuntur quia eos mollitia, voluptatum sint
        amet corrupti non vitae placeat aperiam numquam! Repudiandae, corporis
        ullam. Sit qui reiciendis doloribus corrupti, laborum aliquid cumque
        quos nesciunt blanditiis, eum nihil rem sunt cum delectus explicabo
        atque recusandae voluptates optio repellendus necessitatibus?
        Reprehenderit beatae vero ut nemo excepturi alias dicta, vitae quod,
        non, aspernatur fugit natus quaerat eos suscipit ipsam omnis sint facere
        nobis cumque. Repudiandae modi ex eum reiciendis animi atque libero,
        voluptas voluptatibus odio, officia inventore, laboriosam veritatis
        ipsum adipisci? Quas quam blanditiis tempora iure quae accusantium
        aliquam amet magnam, voluptas enim! Vitae commodi consectetur
        reiciendis, doloremque maiores quos neque quae alias officia nulla,
        aperiam eius eum ut iure quis, optio aspernatur? Deserunt rem ipsum
        doloremque doloribus eius reiciendis a laborum ratione voluptates
        dolorum? Impedit alias unde, officiis cumque magni molestiae nulla porro
        eligendi, cum fugit maxime atque dolor culpa! Doloremque placeat dicta
        repellat ipsa at, distinctio quasi animi. Minus facilis ipsam soluta
        facere quas quidem distinctio ad obcaecati placeat? Voluptates labore
        doloremque nesciunt qui officiis consequatur obcaecati rem suscipit
        ratione.
      </p>

      <Link to="/profile">
        <button>Navigate to Profile Component</button>
      </Link>
    </div>
  );
}

export default Home;
