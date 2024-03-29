import React, { useState } from 'react';
import { Progress, List, Button } from 'antd';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDropzone } from 'react-dropzone';
import "./FileUpload.css";
import logoDrag from "../../assets/Framedrag.svg";

const FileUpload = () => {
    const [uploadingFiles, setUploadingFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [totalUploaded, setTotalUploaded] = useState(0);

    const handleUpload = (acceptedFiles) => {
        acceptedFiles.forEach(file => {
            setUploadingFiles(prevFiles => [...prevFiles, file]);
            // Simulate upload completion after 2 seconds
            setTimeout(() => {
                setUploadingFiles(prevFiles => prevFiles.filter(f => f !== file));
                setUploadedFiles(prevFiles => [...prevFiles, file]);
                setTotalUploaded(prevTotal => prevTotal + 1);
            }, 2000);
        });
    };

    const handleDelete = (fileName) => {
        setUploadedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
        setUploadingFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
        setTotalUploaded(prevTotal => prevTotal - 1);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleUpload,
        accept: '.csv, .xlsx', // Accepted file formats
        maxSize: 1048576 // Maximum file size in bytes
    });

    return (
        <div>
            <div {...getRootProps()} className='file-up'>
                <input {...getInputProps()} />
                <div className='upload-block'>
                    <div className='icon'>
                        <img className="upload-img" src={logoDrag} alt=" " />
                    </div>
                    <div className='upload-text'>
                        <div>Drag & drop files or <span className="browse">Browse</span></div>
                    </div>
                    <div className='supported-formats'>
                        Supported formats: .csv, .xlsx
                    </div>
                </div>
            </div>
            {uploadingFiles.length > 0 && (
                <div className="uploading-files">
                    <h3 className='heading'>{`Uploading - ${totalUploaded+1}/${uploadingFiles.length + totalUploaded} files`}</h3>
                    <List
                        dataSource={uploadingFiles}
                        renderItem={file => (
                            <List.Item>
                                {file.name}
                                <Progress percent={50} status="active" format={() => ''} />
                            </List.Item>
                        )}
                    />
                </div>
            )}
            {uploadedFiles.length > 0 && (
                <div className="uploaded-files">
                    <h3>Uploaded</h3>
                    <List
                        dataSource={uploadedFiles}
                        renderItem={file => (
                            <List.Item>
                                <span>{file.name} <Button type="text" icon={<CheckCircleOutlined />} style={{ color: '#6FCF97' }}/></span>
                                <Button type="text" icon={<DeleteOutlined />} onClick={() => handleDelete(file.name)} style={{ color: '#EB5757' }} />
                            </List.Item>
                        )}
                    />
                </div>
            )}
        </div>
    );
};

export default FileUpload;
