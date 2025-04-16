function copiarCreci() {
    const texto = "76432"; // Número limpo, sem pontuação
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert("Número CRECI copiado: " + texto);
      })
      .catch(err => {
        console.error("Erro ao copiar: ", err);
      });
  }
  