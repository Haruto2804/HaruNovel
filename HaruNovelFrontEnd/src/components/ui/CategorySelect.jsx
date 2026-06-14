import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import categoryService from "../../services/categoryService.js";

// Đã thêm prop "value" để nhận dữ liệu từ Component cha truyền vào
export default function CategorySelect({ value, onChange }) {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  // 1. Lấy danh sách từ DB khi load trang
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryService.getAllCategories();
        const formattedOptions = response.result.map((cat) => ({
          value: cat.category_id,
          label: cat.category_name,
        }));
        setOptions(formattedOptions);
      } catch (error) {
        console.error("Lỗi khi tải danh sách thể loại:", error);
      }
    };

    fetchCategories();
  }, []);
  const selectedOption =
    options.find((opt) => String(opt.value) === String(value)) || null;
  // 2. Xử lý khi chọn từ danh sách
  const handleChange = (selected) => {
    // Trả thẳng ID của thể loại ra cho trang cha dễ lưu Database
    // Nếu bị xóa trắng (isClearable), selected sẽ là null
    if (onChange) onChange(selected ? selected.value : null);
  };

  // 3. Xử lý khi tạo mới
  const handleCreate = async (inputValue) => {
    setIsLoading(true);
    try {
      const newCategory = await categoryService.createCategory({
        name: inputValue,
        slug: inputValue.toLowerCase().replace(/\s+/g, "-"),
      });

      const newOption = {
        value: newCategory.result.category_id,
        label: newCategory.result.category_name,
      };

      setOptions((prev) => [...prev, newOption]);

      // Báo cho trang cha cập nhật state bằng ID của thể loại mới
      if (onChange) onChange(newOption.value);
    } catch (error) {
      console.error("Lỗi khi tạo thể loại mới:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      borderColor: "#d1d5db",
      boxShadow: "none",
      "&:hover": { borderColor: "#9ca3af" },
      padding: "2px",
      borderRadius: "0.375rem",
    }),
  };

  return (
    <CreatableSelect
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={handleChange}
      onCreateOption={handleCreate}
      options={options}
      value={selectedOption} // Dùng option đã tìm được ở trên
      placeholder="Nhập tên thể loại để tìm kiếm hoặc tạo mới..."
      formatCreateLabel={(inputValue) => `Tạo thể loại mới: "${inputValue}"`}
      styles={customStyles}
      noOptionsMessage={() => "Không tìm thấy thể loại này"}
    />
  );
}
