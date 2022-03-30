const d = 2; // l
const v = 200; // l
const vT = 100; //l

const D = (d / v) * vT; // l

console.log({ d: d + "L/ha", v: v + "L/ha", vT: vT + "L" });
console.log({ D: D + "L" });

const vB = 20; // l
const B = vT / vB; // bombas

console.log({ vB: vB + "L", B: B + "Bombas" });

const mlB = (D / B) * 1000; //ml

console.log({ mlB: mlB + "mL/Bomba" });

const mll = mlB / vB; // ml

console.log({ mll: mll + "mL/L" });

const doselhaId = document.getElementById("doselha");
const volumelhaId = document.getElementById("volumelha");
const volumeId = document.getElementById("volume");
const resultId = document.getElementById("result");

function handlerOnSubmit(event) {
  event?.preventDefault();
  console.log("Formulário enviado");
  calc(doselhaId.value, volumelhaId.value, volumeId.value);
}

function calc(doselha, volumelha, volume) {
  const D = ((doselha / volumelha) * volume).toFixed(1); // l
  const Dml = (D * 1000).toFixed(1); // ml

  resultId.innerHTML = `${D}L | ${Dml}mL de produto/veneno para ${volume}L de água`;

  console.log({ D: D + "L", Dml: Dml + "mL" });
  return { D, Dml };
}
