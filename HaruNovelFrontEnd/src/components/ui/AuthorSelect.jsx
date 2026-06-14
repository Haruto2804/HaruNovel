import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import authorService from "../../services/authorService.js";

export default function AuthorSelect({
  value,
  onChange,
  handleCreate,
  options,
  setOptions,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (newValue) => {
    setSelectedOption(newValue);
    if (onChange) onChange(newValue); // Trả về { value: 1, label: "Tên" }
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      borderColor: "#d1d5db",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#9ca3af",
      },
      padding: "2px",
      borderRadius: "0.375rem",
    }),
  };
  useEffect(() => {
    const fetchAuthorsFromDB = async () => {
      try {
        const response = await authorService.getAllAuthors();
        const formattedOptions = response.result.map((author) => ({
          value: author.id,
          label: author.name,
        }));
        if (setOptions) {
          setOptions(formattedOptions);
        }
      } catch (error) {
        console.error("Lỗi khi tải danh sách tác giả:", error);
      }
    };

    fetchAuthorsFromDB();
  }, []);
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold text-gray-700 mb-2">
        Tác giả <span className="text-red-500">*</span>
      </label>

      <CreatableSelect
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={handleChange}
        onCreateOption={handleCreate}
        options={options}
        value={selectedOption}
        placeholder="Nhập tên để tìm kiếm hoặc tạo mới..."
        formatCreateLabel={(inputValue) => `Tạo tác giả mới: "${inputValue}"`}
        styles={customStyles}
        noOptionsMessage={() => "Không tìm thấy tác giả này"}
      />
    </div>
  );
}
