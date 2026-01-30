class redes {
    nombre: string; lab1: number; lab2: number; lab3: number;
    p1: number; p2: number; p3: number;
    


    constructor(nom: string, lab1: number, lab2: number, lab3: number, p1: number, p2: number, p3: number) {
        this.nombre = nom; this.lab1 = lab1; this.lab2 = lab2;
        this.lab3 = lab3; this.p1 = p1; this.p2 = p2; this.p3 = p3;
}
    notaFinal(): number {
        let promedioLabs = (this.lab1 + this.lab2 + this.lab3) / 3;
        let promedioParciales = (this.p1 + this.p2 + this.p3) / 3;
        return promedioLabs * 0.6 + promedioParciales * 0.4;

    }
}

let estudiante1 = new redes("Ernesto", 10, 7, 8, 10, 9, 6.5);
console.log(estudiante1.notaFinal());

