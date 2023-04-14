(() => {
  const login = (email: string, password:string) => {
    console.log(email, password);
  }
  login("email@email.com", "password");

  const register = (data: {email: string, password: string}) => {
    console.log(data.email, data.password)
  }
  register({
    password: "emailPassword",
    email: "email@email.com"
  })

})();
