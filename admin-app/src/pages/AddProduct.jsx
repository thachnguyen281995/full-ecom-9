import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Steps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { getCategories } from "../features/pcategory/pcategorySlice";
import { getColor } from "../features/color/colorSlice";
import { uploadImg } from "../features/upload/uploadSlice";
import { useNavigate } from "react-router-dom";
import CustomUpload from "../components/CustomUpload";
import Dropzone from "react-dropzone";
const { Dragger } = Upload;
const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState([]);
  const [images, setImages] = useState([]);
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
  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColor());
  }, []);
  const brandState = useSelector((state) => state.brand.brands);
  const catState = useSelector((state) => state.pCategory.pCategories);
  const colorState = useSelector((state) => state.color.color);
  const imageState = useSelector((state) => state.upload.images);
  const newProduct = useSelector((state) => state.product);
  const inputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      color: "",
      quantity: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Yêu cầu nhập tiêu đề sản phẩm"),
      description: Yup.string().required("Yêu cầu nhập mô tả"),
      price: Yup.number().required("Yêu cầu nhập giá"),
      brand: Yup.string().required("Yêu cầu nhập hãng sản xuất"),
      category: Yup.string().required("Yêu cầu nhập danh mục"),
      color: Yup.string().required("Yêu cầu nhập màu "),
      quantity: Yup.string().required("Yêu cầu số lượng "),
    }),
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  return (
    <div className="">
      <h4 className="my-10 text-2xl font-sans font-medium uppercase">Thêm sản phẩm</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-white w-full px-4 py-2 h-[150px] rounded-sm font-sans text-base border">
          <label htmlFor="name1"></label>
          <input
            className="w-full"
            type="text"
            placeholder="Nhập tiêu đề sản phẩm..."
            ref={inputRef}
            id="name1"
            value={formik.values.title}
            onChange={formik.handleChange("title")}
            onBlur={formik.handleBlur("title")}
          />
        </div>
        <div>
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-500 text-sm mt-2">{formik.errors.title}</div>
          ) : null}
        </div>
        <div className="">
          <ReactQuill
            className="bg-white mt-5"
            type="text"
            theme="snow"
            id="description"
            name="description"
            onChange={formik.handleChange("description")}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500 text-sm mt-2">{formik.errors.description}</div>
          ) : null}
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <div className="mt-5 flex flex-col gap-y-5 justify-between">
            <TextField label="Nhập giá" variant="outlined" className="w-full" />
            <FormControl className="w-full">
              <InputLabel id="brand">Thương hiệu</InputLabel>
              <Select
                name="demo-simple-select-label"
                onChange={formik.handleChange("brand")}
                onBlur={formik.handleBlur("brand")}
                value={formik.values.brand}
                className=""
                id="brand"
                label="Thương hiệu"
              >
                {brandState.map((brandItem) => {
                  return (
                    <MenuItem value={brandItem._id} key={brandItem._id}>
                      {brandItem.title}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl className="w-full">
              <InputLabel id="pcategory">Danh mục</InputLabel>
              <Select
                name="demo-simple-select-label"
                onChange={formik.handleChange("category")}
                onBlur={formik.handleBlur("category")}
                value={formik.values.category}
                className=""
                id="pcategory"
                label="Danh mục"
              >
                {catState.map((catItem) => {
                  return (
                    <MenuItem value={catItem._id} key={catItem._id}>
                      {catItem.title}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl className="w-full">
              <InputLabel id="color">Chọn màu</InputLabel>
              <Select
                name="demo-simple-select-labe2"
                onChange={formik.handleChange("color")}
                onBlur={formik.handleBlur("color")}
                value={formik.values.color}
                className=""
                id="color"
                label="Danh mục"
              >
                {colorState.map((colorItem) => {
                  return (
                    <MenuItem value={colorItem._id} key={colorItem._id}>
                      {colorItem.title}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <TextField label="Nhập số lượng" variant="outlined" className="w-full" />
          </div>
          <div className="mt-5">
            <CustomUpload />
          </div>
        </div>
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

export default AddProduct;
