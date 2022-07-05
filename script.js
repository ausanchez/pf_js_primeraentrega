/***** Simulador de ajuste salarial para todos los elementos de un array ****/


class Empleado {
    constructor(legajo, nombre, posicion, sueldoJun) {
        this.legajo = legajo
        this.nombre = nombre
        this.posicion = posicion
        this.sueldoJun = sueldoJun
    }
}

const empleado1 = new Empleado(54710, "Fabricio", "Gerente", 780000)
const empleado2 = new Empleado(25440, "Natalia", "Referente", 340000)
const empleado3 = new Empleado(18752, "Jesica", "Analista Compensaciones", 200000)
const empleado4 = new Empleado(15548, "Valeria", "Analista Payroll", 190000)
const empleado5 = new Empleado(90250, "Silvina", "Scrum Master", 450000)
const empleado6 = new Empleado(90250, "Graciela", "Agile Coach", 480000)


const nomina = [empleado1, empleado2, empleado3, empleado4, empleado5, empleado6];

//Muestro la situación salarial inicial de cada legajo

function payrollJunio(salarioJunio) { 
    return `Legajo: ${salarioJunio.legajo} tiene un sueldo a Junio de $ ${salarioJunio.sueldoJun}`
}

const sueldoActual = nomina.map(sueldoHoy => sueldoHoy = payrollJunio(sueldoHoy))

console.table(sueldoActual)


//Solicito al usuario que ingrese el porcentaje de ajuste que va a aplicar a toda la nomina

let pauta = ""

do {
    pauta = parseFloat(prompt("Ingrese el % de pauta a asignar")/100)
}while (isNaN(pauta))



const nuevoSueldo = nomina.map(colaborador => colaborador.sueldoJun += colaborador.sueldoJun*pauta)


//Consulto el detalle de los nuevos sueldos

console.table(nuevoSueldo)

//Muestro el total de la masa salarial actualizado.

console.log(nuevoSueldo.reduce((acum, sueldo) => acum + sueldo, 0))



