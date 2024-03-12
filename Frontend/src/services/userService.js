import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createNewUserServicer = (data) => {
  console.log("check data from service", data);
  return axios.post(`/api/creat-new-user`, data);
};

const deleteUserService = (userId) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: userId,
    },
  });
};

const editUserService = (inputData) => {
  return axios.put("/api/edit-user", inputData);
};

const forgotUserPassword = (userEmail) => {
  return axios.post("/api/passwordforgot", { email: userEmail });
};

const apiResetPassword = (data) => {
  return axios.put("/api/resetpassword", data);
};

const registerNewUser = (data) => {
  return axios.post("/api/signin", data);
};

const getAllCodeService = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`);
};

const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};

const getAllDoctors = () => {
  return axios.get(`/api/get-all-doctor`);
};

const saveDetailDoctor = (data) => {
  return axios.post("/api/save-infor-doctor", data);
};

const getDetailInforDoctor = (inputId) => {
  return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`);
};

const saveBulkScheduleDoctor = (data) => {
  return axios.post("/api/bulk-create-schedule", data);
};

const getScheduleDoctorByDate = (doctorId, date) => {
  return axios.get(
    `/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`
  );
};

const getExtraInforDoctorById = (doctorId) => {
  return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`);
};

const getProfileDoctorById = (doctorId) => {
  return axios.get(`/api/get-profile-doctor-by-id?doctorId=${doctorId}`);
};

const postPatientBookAppoinment = (data) => {
  return axios.post("/api/patient-book-appointment", data);
};

const postVerifyBookAppoinment = (data) => {
  return axios.post("/api/verify-book-appointment", data);
};

const createNewSpecialty = (data) => {
  return axios.post("/api/create-new-specialty", data);
};

const getAllSpecialty = () => {
  return axios.get(`/api/get-specialty`);
};

const editSpecialty = (inputData) => {
  return axios.put("/api/edit-specialty", inputData);
};

const deleteSpecialty = (specialty) => {
  return axios.delete("/api/delete-specialty", {
    data: {
      id: specialty,
    },
  });
};

const getAllDetailSpecialtyById = (data) => {
  return axios.get(
    `/api/get-detail-specialty-by-id?id=${data.id}&location=${data.location}`
  );
};

const createNewClinic = (data) => {
  return axios.post("/api/create-new-clinic", data);
};

const editClinic = (inputData) => {
  return axios.put("/api/edit-clinic", inputData);
};

const deleteClinic = (clinic) => {
  return axios.delete("/api/delete-clinic", {
    data: {
      id: clinic,
    },
  });
};

const getAllClinic = () => {
  return axios.get(`/api/get-clinic`);
};

const getAllDetailClinicById = (data) => {
  return axios.get(`/api/get-detail-clinic-by-id?id=${data.id}`);
};

const getAllPatientForDoctor = (data) => {
  return axios.get(
    `/api/get-list-patient-for-doctor?doctorId=${data.doctorId}&date=${data.date}`
  );
};

const postSendRemedy = (data) => {
  return axios.post("/api/send-remedy", data);
};

const postSendEmail = (data) => {
  return axios.post("/api/send-email", data);
};

const createNewBlog = (data) => {
  return axios.post("/api/create-new-blog", data);
};

const editBlog = (inputData) => {
  return axios.put("/api/edit-blog", inputData);
};

const deleteBlog = (blog) => {
  return axios.delete("/api/delete-blog", {
    data: {
      id: blog,
    },
  });
};

const getAllBlog = () => {
  return axios.get(`/api/get-blog`);
};

const getAllDetailBlogById = (data) => {
  return axios.get(`/api/get-detail-blog-by-id?id=${data.id}`);
};

export {
  handleLoginApi,
  getAllUsers,
  createNewUserServicer,
  deleteUserService,
  editUserService,
  forgotUserPassword,
  apiResetPassword,
  registerNewUser,
  getAllCodeService,
  getTopDoctorHomeService,
  getAllDoctors,
  saveDetailDoctor,
  getDetailInforDoctor,
  saveBulkScheduleDoctor,
  getScheduleDoctorByDate,
  getExtraInforDoctorById,
  getProfileDoctorById,
  postPatientBookAppoinment,
  postVerifyBookAppoinment,
  createNewSpecialty,
  getAllSpecialty,
  getAllDetailSpecialtyById,
  createNewClinic,
  getAllClinic,
  getAllDetailClinicById,
  getAllPatientForDoctor,
  postSendRemedy,
  editClinic,
  deleteClinic,
  editSpecialty,
  deleteSpecialty,
  createNewBlog,
  editBlog,
  deleteBlog,
  getAllBlog,
  getAllDetailBlogById,
  postSendEmail,
};
