import axios from "axios";

export default {
  // Gets all books
  getEvents: function(token) {
    return axios.get("/api/calendar", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },

  getRegistrations: function(token) {
    return axios.get("/api/registration", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  // Gets the book with the given id
  getEvent: function(id) {
    return axios.get("/api/calendar/" + id);
  },
  // Deletes the book with the given id
  deleteLead: function(id) {
    return axios.delete("/api/home/" + id);
  },
  // Saves a book to the database
  saveLead: function(bookData) {
    return axios.post("/api/home", bookData);
  },
  join: function(userData) {
    return axios.post("/api/users/join", userData);
  },
  login: function(userData) {
    console.log(userData)
    return axios.post("/api/users/login", userData);
  },
 
  getPeople: function(id) {
    return axios.get("/api/people/" + id);
  },

  register: function(id, data) {
    return axios.put("/api/users/people/" + id, data);
  },

  calendar: function(userData) {
    return axios.post("/api/users/calendar", userData);
  },
  // Send Email
  sendPassEmail: function(emailobj){
    console.log("sending an email to server")
    return axios.post("/api/sendPassEmail", emailobj)
  },
  //Reset Password
    sendChangePass: function(passobj){
    return axios.post('/api/passwordreset/savePass',passobj)
  },

  // Saves a people to the database
 saveUser: function(userData) {
  return axios.post("/api/user", userData);
}
};


