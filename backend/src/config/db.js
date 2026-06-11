import sql from "mssql";
const dbConfig = {
  server: "localhost",
  database: "haru_novel_db",
  user: "BaoAdmin",
  password: "1",
  options: {
    trustServerCertificate: true, // Bỏ qua lỗi chứng chỉ bảo mật khi chạy local
  },
};

const connectDB = async () => {
  try {
    await sql.connect(dbConfig);
    console.log(`Kết nối với DB với tài khoản ${dbConfig.user} thành công!`);
  } catch (err) {
    console.log(`Kết nối với DB với tài khoản ${dbConfig.user} thất bại!`);
  }
};
export { connectDB, sql };
