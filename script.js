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
  dosage(doselhaId.value, volumelhaId.value, volumeId.value);
}

function dosage(doselha, volumelha, volume) {
  const dosageInLiter = ((doselha / volumelha) * volume).toFixed(1); // l
  const dosageInMilliliter = (dosageInLiter * 1000).toFixed(1); // ml
  const dosageMilliliterPerLiter = milliliterPerLiter(dosageInMilliliter, volume); // ml/l

  resultId.innerHTML = `${dosageInLiter}L de agrotóxico para ${volume}L de água<br/>`;
  resultId.innerHTML += `${dosageInMilliliter}mL de agrotóxico para ${volume}L de água<br/>`;
  resultId.innerHTML += `${dosageMilliliterPerLiter}mL de agrotóxico por litro de água`;

  console.log({ Dl: dosageInLiter + "L", Dml: dosageInMilliliter + "mL" });
  return { inLiter: dosageInLiter, inMilliliter: dosageInMilliliter };
}

function milliliterPerLiter(dosageInMilliliter, volume) {
  const milliliterPerLiter = (dosageInMilliliter / volume).toFixed(1); // ml/l
  console.log({ mll: milliliterPerLiter + "mL/L" });
  return milliliterPerLiter;
}
