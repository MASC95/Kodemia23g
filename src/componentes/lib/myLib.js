export const myId = () => {
    let id = [];
    let base = "0123456789ABCDEF";
  
    for (let i = 0; i < 8; i++) {
      let numero = (Math.random() * 15).toFixed(0);
      id.push(base[numero]);
    }
    return id.join("");
  };

  const nodeEnv = 'DEV';

export const backURL = nodeEnv==='PRD'?'https://apiback.jobinder.org/':'http://localhost:4000/';
