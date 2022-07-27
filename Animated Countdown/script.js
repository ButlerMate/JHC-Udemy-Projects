const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnim();

function resetDOM() {
	counter.classList.remove('hide');
	final.classList.remove('show');

	nums.forEach((num) => {
		num.classList.value = '';
	});

	nums[0].classList.add('in');
}

function runAnim() {
	nums.forEach((num, idx) => {
		const nextToLast = nums.length - 1;

		num.addEventListener('animationend', (e) => {
			if (e.animationName === 'showNum' && idx !== nextToLast) {
				num.classList.remove('in');
				num.classList.add('out');
			} else if (e.animationName === 'hideNum' && num.nextElementSibling) {
				num.nextElementSibling.classList.add('in');
			} else {
				counter.classList.add('hide');
				final.classList.add('show');
			}
		});
	});
}

replay.addEventListener('click', () => {
	resetDOM();
	runAnim();
});