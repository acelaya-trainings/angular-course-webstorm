
describe("Especificacion de la Codificacion Cesar", function() {
    var codificador;

    it ("El codificador tiene que tener el alfabeto de 27 caracteres", function() {
      codificador = new CodificadorCesar(0);
      expect(codificador.numOfCharacters).toBe(27);
    });

  describe("Cuando tengo una distancia de 3 y codifico", function() {
 
    beforeEach(function() {
      codificador = new CodificadorCesar(3);
    });

    it("La cadena de texto 'A' la convierto a 'D'", function() {
       expect(codificador.encode("A")).toBe("D");
    });
    // Esta spec es candidata a desaparecer, me sirvió para
    // triangular y avanzar en el código pero no añade nada 
    // respecto a la spec anterior
    it("La cadena de texto 'B' la convierto a 'E'", function() {
       expect(codificador.encode("B")).toBe("E");
    });
    // Esta spec también es candidata a desaparecer
    it("La cadena de texto 'AB' la convierto a 'DE'", function() {
       expect(codificador.encode("AB")).toBe("DE");
    });
    it("La cadena de texto 'aBc' la convierto a 'DEF'", function() {
       expect(codificador.encode("aBc")).toBe("DEF");
    });
    it("La cadena de texto 'A?.B?' la convierto a 'D?.E?'", function() {
       expect(codificador.encode("A?.B?")).toBe("D?.E?");
    });
    it("Cuando llege al final continua por los primeros caracteres ('XYZ'-> 'ABC')", function() {
       expect(codificador.encode("XYZ")).toBe("ABC");
    });

  });

  // Esta suite es candidata a ser borrada
  // me sirvió para triangular y avanzar en el código pero no añade nada 
  // respecto a la suite anterior
  describe("Cuando tengo una distancia de 5 y codifico", function() {
 
    beforeEach(function() {
      codificador = new CodificadorCesar(5);
    });

    it("y la cadena de texto 'A' la convierto a 'F'", function() {
       expect(codificador.encode("A")).toBe("F");
    });
  });

  describe("Cuando tengo una distancia de 3 y descodifico", function() { 
    // Esta repetición me indica que debo buscar la manera de reorganizar
    // mis suites.
    beforeEach(function() {
      codificador = new CodificadorCesar(3);
    });
    it("La cadena de texto 'dEf' la convierto a 'ABC'", function() {
       expect(codificador.decode("dEf")).toBe("ABC");
    });
    // Todas las specs que viene a continuación son redundantes para las pruebas.
    it("Cuando llege al principio continua decodificando por los últimos caracteres ('ABC'-> 'XYZ')", function() {
       expect(codificador.decode("ABC")).toBe("XYZ");
    });
    it("La cadena de texto 'D?.E? la decodifico a 'A?.B?'", function() {
       expect(codificador.decode("D?.E?")).toBe("A?.B?");
    });

  });

 
});