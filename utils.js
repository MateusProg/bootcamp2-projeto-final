function validarEntrada(termo){
    if (termo) return true
    return false
}

function formatarNome(termo){
    return termo.toLowerCase().trim();
}

module.exports = {validarEntrada, formatarNome}