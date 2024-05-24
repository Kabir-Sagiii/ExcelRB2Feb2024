import { useRef } from "react";

function UseRefComp() {
  let h1Ref = useRef(); // h1ref = {current : DOMElement}
  let pRef = useRef();

  const changeContent = () => {
    //h1Ref.current = document.getElementById("")

    var btnRef = document.getElementById("btn");
    btnRef.innerText = "Login";

    h1Ref.current.innerText = "Content Got Changed";
    h1Ref.current.style.color = "red";
    pRef.current.style.color = "white";
    pRef.current.style.backgroundColor = "black";
    pRef.current.style.padding = "30px";
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 ref={h1Ref}>useRef Concept</h1>
      <p ref={pRef}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo unde
        assumenda iusto accusamus aperiam non maiores eaque numquam libero
        dolorum tempora, eveniet quod laborum officia expedita quas esse
        tenetur. Esse a quia nemo dolor expedita cumque ipsa placeat tenetur id.
        Commodi possimus magni incidunt quo reprehenderit neque ratione cumque
        facilis unde, fuga ipsam quis deserunt. Sunt voluptatum, sequi tempore
        corporis impedit laboriosam facere esse quae exercitationem, commodi
        modi accusantium in quaerat ex atque ab! Unde nemo voluptatem atque!
        Error maiores labore ullam? Inventore officia accusantium, ut voluptates
        amet doloribus id odio maiores reprehenderit dolore incidunt. Atque,
        delectus sint! Odit, fugiat quae tempore temporibus nobis sequi
        reiciendis assumenda odio illum iste ab dolorum consequatur beatae
        suscipit error distinctio nihil quibusdam excepturi ad impedit totam
        dicta neque! Sit sequi eum esse cum, nostrum, sapiente possimus facilis
        reprehenderit, ut iusto rem fugit minus doloremque. Vero asperiores
        repellat ullam dolor? Beatae ducimus inventore eligendi?
      </p>
      <button id="btn" onClick={changeContent}>
        Change content and Style
      </button>
    </div>
  );
}

export default UseRefComp;
