async function connectToDatabase(user, password) {
  if (user === "naruto" && password === "uzumaki") {
    console.log("Conectado com sucesso!");
  } else {
    console.log("Usuário ou senha inválidos!");
  }
}

export default connectToDatabase;