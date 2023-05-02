const nombreComunes = ['JOSÉ', 'JOSE', 'MARIA', 'MARÍA'];

const palabrasInconvenientes = [
  'BATO',
  'BOFE',
  'BUEI',
  'BUEY',
  'CACA',
  'CACO',
  'CAGA',
  'CAGO',
  'CAKA',
  'CAKO',
  'COGE',
  'COJA',
  'COJE',
  'COJI',
  'RUIN',
  'COJO',
  'CULO',
  'FETO',
  'FOCA',
  'GATA',
  'GATO',
  'GUEI',
  'GUEY',
  'JOTO',
  'KACA',
  'KACO',
  'KAGA',
  'KAGO',
  'KOGR',
  'KOJO',
  'SAPO',
  'KAKA',
  'KULO',
  'LOBA',
  'LOCA',
  'LOCO',
  'LOKA',
  'LOKO',
  'LORA',
  'MALA',
  'MAME',
  'MAMO',
  'MEAR',
  'MEAS',
  'VACA',
  'MEON',
  'MION',
  'MOCO',
  'MULA',
  'PEDA',
  'PEDO',
  'PENE',
  'PUTA',
  'PUTO',
  'QULO',
  'RATA',
  'ROBA',
  'ROBE',
  'ROBO',
  'VAGA',
  'VAGO'
];

const valorCaracter:any = {
  ' ':'00',
  'Ñ':'10',
  'A':'11',
  'B':'12',
  'C':'13',
  'D':'14',
  'E':'15',
  'F':'16',
  'G':'17',
  'H':'18',
  'I':'19',
  'J':'21',
  'K':'22',
  'L':'23',
  'M':'24',
  'N':'25',
  'O':'26',
  'P':'27',
  'Q':'28',
  'R':'29',
  'S':'32',
  'T':'33',
  'U':'34',
  'V':'35',
  'W':'36',
  'X':'37',
  'Y':'38',
  'Z':'39'
}

const valoresClaveHomonimia: any = {
  0:'1',
  1:'2',
  2:'3',
  3:'4',
  4:'5',
  5:'6',
  6:'7',
  7:'8',
  8:'9',
  9:'A',
  10:'B',
  11:'C',
  12:'D',
  13:'E',
  14:'F',
  15:'G',
  16:'H',
  17:'I',
  18:'J',
  19:'K',
  20:'L',
  21:'M',
  22:'N',
  23:'P',
  24:'Q',
  25:'R',
  26:'S',
  27:'T',
  28:'U',
  29:'V',
  30:'W',
  31:'X',
  32:'Y',
  33:'Z'
}

const tablaNoIII: any = {
  '0':0,
  '1':1,
  '2':2,
  '3':3,
  '4':4,
  '5':5,
  '6':6,
  '7':7,
  '8':8,
  '9':9,
  'A':10,
  'B':11,
  'C':12,
  'D':13,
  'E':14,
  'F':15,
  'G':16,
  'H':17,
  'I':18,
  'J':19,
  'K':20,
  'L':21,
  'M':22,
  'N':23,
  'Ñ':24,
  'O':25,
  'P':26,
  'Q':27,
  'R':28,
  'S':29,
  'T':30,
  'U':31,
  'V':32,
  'W':33,
  'X':34,
  'Y':35,
  'Z':36,
  ' ':37,
  default: 0
}

export class RFC {
  name: string = '';
  a_paterno: string = '';
  a_materno: string = '';
  fechaNacimiento: string = '';

  constructor(
    name: string,
    a_paterno: string,
    a_materno: string,
    fechaNacimiento: string
  ) {
    this.name = name.toLocaleUpperCase();
    this.a_paterno = a_paterno.toLocaleUpperCase();
    this.a_materno = a_materno.toLocaleUpperCase();
    this.fechaNacimiento = fechaNacimiento;
  }
  /*
  Primera Regla -
  Segunda Regla -

  */

  getName(){
    return this.name;
  }

  setName(nombre:string){
    this.name = nombre
  }

  getAPaterno(){
    return this.a_paterno;
  }

  setAPaterno(paterno:string){
    this.a_paterno = paterno
  }

  getAMaterno(){
    return this.a_materno;
  }

  setAMaterno(materno:string){
    this.a_materno = materno
  }

  getFechaNac(){
    return this.fechaNacimiento;
  }

  setFechaNac(fecha:string){
    this.fechaNacimiento = fecha;
  }

  cleanApellido(apellido: string): string {
    //Quitando de del la y espacios de apellidos
    return apellido.replace(
      /(^\s*|\s*$|\b(de|del|la|las|y|da|degli|di|dall|lla|d|des|du|von|van|vanden|vander)\b)/gi,
      ''
    ); //Cuarta Regla, Septima
  }

  cleanName(): string {
    //Quinta regla
    let names = this.name
      .replace(
        /^([a-z]\.|lic\.|ing\.|gen\.|dr\.|[a-z]\'|[éí\p{M}]|\b(de|del|la|las|y|da|degli|di|dall|lla|d|des|du|von|van|vanden|vander)\b)\s*$/gi,
        '' //Octava , Novena , Decima , Decima Segunda Regla
      )
      .split(' ');

    let newName = names[0];

    if (names.length > 1) {
      nombreComunes.some((n) => n === names[0])
        ? (newName = names[1])
        : (newName = names[0]);
    }

    return newName;
  }

  cleanBadWords(word:string):string{ //Decima primera regla
    if(palabrasInconvenientes.some(p => p === word))
      word = word.slice(0,3)+"X"

    return word;
  }

  claveAPaterno(): string {
    let paterno = this.cleanApellido(this.a_paterno.toUpperCase());
    let match:any = []
    let firstChart = paterno[0];
    paterno.slice(1);
    match = paterno.match(/[AEIOU]/g);
    return `${firstChart}${match[0]}`;
  }

  generatorPartAlfabeticRegular(): string {
    let nombreLimpio =this.cleanName();
    let aMaternoLimpio = this.cleanApellido(this.a_materno);
    return `${this.claveAPaterno()}${aMaternoLimpio[0]}${nombreLimpio[0]}`;
  }

  generatorPartAlfabeticIrregular(): string {
    //Tercera Regla
    let aPaternoLimpio = this.cleanApellido(this.a_paterno);
    let aMaternoLimpio = this.cleanApellido(this.a_materno);
    let nameLimpio = this.cleanName();

    return `${aPaternoLimpio[0]}${aMaternoLimpio[0]}${nameLimpio.substring(
      0,
      1
    )}`;
  }

  generatorPartAlfabeticOneA(): string {
    //Sexta Regla un solo apellido
    let claveAlfabetic = '';
    this.a_materno != ''
      ? (claveAlfabetic = `${this.a_materno.toLocaleUpperCase().substring(
          0,
          2
        )}${this.name.toLocaleUpperCase().substring(0, 2)}`)
      : (claveAlfabetic = `${this.a_paterno.toLocaleUpperCase().substring(
          0,
          2
        )}${this.name.toLocaleUpperCase().substring(0, 2)}`);

    return claveAlfabetic;
  }

  generatorPartFechaNac(): string {
    /*año-mes-dia*/
    let fechaSplit = this.fechaNacimiento.split('-');
    return `${fechaSplit[0][2]}${fechaSplit[0][3]}${fechaSplit[1]}${fechaSplit[2]}`;
  }

  getCadenaValores():string{
    let valores = '0';
    let nombreCompleto = this.a_paterno.toLocaleUpperCase()+' '+this.a_materno.toUpperCase()+' '+this.name.toUpperCase();
    valores+= nombreCompleto.split('').map(c => { return valorCaracter[c]}).join();
    console.log(typeof(valores));
    return valores.replaceAll(',','');
  }

  sumaDeProductos():string{ //clave diferencial
    let cadenaValores = this.getCadenaValores().split('');
    let productos = [];
    for(let i = 0; i<cadenaValores.length-1;i++){
      let par = cadenaValores[i]+cadenaValores[i+1];
      //console.log(par,cadenaValores[i+1]);
      let producto = parseInt(par)*parseInt(cadenaValores[i+1]);
      productos.push(producto);
    }

    return productos.reduce((acumulador, valorActual) => acumulador+=valorActual,0).toString();
  }

  separandoValores():string{
    let sumaTotalString = this.sumaDeProductos();
    let lastDigits = parseInt(sumaTotalString.substring(sumaTotalString.length-3,sumaTotalString.length));
    let cociente = Math.floor(lastDigits/34);
    let residuo = lastDigits%34;

    return valoresClaveHomonimia[cociente]+valoresClaveHomonimia[residuo];
  }

  getRfc():string{
    let alfabetic = this.generatorPartAlfabeticRegular();

    if(this.a_paterno.length===1) alfabetic=this.generatorPartAlfabeticIrregular();

    if(this.a_paterno === '' || this.a_materno==='') alfabetic = this.generatorPartAlfabeticOneA();

    if(palabrasInconvenientes.some(p=>p===alfabetic)) alfabetic = alfabetic.slice(0,3)+'X';

    let partFecha = this.generatorPartFechaNac();
    let claveDiferencialHomonimo = this.separandoValores();
    let RFC = alfabetic+partFecha+claveDiferencialHomonimo;
    console.log(this.valorIdentificador(RFC));

    return RFC+this.valorIdentificador(RFC);
  }
  //Falta formula de registro federal v(13)+v2(12).......+v12(2);

  valorIdentificador(theRfc:String){
    let arrayRFC = theRfc.split('');
    let v = 13;
    let suma  =0;
    for(let i = 0;i<12;i++){
      console.log(`${v-i} * ${tablaNoIII[arrayRFC[i]]}`);
      suma += (v-i) * tablaNoIII[arrayRFC[i]];
    }
    let digitVerificator;

    (suma%11 === 0)?
      digitVerificator = 0:
      digitVerificator = 11 - (suma%11);


    return digitVerificator;
  }
}
