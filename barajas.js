numeros = ['uno','dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez']
agregado = ['escudero', 'caballo', 'rey']
agregado2 = ['jota', 'reina','rey','as' ]
baraja=['']

function solucion (tipo) {
    console.log(tipo)
    if (tipo=="suizo"){
        //let cmbSuizo = ['_de_escudos','_de_rosas','_de_campanas','_de_bellotas']
        let suizo=['']
         numeros=numeros.concat(agregado);
        for (var i = 5; i <= 12; i++) {
            baraja[i-5]=numeros[i]+"_de_escudos"
         }
        for (var i = 5; i <= 12; i++) {
            baraja[i+3]=numeros[i]+"_de_rosas"
         }
        for (var i = 5; i <= 12; i++) {
            baraja[i+11]=numeros[i]+"_de_campanas"
         }
        for (var i = 5; i <= 12; i++) {
            baraja[i+19]=numeros[i]+"_de_bellotas"
         }
         
    }
    
     if (tipo=='espaniol'){
        //let cmbSuizo = ['_de_escudos','_de_rosas','_de_campanas','_de_bellotas']
        
         numeros=numeros.concat(agregado);
        for (var i = 0; i <= 12; i++) {
            baraja[i]=numeros[i]+"_de_monedas"
         }
        for (var i = 0; i <= 12; i++) {
            baraja[i+13]=numeros[i]+"_de_copas"
         }
        for (var i = 0; i <= 12; i++) {
            baraja[i+26]=numeros[i]+"_de_espadas"
         }
        for (var i = 0; i <= 12; i++) {
            baraja[i+39]=numeros[i]+"_de_bastones"
         }
         
    }   
    if(tipo=='s'){
        numeros=numeros.concat(agregado2);
        for (var i = 0; i <= 13; i++) {
            baraja[i]=numeros[i]+"_de_corazones"
         }
        for (var i = 0; i <= 13; i++) {
            baraja[i+14]=numeros[i]+"_de_treboles"
         }
        for (var i = 0; i <= 13; i++) {
            baraja[i+28]=numeros[i]+"_de_diamantes"
         }
        for (var i = 0; i <= 13; i++) {
            baraja[i+42]=numeros[i]+"_de_picas"
         }
         
    }
    return baraja
}

console.log(solucion("espaniol"))