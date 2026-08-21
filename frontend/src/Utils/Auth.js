class Auth {
  constructor(options) {
    //en los parentesis solo van parametros (solo para el constructor)
    this.baseUrl = options.baseUrl; //dentro de las llaves registramos las propiedades que se utilizaran a lo largo de la clase
    this.headers = options.headers;
  }

  signIn({ email, password }) {
    return fetch(this.baseUrl + "/users", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ email, password }),
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

  logIn({ email, password }) {
    return fetch(this.baseUrl + "/users/signin", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al iniciar sesión");
        }
        return response.json();
      })
      .then((data) => {
        // Si la API devuelve un token JWT
        localStorage.setItem("token", data.token);
        return data;
      });
  }
}

export const auth = new Auth({
  baseUrl: "https://api.miproyectotripleten.mooo.com",
  headers: {
    authorization: "06f1087a-ea72-4331-b20a-47ee42c926d9",
    "Content-Type": "application/json",
  },
});
