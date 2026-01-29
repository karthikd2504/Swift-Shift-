const form = document.getElementById("quoteForm");
const responseMsg = document.getElementById("responseMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    city: city.value
  };

  try {
    const res = await fetch("http://localhost:5000/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    responseMsg.style.color = "lightgreen";
    responseMsg.innerText = result.message;
    form.reset();

  } catch {
    responseMsg.style.color = "red";
    responseMsg.innerText = "Server error. Try again.";
  }
});