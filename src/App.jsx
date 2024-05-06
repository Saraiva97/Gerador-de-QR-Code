
import './App.css'

import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './QRCodeGenerator.css'; // Importando estilos CSS

function QRCodeGenerator() {
  const [inputData, setInputData] = useState('');
  const [qrValue, setQRValue] = useState('');
  const [qrSize, setQRSize] = useState(200); // Tamanho padrão do QR Code
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setInputData(event.target.value);
    setErrorMessage(''); // Limpar mensagem de erro ao digitar
  };

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setQRSize(newSize);
  };

  const generateQRCode = () => {
    if (inputData.trim() !== '') {
      setQRValue(inputData);
    } else {
      setErrorMessage('Por favor, insira algum texto antes de gerar o QR Code.');
    }
  };

  return (
    <div className="qr-container">
      <h1>Gerador de QR Code</h1>
      <input
        type="text"
        placeholder="Insira o texto, URL ou informações de contato"
        value={inputData}
        onChange={handleChange}
      />
      <button onClick={generateQRCode}>Gerar QR Code</button>
      <div className="size-input">
        <label htmlFor="size">Tamanho do QR Code:</label>
        <input
          type="number"
          id="size"
          min="100"
          max="500"
          value={qrSize}
          onChange={handleSizeChange}
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {qrValue && (
        <div className="qr-code">
          <h2>QR Code:</h2>
          <QRCode value={qrValue} size={qrSize} />
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
