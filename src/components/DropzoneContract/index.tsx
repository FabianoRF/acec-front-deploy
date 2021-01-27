import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { Container } from './styles';

interface Props {
  onFileUploaded: (file: File) => void;
}

const DropzoneContract: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileName, setSelectedFileName] = useState('');

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      const fileName = file.name;
      setSelectedFileName(fileName);
      onFileUploaded(file);
    },
    [onFileUploaded],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <Container className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />

      {selectedFileName ? (
        <div>
          {`Nome do arquivo selecionado: ${selectedFileName}`}
          <h4>(Clique novamente para alterar)</h4>
        </div>
      ) : (
        <div>Clique ou arraste o contrato para cá.</div>
      )}
    </Container>
  );
};

export default DropzoneContract;
