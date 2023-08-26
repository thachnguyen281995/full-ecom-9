import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Steps } from "antd";
const { Dragger } = Upload;
import "react-quill/dist/quill.snow.css";
const AddBlog = () => {
    const [desc, setDesc] = useState("");
    const handleDesc = (e) => {
        setDesc(e);
    };
    const props = {
        name: "file",
        multiple: true,
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        onChange(info) {
            const { status } = info.file;
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log("Dropped files", e.dataTransfer.files);
        },
    };
    return (
        <div>
            <h4 className="my-10 text-2xl font-sans font-medium uppercase">Thêm Blog</h4>
            <div className="max-w-6xl mx-auto">
                {/* <Steps
                    size="large"
                    current={0}
                    items={[
                        {
                            title: "Thêm chi tiết Blog",
                        },
                        {
                            title: "Đăng hình ảnh",
                        },
                        {
                            title: "Kết thúc",
                        },
                    ]}
                /> */}
            </div>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Nhấp hoặc kéo tệp vào đây để tải lên.</p>
                <p className="ant-upload-hint">
                    Hỗ trợ tải lên một lần hoặc hàng loạt. Nghiêm cấm tải lên dữ liệu công ty hoặc các tệp bị cấm khác.
                </p>
            </Dragger>

            <form action="" className="mt-5">
                <ReactQuill
                    className="bg-white"
                    theme="snow"
                    value={desc}
                    onChange={(e) => {
                        handleDesc(e);
                    }}
                />
                <button
                    className="mt-4 font-sans bg-sky-500 text-white px-4 py-2 text-xl rounded-md shadow-md hover:bg-sky-600"
                    type="submit"
                >
                    Thêm
                </button>
            </form>
        </div>
    );
};

export default AddBlog;
