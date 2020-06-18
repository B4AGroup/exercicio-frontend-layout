class RandomGenerator {
  static ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  static random (max) {
    return Math.floor((Math.random() * max) + 1);
  }

  static getWord (size = 6, capitalize = true) {
    let str = [],
        alpha = this.ALPHABET,
        len = alpha.length;

    for (let i = 0; i < size; i++) {
      let n = this.random(len - 1);
      str.push(
        (i === 0 && capitalize) ? alpha[n].toUpperCase() : alpha[n]
      );
    }

    return str.join("");
  }

  static getParagraph (words = 10) {
    let paragraph = [];
    for (let w = 0; w < words; w++) {
      let wordSize = this.random(10);
      paragraph.push(this.getWord(wordSize));
    }
    return `${paragraph.join(" ")}.`;
  }
}

class Ofertas {
  static carregarMais (qty, cb) {
    let ofertas = [],
        gen = RandomGenerator;

    for (let i = 0; i < qty; i++) {
      ofertas.push({
        name: gen.getWord(8, true),
        discount: gen.random(60),
        description: gen.getParagraph(10),
        location: `Local: ${gen.getWord(5, true)}`
      });
    }

    if (typeof cb === "function") cb(ofertas);
    return ofertas;
  }
}

class Enquete {
  static votos = {
    gostei: 150,
    nao_gostei: 50
  };

  static porcentagem () {
    const {
      gostei,
      nao_gostei
    } = this.votos;

    let total = gostei + nao_gostei;

    return {
      gostei: parseFloat((gostei/total).toFixed(2)),
      nao_gostei: parseFloat((nao_gostei/total).toFixed(2))
    };
  }

  static responder (resposta, cb) {
    let answer = resposta.toLowerCase();
    try {
      if (answer !== "gostei" && answer !== "nao_gostei") {
        throw new Error("Não é uma resposta válida");
      }
      this.votos[answer]++;

      if (typeof cb === "function") cb(this.porcentagem());

      return this.porcentagem();
    } catch (err) {
      return err.message;
    }
  }
}
