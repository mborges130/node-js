function trataErros (erro) {
    if (erro.code === 'ENOENT') {
        throw new Error('Arquivo de Texto não encontrado');
    } else { 
        return ' Erro na Aplicação'
    }
}

module.exports = trataErros;