import React, {useState, useEffect} from "react";
import UserCard from "./UserCard";

function Connect() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

    // fetch user data to display
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users");
      const data = await response.json();

      if (data.success) {
        setUsers(data.users);
      }else{
        setError("Failed to fetch users.");
      }
    } catch (err) {
      console.error("Error fetching users : ", err);
      setError("Could not connect to the server");
    } finally {
      setLoading(false);
    }
  };

  //runs once the component is mounted ( initial render )
  useEffect(() => {
    fetchUsers();
  }, []);

  return(
    <section className="relative mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
      
      {/* Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Connect with People
        </h2>

        <p className="mt-2 text-white/40">
          Find players who share your interests.
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-10 text-center text-white/60">
          Loading users...
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="py-10 text-center text-red-400">
          {error}
        </div>
      )}

      {/* No Users */}
      {!loading && !error && users.length === 0 && (
        <div className="py-10 text-center text-white/50">
          No users found.
        </div>
      )}

      {/* Users */}
      {!loading && !error && users.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard
              key={user._id}
              user={user}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default Connect;
