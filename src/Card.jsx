import Object1 from "../src/Object1";

let card = (_) => {
  let arrGuys = Object1.map((pessoa) => {
    return (
      <div>
        {pessoa.id}) nome: {pessoa.nome} idade: {pessoa.idade}
      </div>
    );
  });

  return arrGuys;
};

export default card;
