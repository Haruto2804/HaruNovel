import React from "react";
import Select from "react-select";

// Định nghĩa 3 trạng thái chuẩn của truyện
const statusOptions = [
  { value: 1, label: "Đang tiến hành" },
  { value: 2, label: "Đã hoàn thành" },
  { value: 3, label: "Tạm dừng" },
];

export default function StatusSelect({ value, onChange }) {
  const selectedOption =
    statusOptions.find((opt) => String(opt.value) === String(value)) ||
    statusOptions[0];
  const handleChange = (selected) => {
    // Trả giá trị số ra ngoài cho Component cha
    if (onChange) onChange(selected.value);
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
    <Select
      options={statusOptions}
      value={selectedOption}
      onChange={handleChange}
      placeholder="Chọn trạng thái..."
      styles={customStyles}
      isSearchable={false}
      isClearable={false}
    />
  );
}
