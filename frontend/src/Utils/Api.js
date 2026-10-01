class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _handleServerResponse(response) {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Error: ${response.status}`));
  }

  _getHeaders() {
    return {
      ...this.headers,
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
  }

  getInitialCards() {
    return fetch(this.baseUrl + "/cards/", {
      method: "GET",
      headers: this._getHeaders(),
    }).then(this._handleServerResponse);
  }

  addCard({ name, link }) {
    return fetch(this.baseUrl + "/cards/", {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({ name, link }),
    }).then(this._handleServerResponse);
  }

  removeCard(cardID) {
    return fetch(`${this.baseUrl}/cards/${cardID}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._handleServerResponse);
  }

  liked(cardID, like) {
    return fetch(`${this.baseUrl}/cards/${cardID}/likes`, {
      method: like ? "PUT" : "DELETE",
      headers: this._getHeaders(),
    }).then(this._handleServerResponse);
  }

  setUserInfo({ name, about }) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({ name, about }),
    }).then(this._handleServerResponse);
  }

  getCurrentUser() {
    return fetch(this.baseUrl + "/users/me", {
      method: "GET",
      headers: this._getHeaders(),
    }).then(this._handleServerResponse);
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({ avatar }),
    }).then(this._handleServerResponse);
  }
}

export const api = new Api({
  //baseUrl: "https://api.miproyectotripleten.mooo.com",
  baseUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
