const inputs = document.querySelectorAll('.text-area input');
const labels = document.querySelectorAll('.text-area label');

labels.forEach(label => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, idx) => `<span style="
				transition-delay: ${idx * 50}ms
			">${letter}</span>`)
		.join('');
});
