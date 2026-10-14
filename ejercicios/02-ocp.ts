interface MetodoPago { //Creamos una interfaz comun
  pago(Monto: number): void;
}

//implementamos el contrato con el metodo pago para todas las clases
class Tarjeta implements MetodoPago { 
  pago(Monto: number): void {
    console.log(`Se pago $${Monto} con Tarjeta`)
  }
}

class Efectivo implements MetodoPago {
  pago(Monto: number): void {
    console.log(`Se pago $${Monto} con Efectivo`)
  }
}

class Transferencia implements MetodoPago {
  pago(Monto: number): void {
    console.log(`Se pago $${Monto} con Transferencia`)
  }
}

class Cripto implements MetodoPago {
  pago(Monto: number): void {
    console.log(`Se pago $${Monto} con Cripto`)
  }
}




//Aca inyectamos las clases con el contrato y su metodo para poder pagar
class PaymentProcessor {
  constructor ( private paymentMetodo: MetodoPago ) {};

  pagar( Monto: number ): void {
    this.paymentMetodo.pago(Monto)
  };
}

const paymentProcessor = new PaymentProcessor(new Tarjeta());
paymentProcessor.pagar(111)

const paymentProcessor1 = new PaymentProcessor(new Transferencia());
paymentProcessor1.pagar(555)

const paymentProcessor2 = new PaymentProcessor(new Efectivo());
paymentProcessor2.pagar(333)

const paymentProcessor3 = new PaymentProcessor(new Cripto());
paymentProcessor3.pagar(222)