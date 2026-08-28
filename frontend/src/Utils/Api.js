class Api {
  constructor(options) {
    //en los parentesis solo van parametros (solo para el constructor)
    this.baseUrl = options.baseUrl; //dentro de las llaves registramos las propiedades que se utilizaran a lo largo de la clase
    this.headers = options.headers;
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
      //llamando a la API .Para llamar propiedades del constructor es a travez de"this"
      headers: this._getHeaders(),
    }).then((response) => {
      if (response.ok) {
        return response.json(); //es un metodo......
      }
      throw new Error("Error en la base de datos");
    });
  }

  addCard({ name, link }) {
    return fetch(this.baseUrl + "/cards/", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ name, link }),
    }).then((response) => {
      if (!response.ok) {
        //si responde ok, entonces significa que si agrego la carta en la API
        //entonces si la agrego, la vamos a reflejar en la pagina
        //es un metodo
        throw new Error("eror al agregar la carta");
      }
      return response.json();
    });
  }

  removeCard(cardID) {
    return fetch(`${this.baseUrl}/cards/${cardID}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._handleServerResponse);
  }
  liked(cardID, like) {
    return fetch(`${this.baseUrl}/cards/${cardID}/likes`, {
      method: like ? "PUT" : "DELETE",
      headers: this.headers,
    }).then(this._handleServerResponse);
  }
  setUserInfo({ name, about }) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ name, about }),
    }).then(this._handleServerResponse);
  }
  getCurrentUser() {
    return fetch(this.baseUrl + "/users/me", {
      method: "GET",
      //llamando a la API .Para llamar propiedades del constructor es a travez de"this"
      headers: this._getHeaders(),
    }).then((response) => {
      if (response.ok) {
        return response.json(); //es un metodo
      }
      throw new Error("Error al obtener usuario");
    });
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ avatar }),
    }).then(this._handleServerResponse);
  }

  // otros métodos para trabajar con la API
}
export const api = new Api({
  baseUrl: "https://api.miproyectotripleten.mooo.com",
  headers: {
    // authorization: "06f1087a-ea72-4331-b20a-47ee42c926d9",
    "Content-Type": "application/json",
  },
});
