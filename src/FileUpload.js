import AWS from 'aws-sdk'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const VisuallyHiddenInput = styled('input')({
  clipPath: 'inset(50%)',
  clip: 'rect(0 0 0 0)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

AWS.config.update({
  accessKeyId: process.env.REACT_APP_API_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_KEY,
  region: process.env.REACT_APP_AWS_REGION,
})

const s3 = new AWS.S3()

function FileUpload() {
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile)
    setFileName(selectedFile ? selectedFile.name : null)
  }

  const handleUpload = async () => {
    if (!file) {
      setMessage('Por favor, selecione um arquivo!')
      return
    }

    setUploading(true)
    setMessage('')

    const params = {
      Bucket: 'baldinho-gdegato',
      Key: file.name,
      Body: file,
      ContentType: file.type,
      ACL: 'public-read',
    }

    try {
      const data = await s3.upload(params).promise()
      setMessage('Arquivo enviado com sucesso!')
      console.log('o que retornou da api', data)
      console.log(params.location)
    } catch (error) {
      //setMessage(`Erro ao enviar o arquivo: ${error.message}`)
      setMessage(
        `A AWS cobra pelo armazenamento e não posso deixar liberado para qualquer usuário subir arquivos no baldinho GdeGato!`,
      )
      console.log(error.message)
    } finally {
      setUploading(false)     
    }
  }

  return (
    <div>
      <div>
        <Button
          component="label"
          variant="contained"
          onChange={handleFileChange}
          startIcon={<CloudUploadIcon />}
        >
          Carregar arquivo
          <VisuallyHiddenInput type="file" />
        </Button>
        {fileName && (
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            Arquivo selecionado: {fileName}
          </Typography>
        )}
      </div>
      <div>
        <Button
          sx={{ marginTop: 2 }}
          variant="contained"
          onClick={handleUpload}
        >
          {uploading ? 'Enviando...' : 'Enviar'}
        </Button>
        {message && (
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            {message}
          </Typography>
        )}
      </div>
    </div>
  )
}

export default FileUpload
