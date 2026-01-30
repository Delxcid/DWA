"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class redes {
    constructor(nom, lab1, lab2, lab3, p1, p2, p3) {
        this.nombre = nom;
        this.lab1 = lab1;
        this.lab2 = lab2;
        this.lab3 = lab3;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    notaFinal() {
        let promedioLabs = (this.lab1 + this.lab2 + this.lab3) / 3;
        let promedioParciales = (this.p1 + this.p2 + this.p3) / 3;
        return promedioLabs * 0.6 + promedioParciales * 0.4;
    }
}
let estudiante1 = new redes("Ernesto", 10, 7, 8, 10, 9, 7.5);
console.log(estudiante1.notaFinal());
//# sourceMappingURL=index.js.map