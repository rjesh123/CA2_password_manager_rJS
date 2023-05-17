import './index.css'

const PasswordItem = props => {
  const {details, show, isDelete} = props
  const {website, username, password} = details

  const classArray = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5']
  const initialBackground =
    classArray[Math.floor(Math.random() * classArray.length)]

  const getPassword =
    show === true ? (
      <p className="paragraph">{password}</p>
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="star-image"
      />
    )

  const onDeletePasswordItem = () => {
    isDelete(website)
  }

  return (
    <li className="password-container">
      <h1 className={`initial-letter ${initialBackground}`}>{website[0]}</h1>
      <div>
        <p className="paragraph">{website}</p>
        <p className="paragraph">{username}</p>
        {getPassword}
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onDeletePasswordItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
