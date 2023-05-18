import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import PasswordItem from '../PasswordItem'

class PasswordManger extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    toShow: false,
  }

  onDelete = name => {
    const {passwordsList} = this.state

    const updatedPasswordList = passwordsList.filter(
      eachPassword => eachPassword.website !== name,
    )

    this.setState({passwordsList: updatedPasswordList})
  }

  renderPasswordsList = () => {
    const {passwordsList, toShow} = this.state

    return passwordsList.length === 0 ? (
      <div className="no-password-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no-password-image"
        />
        <p className="password-heading">No Passwords</p>
      </div>
    ) : (
      <ul className="passwords-list-container">
        {passwordsList.map(eachPassword => (
          <PasswordItem
            key={eachPassword.id}
            details={eachPassword}
            show={toShow}
            isDelete={this.onDelete}
          />
        ))}
      </ul>
    )
  }

  onChangeCheckBox = () => {
    this.setState(prevState => ({toShow: !prevState.toShow}))
  }

  onSearchPasswordsList = event => {
    const {passwordsList} = this.state
    const searchValue = event.target.value

    const updatedPasswordsList = passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchValue),
    )

    this.setState({
      passwordsList: updatedPasswordsList,
      searchInput: searchValue,
    })
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newPassword = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  render() {
    const {
      passwordsList,
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
    } = this.state

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo-img"
        />
        <div className="add-password-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-image-sm"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-image-lg"
          />
          <form className="form-container" onSubmit={this.onAddPassword}>
            <h1 className="password-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-image"
              />
              <hr className="line" />
              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                value={websiteInput}
                onChange={this.onChangeWebsiteInput}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-image"
              />
              <hr className="line" />
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                value={usernameInput}
                onChange={this.onChangeUsernameInput}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-image"
              />
              <hr className="line" />
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                value={passwordInput}
                onChange={this.onChangePasswordInput}
              />
            </div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
        </div>
        <div className="passwords-container">
          <div className="passwords-count-search-container">
            <div>
              <h1 className="password-name">Your Passwords</h1>
              <p className="passwords-count">{passwordsList.length}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-input-image"
              />
              <hr className="line" />
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                value={searchInput}
                onChange={this.onSearchPasswordsList}
              />
            </div>
          </div>
          <hr className="search-line" />
          <div className="check-box-container">
            <input
              id="showPassword"
              type="checkbox"
              className="checkbox-input"
              onChange={this.onChangeCheckBox}
            />
            <label htmlFor="showPassword" className="label">
              Show Passwords
            </label>
          </div>
          {this.renderPasswordsList()}
        </div>
      </div>
    )
  }
}

export default PasswordManger
