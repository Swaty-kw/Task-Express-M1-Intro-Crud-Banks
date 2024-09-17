const express = require("express");
const accounts = require("./accounts");

const app = express();
app.use(express.json());
app.get("/api/accounts", (request, response) => {
  return response.status(200).json({ data: accounts });
});

app.delete("/api/account/:accountId", (request, response) => {
  const { accountId } = request.params;
  const updatedAccounts = accounts.filter((account) => {
    if (account.id != accountId) {
      return true;
    }
  });
  if (updatedAccounts.id != accountId) {
    return response.status(404).json({ msg: "Account Not Found" });
  }
  return response.status(200).json({ Data: updatedAccounts });
});
app.post("/api/accounts", (request, response) => {
  let length = student.length;
  let newID = accounts[length - 1].id + 1;
  const newAccount = {
    id: newID,
    ...request.body,
  };
  accounts.push(newAccount);

  return response.status(201).json({ data: accounts });
});

app.put("/api/accounts:accountId", (request, response) => {
  const { accountId } = request.params;
  const accountfound = account.find((account) => {
    if (account.id == id) {
      return true;
    }
    if (accountfound.id != accountId) {
      return response.status(404).json({ msg: "Account not Found" });
    }
  });
  return response.status(200).json({ data: accountfound });
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
