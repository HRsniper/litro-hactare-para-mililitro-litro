/*
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
*/

const doselhaId = document.getElementById("doselha");
const volumelhaId = document.getElementById("volumelha");
const volumeId = document.getElementById("volume");
const resultId = document.getElementById("result");

function handlerOnSubmit(event) {
  event?.preventDefault();
  console.log("Formulário enviado");
  const Dl = dosageInLiter(doselhaId.value, volumelhaId.value, volumeId.value);
  const Dml = dosageInMilliliter(doselhaId.value, volumelhaId.value, volumeId.value);
  const mll = milliliterPerLiter(Dml, volumeId.value);

  resultId.innerHTML = `${Dl.toFixed(3)}L de agrotóxico para ${volumeId.value}L de água<br/>`;
  resultId.innerHTML += `${Dml.toFixed(1)}mL de agrotóxico para ${volumeId.value}L de água<br/>`;
  resultId.innerHTML += `${mll.toFixed(1)}mL de agrotóxico para 1L de água`;

  alert(`
  ${Dl.toFixed(3)}L de agrotóxico para ${volumeId.value}L de água
  ${Dml.toFixed(1)}mL de agrotóxico para ${volumeId.value}L de água
  ${mll.toFixed(1)}mL de agrotóxico para 1L de água

  ${Dl.toFixed(3)}L/${volumeId.value}L
  ${Dml.toFixed(1)}mL/${volumeId.value}L
  ${mll.toFixed(1)}mL/1L
  `);
}

function dosageInLiter(doselha, volumelha, volumeOfWater) {
  const D = math.evaluate((doselha / volumelha) * volumeOfWater); // l
  console.log({ D: D + "L" });
  return D;
}

function dosageInMilliliter(doselha, volumelha, volumeOfWater) {
  const MULTIPLIES = 1000;
  const D = math.evaluate(((doselha / volumelha) * volumeOfWater) * MULTIPLIES); // ml
  console.log({ D: D + "mL" });
  return D;
}

function milliliterPerLiter(dosageInMilliliter, PumpWaterVolume) {
  const milliliterPerLiter = math.evaluate(dosageInMilliliter / PumpWaterVolume); // ml/l
  console.log({ mll: milliliterPerLiter + "mL/L" });
  return milliliterPerLiter;
}
