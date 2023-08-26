import React, { useRef, useState } from "react";
const AddBlogCategory = () => {
    const inputRef = useRef(null);
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="">
             <h4 className="my-10 text-2xl font-sans font-medium uppercase">danh mục Blog</h4>
            <form>
                <div className="bg-white w-full px-4 py-2 h-[150px] rounded-sm font-sans text-base border">
                    <label htmlFor="name1"></label>
                    <input
                    className="w-full"
                        type="text"
                        placeholder="Thêm danh mục Blog..."
                        ref={inputRef}
                        id="name1"
                        value={value}
                        onChange={handleChange}
                    />
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

export default AddBlogCategory;
