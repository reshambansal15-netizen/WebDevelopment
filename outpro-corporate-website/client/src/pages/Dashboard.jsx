import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch all contacts
  const fetchContacts = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/contact`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setContacts(res.data.data || []);
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};

  // Runs once when component loads
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/admin";
      return;
    }

    fetchContacts();
  }, []);

  // Delete contact
  const deleteContact = async (id) => {
  const token = localStorage.getItem("token");

  if (!window.confirm("Delete this message?")) return;

  try {
    await axios.delete(
      `${import.meta.env.VITE_API_URL}/contact/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchContacts();
  } catch (error) {
    console.error(error);
  }
};

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin";
  };

  // Search
  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>

        <button
          className="btn btn-danger"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-responsive">
        <table className="table table-bordered table-hover">

          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.subject}</td>
                  <td>{contact.message}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteContact(contact._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center"
                >
                  No contacts found.
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Dashboard;