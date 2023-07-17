export const myId = () => {
  let id = [];
  let base = "0123456789ABCDEF";

  for (let i = 0; i < 8; i++) {
    let numero = (Math.random() * 15).toFixed(0);
    id.push(base[numero]);
  }
  return id.join("");
};

const nodeEnv = "DEV";

  export const backURL = nodeEnv==='PRD'?'https://apiback.jobinder.org/':'http://localhost:4000/';
//export const backURL = "http://localhost:4000/";
export const idPhaseOne='6488fc0ecce145783bdc67fa'
export const idPhaseTwo= '6488fc23cce145783bdc67fc'
export const idPhaseTree= '6488fc28cce145783bdc67fe'
export const idPhaseFour= '6488fc31cce145783bdc6800'


