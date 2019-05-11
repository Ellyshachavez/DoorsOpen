import axios from "axios";

export default {
  // Gets all peoples
  getPeoples: function() {
    return axios.get("/api/peoples");
  },
  // Gets the people with the given id
  getPeople: function(id) {
    return axios.get("/api/peoples/" + id);
  },
  // Deletes the people with the given id
  deletePeople: function(id) {
    return axios.delete("/api/peoples/" + id);
  },
  // Saves a people to the database
  savePeople: function(peopleData) {
    return axios.post("/api/peoples", peopleData);
  }
};
