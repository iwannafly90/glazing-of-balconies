const checkNumInputs = (selector) => {
    const numInpust = document.querySelectorAll(selector);
    numInpust.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
}

export default checkNumInputs;