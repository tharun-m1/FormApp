document.getElementById("form1").addEventListener("submit", function (event) {
  event.preventDefault();

  let payload = {};

  const formData = new FormData(this);
  formData.forEach((value, key) => {
    payload = { ...payload, [key]: value.trim() };
  });
  let loader = document.getElementById("loader");
  loader.style.display = "flex";
  fetch("http://localhost:4000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      localStorage.setItem("data", JSON.stringify(res.data));
      loader.style.display = "none";
      window.location.href = "./data.html";
    })
    .catch((err) => {
      loader.style.display = "none";
      console.log(err);
      alert("Something went wrong.");
    });
});
