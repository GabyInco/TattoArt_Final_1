// Dall-e
const btn = document.querySelector("#btn");
const img = document.querySelector("#img");
const input = document.querySelector("#input");

const OPENAI_API_KEY = " ";




btn.addEventListener("click", async () => {
    if (input.value === "") {
        alert("Por favor ingresa tu idea");
        return;
    }

    if (OPENAI_API_KEY === " ") {
        alert("POR FAVOR INGRESE LA API KEY ")
        return;
    }


    btn.disabled = true;

    const res = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        body: JSON.stringify({
            prompt: input.value,
            n: 1,
            size: "1024x1024",
        }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
    });
    const data = await res.json();
    console.log(data);

    input.value = "";

    img.src = data.data[0].url;
    btn.disabled = false;
});


