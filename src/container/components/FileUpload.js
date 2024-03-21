import React, { useState } from 'react';
import { Upload, message, Progress, List, Button } from 'antd';
import { InboxOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
import "./FileUpload.css";
import logoDrag from "../../assets/Framedrag.svg";

const { Dragger } = Upload;

const FileUpload = () => {
    const [uploadingFiles, setUploadingFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [totalUploaded, setTotalUploaded] = useState(0);

    const handleUpload = (info) => {
        const { status, name } = info.file;
        if (status === 'uploading') {
            if (!uploadingFiles.includes(name)) {
                setUploadingFiles(prevFiles => [...prevFiles, name]);
            }
        } else if (status === 'done') {
            setUploadingFiles(prevFiles => prevFiles.filter(file => file !== name));
            setUploadedFiles(prevFiles => [...prevFiles, name]);
            setTotalUploaded(prevTotal => prevTotal + 1); // Increment totalUploaded only on successful upload
            message.success(`${name} file uploaded successfully.`);
        } else if (status === 'error') {
            setUploadingFiles(prevFiles => prevFiles.filter(file => file !== name));
            message.error(`${name} file upload failed.`);
        }
    };

    // const handleDelete = (fileName) => {
    //     setUploadedFiles(prevFiles => prevFiles.filter(file => file !== fileName));
    // };
    const handleDelete = (fileName) => {
        setUploadedFiles(prevFiles => prevFiles.filter(file => file !== fileName));
        setUploadingFiles(prevFiles => prevFiles.filter(file => file !== fileName)); // Remove the file from uploadingFiles too
        setTotalUploaded(prevTotal => prevTotal - 1); // Decrement totalUploaded
    };
    
    return (
        <div>
            <Dragger
                className='file-up'
                name="file"
                multiple={true}
                action="https://run.mocky.io/v3/d5994d9c-c53c-4853-a357-b69eee59830f"
                onChange={handleUpload}
                showUploadList={false}
            >
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
            </Dragger>
            {uploadingFiles.length > 0 && (
                <div className="uploading-files">
                    <h3 className='heading'>{`Uploading - ${totalUploaded+1}/${uploadingFiles.length + totalUploaded} files`}</h3>
                    <List
                        dataSource={uploadingFiles}
                        renderItem={item => (
                            <List.Item>
                                {item}
                                <Progress percent={50} status="active" format={() => ''} />
                                {/* {uploadingFiles.includes(item) && <Progress className='bar' percent={50} status="active" />} */}
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
                        renderItem={item => (
                            <List.Item>
                                <span>{item} <Button type="text" icon={<CheckCircleOutlined />} style={{ color: '#6FCF97' }}/></span>
                                <Button type="text" icon={<DeleteOutlined />} onClick={() => handleDelete(item)} style={{ color: '#EB5757' }} />
                                
                            </List.Item>
                        )}
                    />
                </div>
            )}
        </div>
    );
};

export default FileUpload;
