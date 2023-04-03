const checkboxes = document.querySelectorAll('input[type="radio"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        ;
        const input = this.document.activeElement;
        const el = document.getElementById(`${input.name}_iftrue`);

        if (input.value === "0" && !["q19", "q25", "q30"].includes(input.name)) {
            el?.setAttribute("required", "");
        } else if (input.value === "1" && input.name === "q19") {
            el?.setAttribute("required", "");
        } else if (input.value == "0" && input.name == "q25" || input.value == "1" && input.name == "q25") {
            el?.setAttribute("required", "");
        } else if (input.value == "0" && input.name == "q30") {
            document.getElementById("q30_1-0")?.setAttribute("required", "");
            document.getElementById("q30_2-0")?.setAttribute("required", "");
            document.getElementById("q30_2")?.removeAttribute("required");
        } else if (input.name == "q30") {
            document.getElementById("q30_1-0")?.removeAttribute("required");
            document.getElementById("q30_2-0")?.removeAttribute("required");
            document.getElementById("q30_2")?.setAttribute("required", "");
        } else {
            el?.removeAttribute("required");
        }
    });
});

const cnpjInput = document.getElementById("dados2");

const modal = new bootstrap.Modal("#modalError", {
    keyboard: true
});

const msgError = document.getElementById("msgError");

function validar(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, "");

    if (cnpj === "") {
        return false;
    }

    if (cnpj.length !== 14) {
        return false;
    }

    if (
        cnpj === "00000000000000" ||
        cnpj === "11111111111111" ||
        cnpj === "22222222222222" ||
        cnpj === "33333333333333" ||
        cnpj === "44444444444444" ||
        cnpj === "55555555555555" ||
        cnpj === "66666666666666" ||
        cnpj === "77777777777777" ||
        cnpj === "88888888888888" ||
        cnpj === "99999999999999"
    ) {
        return false;
    }

    // Valida DVs
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += Number(numeros.charAt(tamanho - i)) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== Number(digitos.charAt(0))) {
        return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += Number(numeros.charAt(tamanho - i)) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== Number(digitos.charAt(1))) {
        return false;
    }

    return true;
}

cnpjInput.addEventListener("focusout", () => {
    if (!cnpjInput.value) return;

    cnpjInput.value = cnpjInput.value.replace(/^(\d{2})\.?(\d{3})\.?(\d{3})\/?(\d{4})\-?(\d{2})$/, "$1.$2.$3/$4-$5");

    if (!validar(cnpjInput.value)) {
        if(window.location.href.endsWith("en")) {
            msgError.textContent = "Invalid CNPJ";
        } else {
            msgError.textContent = "CNPJ inválido";
        }
        modal.show();
    }
});

document.getElementById("modalError").addEventListener("hidden.bs.modal", () => {
    cnpjInput.focus();
});