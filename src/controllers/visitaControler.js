exports.get = (req, res, next) => {
  var XMLS = new XMLSerializer();
  var elem = document;
  var xml_str = XMLS.serializeToString(elem);  

  res.status(201).send(

    xml_str

  );

};

exports.post = (req, res, next) => {
  var builder = require('xmlbuilder');

  res.status(201).send(
    
	);
};
/*

<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <enviaDadosWSCliente xmlns="http://AcessoCatraca.webServiceServers.wsi.wheb.com.br/">
      <catracaParams>
        <cdBarras xmlns="">string</cdBarras>
        <nrIdentidade xmlns="">string</nrIdentidade>
        <nrSeqTipo xmlns="">string</nrSeqTipo>
        <xml xmlns="">string</xml>
        <ieTipoDocumento xmlns="">string</ieTipoDocumento>
        <nrDocumento xmlns="">string</nrDocumento>
        <dtEntrada xmlns="">string</dtEntrada>
        <hrEntrada xmlns="">string</hrEntrada>
        <dsCracha xmlns="">string</dsCracha>
        <nmVisitante xmlns="">string</nmVisitante>
        <codigosControleAcessoVisita xmlns="">string</codigosControleAcessoVisita>
      </catracaParams>
    </enviaDadosWSCliente>
  </soap:Body>
</soap:Envelope>

*/