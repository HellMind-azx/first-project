import './style.css'

function Profile({ isOpen, onClose, user }) {
  if (!isOpen) return null;
  return(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="profile">
          <div className="details">
            <h2>{user.fullName}</h2>
            <p>@{user.username}</p>
            <p>{user.phone}</p>
            <p>{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile