import React from "react";

function StepOne({formData, setFormData}) {
  return (
    <div className="border-2">
      <div>
        <h3>Create your TribeLink account</h3>
        <p>Tell the tribe who you are.</p>
      </div>

      <div>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="@username"

              value={formData.username}
              onChange={(e) => {
                setFormData({
                    ...formData,
                    username : e.target.value,
                })
              }}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourmail@gmail.com"

              value={formData.email}
              onChange = {(e) => {
                setFormData({
                    ...formData,
                    email : e.target.value,
                })
              }}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="city"

              value={formData.location}
              onChange = {(e) => {
                setFormData({
                    ...formData,
                    location : e.target.value,
                })
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"

              value={formData.password}
              onChange={(e) =>{
                setFormData({
                    ...formData,
                    password : e.target.value,
                })
              }}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              id="bio"
              placeholder="Tell us something about yourself"

              value={formData.bio}
              onChange={(e) =>{
                setFormData({
                    ...formData,
                    bio : e.target.value,
                })
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default StepOne;
