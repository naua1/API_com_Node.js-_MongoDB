exports.enviar = (req, res) =>{
    if (!req.file) return res.status(400).json({error: 'Nenhum arquivo enviado'});
    res.json({ nomeArquivo: req.file.filename});
    
}