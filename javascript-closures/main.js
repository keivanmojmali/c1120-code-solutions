function graduate(credential) {
  return (fullName)=>{
      return `${fullName}, ${credential}`;
  }
}


let medicalSchool = graduate('M.D.');
let lawSchool = graduate('Esq.');

console.log(medicalSchool('keivan'));
console.log(lawSchool('keivan'));
