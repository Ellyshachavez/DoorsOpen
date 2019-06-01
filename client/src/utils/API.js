import axios from "axios";

export default {
  // Gets all peoples
  getPeoples: function() {
    return axios.get("/api/people");
  },
  // Gets the people with the given id
  getPeople: function(id) {
    return axios.get("/api/people/" + id);
  },
  // Deletes the people with the given id
  deletePeople: function(id) {
    return axios.delete("/api/people/" + id);
  },
  // Saves a people to the database
  savePeople: function(peopleData) {
    return axios.post("/api/people", peopleData);
  },
  savePic: function(file) {
    console.log("got to API.js file");
    return axios.post("/api/pics", file);
  }
};
