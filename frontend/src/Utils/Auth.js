class Auth {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  // Registrar usuario
  signUp({ email, password }) {
    return fetch(this.baseUrl + "/signUp", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Error al registrar usuario");
      }

      return response.json();
    });
  }

  // Iniciar sesión
  logIn({ email, password }) {
    return fetch(this.baseUrl + "/signIn", {
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
        localStorage.setItem("token", data.token);
        return data;
      });
  }
}

export const auth = new Auth({
  // baseUrl: "https://api.miproyectotripleten.mooo.com",
  baseUrl: "http://localhost:3000",

  headers: {
    "Content-Type": "application/json",
  },
});
