import http from "../http-common";

class UploadDataService {
  getAll() {
    return http.get("/upload");
  }

  get(id) {
    return http.get(`/upload/${id}`);
  }

  create(data) {
    return http.post("/upload", data);
  }

  update(id, data) {
    return http.put(`/upload/${id}`, data);
  }

  delete(id) {
    return http.delete(`/upload/${id}`);
  }

  deleteAll() {
    return http.delete(`/upload`);
  }

  findByTitle(title) {
    return http.get(`/upload?title=${title}`);
  }
}

export default new UploadDataService();
