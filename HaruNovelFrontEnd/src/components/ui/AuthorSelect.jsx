import React, { useState, useEffect } from "react";
// Import bản Creatable (Bản đặc biệt cho phép tạo mới)
import CreatableSelect from "react-select/creatable";
import authorService from "../../services/authorService";

export default function AuthorSelect({ onChange }) {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  // 1. MÔ PHỎNG LẤY DỮ LIỆU TỪ DATABASE (Khi vừa load trang)
  useEffect(() => {
    const fetchAuthorsFromDB = async () => {
      const response = await authorService.getAllAuthors();
      const formattedOptions = response.result.map((author) => ({
        value: author.slug, // Dùng slug làm value
        label: author.name, // Dùng name làm nhãn hiển thị
      }));
      setOptions(formattedOptions);
    };

    fetchAuthorsFromDB();
  }, []);
  console.log(options);
  // 2. XỬ LÝ KHI NGƯỜI DÙNG CHỌN (HOẶC NHẬP MỚI)
  const handleChange = (newValue) => {
    setSelectedOption(newValue);

    // Trả dữ liệu ra cho trang cha (Trang thêm truyện)
    // newValue sẽ có dạng { value: '...', label: '...' }
    if (onChange) onChange(newValue);
  };

  // 3. XỬ LÝ KHI NGƯỜI DÙNG BẤM TẠO MỚI MỘT TÁC GIẢ CHƯA CÓ
  const handleCreate = (inputValue) => {
    setIsLoading(true);

    // Mô phỏng độ trễ của mạng (đang gọi API lên server để lưu tác giả mới)
    setTimeout(() => {
      // Tạo một object option mới
      const newOption = {
        value: inputValue.toLowerCase().replace(/\s+/g, "-"), // Tạo ID giả (slug)
        label: inputValue,
      };

      // Thêm tác giả mới vào danh sách gợi ý hiện tại
      setOptions((prev) => [...prev, newOption]);

      // Tự động chọn luôn tác giả vừa tạo
      setSelectedOption(newOption);
      setIsLoading(false);

      // Báo cho component cha biết
      if (onChange) onChange(newOption);

      console.log("Đã lưu tác giả mới vào Database:", newOption);
    }, 1000);
  };

  // 4. CUSTOM GIAO DIỆN BẰNG TAILWIND (Bỏ qua CSS mặc định)
  // react-select cung cấp classNames API để bạn nhúng class Tailwind vào
  const customStyles = {
    control: (base) => ({
      ...base,
      borderColor: "#d1d5db", // border-gray-300
      boxShadow: "none",
      "&:hover": {
        borderColor: "#9ca3af", // border-gray-400
      },
      padding: "2px",
      borderRadius: "0.375rem", // rounded-md
    }),
  };

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
