import { useState } from "react";
import { useAppState } from "../../context/AppStateContext.jsx";
import "./ProfileSection.css";

function ProfileSection() {
  const { user } = useAppState();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <section className="profile-section">
      <div className="section-header">
        <div>
          <h2>Profile</h2>
          <p>Update your basic account details.</p>
        </div>
      </div>

      <div className="profile-fields">
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          Email address
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
    </section>
  );
}

export default ProfileSection;
